import React from "react";

import Head from "next/head";

import Divider from "@material-ui/core/Divider";

import Div from "../../components/Div";
import Header from "../../components/Header";

export default class Contact extends React.Component {

  render() {
    return (
      <Div>
        <Head>
          <title>RayAlto - 社交</title>
        </Head>
        <Header>社交</Header>
        <Divider />
      </Div>
    )
  }

}