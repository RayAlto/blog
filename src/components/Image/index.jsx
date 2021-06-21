import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import Paper from "@material-ui/core/Paper";

class Image extends React.Component {

  static propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {

    const src = this.props.src;
    const title = this.props.title;
    const classes = this.props.classes;

    return (
      <Paper component="img" src={src} title={title} alt={this.props.alt} className={classes.ratio} />
    );
  }

};

export default withStyles(theme => ({

  ratio: {
    width: "100%",
  },

}))(Image);