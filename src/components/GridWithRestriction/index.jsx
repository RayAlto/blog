import React from "react";

import Grid from "@material-ui/core/Grid";

import withStyles from "@material-ui/core/styles/withStyles";

class GridWithRestriction extends React.Component {

  render() {
    return (
      <Grid className={this.props.classes.blogCards} container spacing={3} alignItems="center" direction="row" justify="space-around">
        {this.props.children}
      </Grid>
    );
  };

};

export default withStyles(theme => ({

  blogCards: {

    "& > *": {
      width: "100%",
      maxWidth: 510,
    },

  },

}))(GridWithRestriction);