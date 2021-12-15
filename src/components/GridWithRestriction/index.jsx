import * as React from 'react';

import Grid from '@mui/material/Grid';

import withStyles from '@mui/styles/withStyles';

class GridWithRestriction extends React.Component {

  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({ mounted: true });
  };

  render() {

    const {
      mounted,
    } = this.state;

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
        {mounted && this.props.children}
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