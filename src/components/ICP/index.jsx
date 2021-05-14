import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import VerifiedUserRoundedIcon from "@material-ui/icons/VerifiedUserRounded";

class ICP extends React.Component {

  static propTypes = {
    ipcLink: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
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
      </Grid>
    )
  }
}

export default withStyles(theme => ({

  button: {
    margin: theme.spacing(1),
  },

}))(ICP);