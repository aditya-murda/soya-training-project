import Head from "next/head";
import { createPage } from "soya-next";
import Layout from "../components/Layout/Layout";

const IndexPage = () => (
  <Layout>
    <Head>
      <title>Bitcoin</title>
    </Head>
    <p>mroemzh</p>
  </Layout>
);

export default createPage()(IndexPage);
