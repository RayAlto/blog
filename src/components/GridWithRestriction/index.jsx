import * as React from 'react';

import Grid from '@mui/material/Grid';

import withStyles from '@mui/styles/withStyles';

class GridWithRestriction extends React.Component {

  render() {

    const {
      children,
      classes,
    } = this.props;

    return (

      <Grid
        className={classes.grids}
        container
        spacing={3}
        alignItems="baseline"
        direction="row"
        justifyContent="space-around"
      >
        {children}
      </Grid>
    );

  };

};

export default withStyles(theme => ({

  grids: {

    "& > *": {
      maxWidth: 510,
      minWidth: 260,
    },

  },

}))(GridWithRestriction);