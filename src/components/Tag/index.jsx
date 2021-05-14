import React from "react";
import PropTypes from "prop-types";

import Chip from "@material-ui/core/Chip";

export default class Tag extends React.Component {

  static propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Chip variant="outlined" color="primary" size="small" label={this.props.title} component="a" clickable {...this.props} />
    );
  };

}