import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "../utils/theme";
import ExitTina from "@/components/exitTina"
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });
import { TinaCloudCloudinaryMediaStore } from 'next-tinacms-cloudinary'
import '../styles/globals.css';
import { useRouter } from 'next/router';

export function AppThemeProvider({ children }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

const App = ({ Component, pageProps }) => {    
    const router = useRouter();
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
                        mediaStore={TinaCloudCloudinaryMediaStore}
                        cmsCallback={cms => {
                                            import('react-tinacms-editor').then((field)=>{
                                              cms.plugins.add(field.MarkdownFieldPlugin)
                                              })
                                        }}
                        documentCreatorCallback={{
                                            /**
                                             * After a new document is created, redirect to its location
                                             */
                        onNewDocument: ({ collection: { slug }, breadcrumbs }) => {
                                              const relativeUrl = `/post/${breadcrumbs}`;
                                              return (router.push(relativeUrl));
                                            },
                                            /**
                                             * Only allows documents to be created to the `Blog Posts` Collection
                                             */
                                            filterCollections: (options) => {
                                              return options.filter(
                                                (option) => option.label === "Blog Posts"
                                              );
                                            },
                                          }}                                        
                        {...pageProps}>
                        {(livePageProps) => (
                            <AppThemeProvider>
                                <Header />
                                <ExitTina/>
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
