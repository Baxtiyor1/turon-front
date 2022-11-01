import Head from "next/head";

// import Components
import Layout from "../../src/Components/layout/layout";
import ProductSingleIntro from "../../src/Components/productSingle/productSingle";

export default function ProductSingle() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ProductSingleIntro/>
      </Layout>
    </>

  );
}
