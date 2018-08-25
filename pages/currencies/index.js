import Head from "next/head";
import React from 'react';
import { createPageWithOIDCAuth, OIDCAuthorize } from '@traveloka/soya-components/ath';
import CurrencyTable from '../../containers/currencies/CurrencyTable';
import { ModalContainer } from '@traveloka/soya-components';
import Layout from "../../components/Layout/Layout";

const IndexPage = () => (
  <OIDCAuthorize>
    <Layout>
      <div>
        <Head>
          <title>Bitcoin</title>
        </Head>
        <h1>All currencies</h1>
        <br />
        <CurrencyTable />
        <ModalContainer />
      </div>
    </Layout>
  </OIDCAuthorize>
);
export default createPageWithOIDCAuth()(IndexPage);