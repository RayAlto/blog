import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import withStyles from "@material-ui/core/styles/withStyles";

class Notes extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>RayAlto - 笔记 - JAVA</title>
        </Helmet>
        <h1>Same shit, different day.</h1>
      </div>
    );
  };

};

export default withStyles(theme => ({}))(Notes);