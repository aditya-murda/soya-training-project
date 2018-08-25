import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import React from 'react';
import { createPageWithOIDCAuth, OIDCAuthorize } from '@traveloka/soya-components/ath';
import Settings from '../../containers/settings/Settings';

const title = 'Settings';
const heading = 'Settings';

const IndexPage = () => (
  <OIDCAuthorize>
    <Layout>
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <h1>{heading}</h1>
        <Settings />
      </div>
    </Layout>
  </OIDCAuthorize>
);
export default createPageWithOIDCAuth()(IndexPage);