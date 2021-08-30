import React from 'react';

import Head from "next/head";

import Divider from "@material-ui/core/Divider";

import GlobalFrame from '../../layouts/GlobalFrame';

import Header from "../../components/Header";

class Contact extends React.Component {

  render() {

    return (
      <GlobalFrame>
        <Head>
          <title>RayAlto - 社交</title>
        </Head>
        <Header>社交</Header>
        <Divider />
      </GlobalFrame>
    );

  };

};

export default Contact;