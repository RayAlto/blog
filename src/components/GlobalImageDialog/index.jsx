import React from "react";

import PubSub from "pubsub-js";

import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

import {
  CLOSE_IMAGE_DIALOG,
  OPEN_IMAGE_DIALOG,
} from "../../constants/events";

export default class ImageDialog extends React.Component {

  state = {
    title: undefined,
    image: undefined,
    alt: undefined,
    open: false,
  };

  componentDidMount() {
    PubSub.subscribe(OPEN_IMAGE_DIALOG, (_, image) => {
      this.setState({ ...image, open: true })
    });
  };

  handleClose = () => {
    PubSub.publish(CLOSE_IMAGE_DIALOG, { ...this.state });
    this.setState({ open: false });
  };

  render() {
    return (
      <Dialog open={this.state.open} onClose={this.handleClose} onClick={this.handleClose}>
        <DialogTitle>{this.state.title}</DialogTitle>
        <img src={this.state.image} alt={this.state.alt} />
      </Dialog>
    );
  };

};