import * as React from 'react';

import PropTypes from 'prop-types';

import { NextLinkComposed as Link } from '../../components/Link';

import Chip from '@mui/material/Chip';

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
          target="_blank"
          rel="noopener noreferrer"
          clickable
          href={href}
        />
      )
    );

  };

};