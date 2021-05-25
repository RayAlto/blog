import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";

class ICP extends React.Component {

  static propTypes = {
    ipcLink: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Button
        href={this.props.ipcLink}
        target="_blank"
        variant="text"
        color="secondary"
        className={this.props.classes.button}
        startIcon={<VerifiedUserRoundedIcon />}
      >
        {this.props.children}
      </Button>
    )
  }
}

export default withStyles(theme => ({

  button: {
    width: "100%",
  },

}))(ICP);