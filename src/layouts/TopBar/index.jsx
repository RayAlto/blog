import React from 'react';

import PubSub from 'pubsub-js';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import GithubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';

import withStyles from '@mui/styles/withStyles';

import { NextComposed as Link } from '../../components/Link';
import HideOnScroll from '../../components/HideOnScroll';

import BilibiliIcon from '../../icons/Bilibili';
import WeiboIcon from '../../icons/Weibo';

import {
  SIDEBAR_WIDTH
} from '../../constants/sizes';

import {
  OPEN_SIDEBAR
} from '../../constants/events';

class TopBar extends React.Component {

  render() {
    return (
      <HideOnScroll>
        <AppBar position="fixed" className={this.props.classes.appBar} >
          <Toolbar>
            <IconButton
              className={this.props.classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={event => PubSub.publish(OPEN_SIDEBAR)}
              size="large">
              <MenuIcon />
            </IconButton>
            <IconButton
              className={this.props.classes.homeButton}
              color="inherit"
              aria-label="back to home"
              edge="start"
              component={Link}
              to="/"
              size="large">
              <HomeIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              RayAlto - 主页
            </Typography>
            <div className={this.props.classes.grow} />
            <IconButton
              href="https://space.bilibili.com/67047863"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="This is an icon button"
              color="inherit"
              size="large">
              <BilibiliIcon />
            </IconButton>
            <IconButton
              href="https://weibo.com/RayAlto"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="This is an icon button"
              color="inherit"
              size="large">
              <WeiboIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/RayAlto1"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="This is an icon button"
              color="inherit"
              size="large">
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://github.com/RayAlto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="This is an icon button"
              color="inherit"
              size="large">
              <GithubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    );
  };

};

export default withStyles(theme => ({

  grow: {
    flexGrow: 1,
  },

  appBar: {

    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
      marginLeft: SIDEBAR_WIDTH,
    },

  },

  menuButton: {

    marginRight: theme.spacing(2),

    [theme.breakpoints.up("sm")]: {
      display: "none",
    },

  },

  homeButton: {

    marginRight: theme.spacing(2),
    display: "none",

    [theme.breakpoints.up("sm")]: {
      display: "inline-flex",
    },

  }

}))(TopBar);