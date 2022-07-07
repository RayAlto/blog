import * as React from "react";

import PubSub from "pubsub-js";

import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

import { CLOSE_IMAGE_DIALOG, OPEN_IMAGE_DIALOG } from "../../constants/events";

export default class GlobalImageDialog extends React.Component {
  state = {
    title: undefined,
    image: undefined,
    alt: undefined,
    titleBar: false,
    open: false,
  };

  componentDidMount() {
    PubSub.subscribe(OPEN_IMAGE_DIALOG, (_, image) => {
      this.setState({ ...image, open: true });
    });
  }

  handleClose = () => {
    PubSub.publish(CLOSE_IMAGE_DIALOG, { ...this.state });
    this.setState({ open: false });
  };

  render() {
    const { open, title, image, alt, titleBar } = this.state;

    return (
      <Dialog open={open} onClose={this.handleClose} onClick={this.handleClose}>
        {titleBar && <DialogTitle>{title}</DialogTitle>}
        <img src={image?.src || image} alt={alt} title={title} />
      </Dialog>
    );
  }
}
