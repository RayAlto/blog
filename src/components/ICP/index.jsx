import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';

import withStyles from '@mui/styles/withStyles';

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
    );
  };

};

export default withStyles(theme => ({

  button: {
    width: "100%",
  },

}))(ICP);