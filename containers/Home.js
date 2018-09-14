import React, {Component} from "react";
import { connect } from 'react-redux';
import {Breadcrumb, Select, Label} from "@traveloka/soya-components";
import Link from "next/link";
import {} from "../actions/common/ServiceAction"

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    console.log(this.props);

    const links = [
      {
        title: "Home",
        href: "/"
      }, 
      {
        title: "Settings"
      }
    ];
  
    const options = [
      {
        label: "Tera",
        value: "tera"
      }, 
      {
        label: "Zetta",
        value: "zetta"
      }
    ];

    return (
      <div>
        <br/>
        <span>
          <Link href="/currencies"><a>Currencies</a></Link>
          <br/>
          <Link href="/settings"><a>Settings</a></Link>
        </span>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  userContext: {
    accessToken: state.oidc && state.oidc.token ? state.oidc.token.accessToken : null,
    userEmail: state.oidc && state.oidc.token ? state.oidc.token.userEmail: null,
    tokenBody: state.oidc && state.oidc.token ? state.oidc.token.tokenBody : null,
    permission: state.oidc.token.tokenBody['https://traveloka/permission'],
    aud: state.oidc.token.tokenBody['aud']
  }
});

export default connect(mapStateToProps)(Home);