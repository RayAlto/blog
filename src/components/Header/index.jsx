import React from "react";

import PropTypes from "prop-types";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import withStyles from "@material-ui/core/styles/withStyles";

import Div from "../Div";

class Header extends React.Component {

  static propTypes = {
    divider: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    divider: false,
  };

  render() {

    const { divider, children, classes } = this.props;

    const text = (
      <Typography
        variant="h4"
        component="header"
        className={classes.text}
      >
        {children}
      </Typography>
    );

    return divider ? (
      <Div>
        <Divider className={classes.divider} />
        {text}
      </Div>
    ) : (
      text
    );

  };

};

export default withStyles(theme => ({

  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  text: {
    display: "inline-block",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    borderBottomColor: theme.palette.primary.main,
    borderBottomStyle: "solid",
    borderBottomWidth: theme.spacing(0.4),
  }

}))(Header);