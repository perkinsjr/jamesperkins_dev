import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../utils/theme";
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });
import '../styles/globals.css';

export function AppThemeProvider({ children }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

const App = ({ Component, pageProps }) => {
    return (
        <>
            <TinaEditProvider
                editMode={
                    <TinaCMS
                        clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
                        branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
                        organization={process.env.NEXT_PUBLIC_ORGANIZATION_NAME}
                        isLocalClient={Boolean(
                            Number(process.env.NEXT_PUBLIC_USE_LOCAL_CLIENT ?? true)
                        )}
                        cmsCallback={cms => {
                                            import('react-tinacms-editor').then((field)=>{
                                              cms.plugins.add(field.MarkdownFieldPlugin)
                                              })
                                        }}
                        {...pageProps}>
                        {(livePageProps) => (
                            <AppThemeProvider>
                                <Header />
                                <Component {...livePageProps} />
                                <Footer />
                            </AppThemeProvider>
                        )}
                    </TinaCMS>
                }>
                <AppThemeProvider>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </AppThemeProvider>
            </TinaEditProvider>
        </>
    );
};

export default App;
