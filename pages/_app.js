import Layout from "components/Layout";

import "assets/css/globals.css";
import "assets/scss/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
