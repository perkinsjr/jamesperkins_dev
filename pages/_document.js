import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../utils/theme";
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script async defer data-domain="jamesperkins.dev" src="https://plausible.io/js/plausible.js"></script>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
