import App from "next/app";
import Layout from "../components/_App/Layout";
class MyApp extends App {
  // is accessible outside of its class because it is a static method
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
    //since they're the same name {pageProps: pageProps} can be shortened

  }


  render() {
    const { Component, pageProps } = this.props;
    return (
      <Layout>
        <Component {...pageProps}/>
      </Layout>
        
      
    );
  }
}

export default MyApp;
