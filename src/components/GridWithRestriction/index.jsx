import React from "react";

import Grid from "@material-ui/core/Grid";

import withStyles from "@material-ui/core/styles/withStyles";

class GridWithRestriction extends React.Component {

  render() {
    return (
      <Grid className={this.props.classes.blogCards} container spacing={3} alignItems="baseline" direction="row" justify="space-around">
        {this.props.children}
      </Grid>
    );
  };

};

export default withStyles(theme => ({

  blogCards: {

    "& > *": {
      maxWidth: 510,
      minWidth: 260,
    },

  },

}))(GridWithRestriction);