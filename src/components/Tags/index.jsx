import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import withStyles from '@mui/styles/withStyles';

class Tags extends React.Component {

  render() {

    return (
      <Box className={this.props.classes.root} {...this.props}>
        <Typography>Tags:</Typography>
        {this.props.children}
      </Box>
    );
  };

};

export default withStyles(theme => ({

  root: {

    display: "flex",
    flexWrap: "wrap",

    "& > *": {
      margin: theme.spacing(0.3),
    },

  },

}))(Tags);