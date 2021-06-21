import React from "react";
import PropTypes from "prop-types";

import PubSub from "pubsub-js";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

export default class ImageDialog extends React.Component {

  static propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  handleClose = () => { PubSub.publish(`close_imageDialog_${this.props.alt}`); };

  render() {
    return (
      <Dialog open={this.props.open} onClose={this.handleClose} onClick={this.handleClose}>
        <DialogTitle>{this.props.title}</DialogTitle>
        <img src={this.props.src} alt={this.props?.alt} />
      </Dialog>
    )
  }

}