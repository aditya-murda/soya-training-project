import Head from "next/head";
import React from "react";
import { createPageWithOIDCAuth, OIDCAuthorize } from "@traveloka/soya-components/ath";
import AddCurrency from "../../containers/currencies/AddCurrency";
import Layout from "../../components/Layout/Layout";

const IndexPage = () => (
  <OIDCAuthorize>
    <Layout>
      <div>
        <Head>
          <title>Bitcoin</title>
        </Head>
        <h1>Add currency</h1>
        <AddCurrency />
      </div>
    </Layout>
  </OIDCAuthorize>
);
export default createPageWithOIDCAuth()(IndexPage);