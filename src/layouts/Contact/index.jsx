import React from "react";

import Helmet from "react-helmet";

import Divider from "@material-ui/core/Divider";

import Div from "../../components/Div";
import Header from "../../components/Header";

export default class Contact extends React.Component {

  render() {
    return (
      <Div>
        <Helmet>
          <title>RayAlto - 社交</title>
        </Helmet>
        <Header>社交</Header>
        <Divider />
      </Div>
    )
  }

}