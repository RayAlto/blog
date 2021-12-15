import * as React from 'react';

import PropTypes from 'prop-types';

import PubSub from 'pubsub-js';

import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';

import withStyles from '@mui/styles/withStyles';

import { OPEN_IMAGE_DIALOG } from '../../constants/events';

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
    const alt = this.props.alt;
    const classes = this.props.classes;

    return (
      <Tooltip title="单击图片以预览">
        <Paper component="img" src={src.src || src} alt={alt} className={classes.ratio} onClick={this.openPreview} />
      </Tooltip>
    );

  };

};

export default withStyles(theme => ({

  ratio: {
    width: "100%",
  },

}))(Image);