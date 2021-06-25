import React from "react";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Chip from "@material-ui/core/Chip";

export default class Tag extends React.Component {

  static propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isRouteLink: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    isRouteLink: false,
  };

  render() {

    const {
      href,
      title,
      isRouteLink,
    } = this.props;

    return (
      isRouteLink ? (
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label={title}
          component={Link}
          clickable
          to={href}
        />
      ) : (
        <Chip
          variant="outlined"
          color="primary"
          size="small"
          label={title}
          component="a"
          clickable
          href={href}
        />
      )
    );

  };

};