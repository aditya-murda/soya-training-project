import React from 'react';
import { Icon, NotificationContainer } from "@traveloka/soya-components";
import { OIDCLayout } from '@traveloka/soya-components/ath';
import Link from 'next/link'
import "@traveloka/soya-components/styles";
import Head from "next/head";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import styles from "./Layout.module.css";
import "../../styles/global.css";

const menus = () => [
  {
    title: "Bitcoin",
    iconText: <Icon icon="home"/>,
    links: [
      <Link href="/"><a><Icon icon="dashboard"/>Dashboard</a></Link>
    ]
  },
  {
    title: "Master",
    iconText: <Icon icon="apps"/>,
    links: [
      <Link href="/currencies"><a><Icon icon="local-atm"/>Currencies</a></Link>,
      <Link href="settings"><a><Icon icon="settings"/>Settings</a></Link>
    ]
  }
];

const Layout = ({ children }) => (
  <OIDCLayout menuData={menus()}>
    <Head><link href="/static/favicon.ico"/></Head>
    <NotificationContainer />
    {children}
  </OIDCLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
