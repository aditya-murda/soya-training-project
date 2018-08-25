import Head from "next/head";
import { createPage } from "soya-next";
import Layout from "../components/Layout/Layout";
import React from 'react';
import { createPageWithOIDCAuth, OIDCAuthorize } from '@traveloka/soya-components/ath';
import {Breadcrumb, Select, Label} from "@traveloka/soya-components";
import Home from "../containers/Home";

let title = "Bitcoin";
let heading = "Home";

const IndexPage = () => (
  <OIDCAuthorize>
  <Layout>
    <Head>
      <title>{title}</title>
      <h1>{heading}</h1>
    </Head>
    <Home />
  </Layout>
  </OIDCAuthorize>
);

export default createPageWithOIDCAuth()(IndexPage);
