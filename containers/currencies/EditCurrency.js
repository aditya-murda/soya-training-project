import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import { parseQueryString } from "../../components/Layout/util";
import {Breadcrumb, Select, Label} from "@traveloka/soya-components";
import AddCurrency from "./AddCurrency";

class EditCurrency extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        currencyId: undefined
    }
  }

  componentWillMount = async () => {
    const id = parseQueryString().id;
    this.setState({
        currencyId: id
    });
  }

  render() {
    return (
        <AddCurrency currencyId={this.state.currencyId} />
    );
  }
}

export default EditCurrency;