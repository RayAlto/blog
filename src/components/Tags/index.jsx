import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

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