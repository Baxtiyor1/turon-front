import Head from "next/head";

// import Components
import Layout from "../src/Components/layout/layout";
import HomeIntro from "../src/Components/homeIntro/homeIntro";
import HomeAbout from "../src/Components/homeAbout/homeAbout";
import { HomeProduct } from "../src/Components/home-product/homeProduct";
import { HomeKitchen } from "../src/Components/home-kitchen/homeKitchen";
import { HomeContact } from "../src/Components/home-contact/homeContact";


export default function Home() {
  return (
    <>
      <Head>
        <title>Turon uni</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout bgPathLay="home">
        <HomeIntro />
        <HomeAbout />
        <HomeProduct />
        <HomeKitchen />
        <HomeContact />
      </Layout>
    </>
  );
}
