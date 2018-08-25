import Head from "next/head";
import React from 'react';
import { createPageWithOIDCAuth, OIDCAuthorize } from '@traveloka/soya-components/ath';
import EditCurrency from '../../containers/page/currencies/EditCurrency';
import Layout from "../../components/Layout/Layout";

const IndexPage = () => (
  <OIDCAuthorize>
    <Layout>
      <div>
        <Head>
          <title>Bitcoin</title>
        </Head>
        <h1>Edit currency</h1>
        <EditCurrency />
      </div>
    </Layout>
  </OIDCAuthorize>
);
export default createPageWithOIDCAuth()(IndexPage);