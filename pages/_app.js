import "../styles/globals.css";
import "prismjs/themes/prism-tomorrow.css";
import theme from "../utils/theme";
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChakraProvider } from "@chakra-ui/react";

export function AppThemeProvider({ children }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </AppThemeProvider>
  );
}
export default MyApp;
