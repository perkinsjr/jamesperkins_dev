import { Chakra } from "../utils/chakra";

import Header from "../components/header";
function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Header />
      <Component {...pageProps} />
    </Chakra>
  );
}
export default MyApp;
