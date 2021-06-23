import React from "react";

import PropTypes from "prop-types";

import PubSub from "pubsub-js";

import Paper from "@material-ui/core/Paper";

import withStyles from "@material-ui/core/styles/withStyles";

import { OPEN_IMAGE_DIALOG } from "../../constants/events";

class Image extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  openPreview = () => {
    PubSub.publish(OPEN_IMAGE_DIALOG, {
      image: this.props.src,
      title: this.props.title,
      alt: this.props.alt,
    });
  };

  render() {

    const src = this.props.src;
    const title = this.props.title;
    const alt = this.props.alt;
    const classes = this.props.classes;

    return (
      <Paper component="img" src={src} title={title} alt={alt} className={classes.ratio} onClick={this.openPreview} />
    );

  };

};

export default withStyles(theme => ({

  ratio: {
    width: "100%",
  },

}))(Image);