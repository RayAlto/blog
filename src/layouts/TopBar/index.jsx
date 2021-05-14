import React from "react";

import PubSub from "pubsub-js";

import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import { withStyles } from "@material-ui/core/styles";

// import SearchBox from "../../SearchBox";
import HideOnScroll from "../../components/HideOnScroll";
import WeiboIcon from "../../icons/Weibo";
import BilibiliIcon from "../../icons/Bilibili";

const drawerWidth = 260;

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
              onClick={event => PubSub.publish("toggle_sidebar")}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              RayAlto - 主页
            </Typography>
            <div className={this.props.classes.grow} />
            <IconButton
              href="https://space.bilibili.com/67047863"
              target="_blank"
              aria-label="This is an icon button"
              color="inherit"
            >
              <BilibiliIcon />
            </IconButton>
            <IconButton
              href="https://weibo.com/RayAlto"
              target="_blank"
              aria-label="This is an icon button"
              color="inherit"
            >
              <WeiboIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/RayAlto1"
              target="_blank"
              aria-label="This is an icon button"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://github.com/RayAlto"
              target="_blank"
              aria-label="This is an icon button"
              color="inherit"
            >
              <GithubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    );
  }
}

export default withStyles(theme => ({

  grow: {
    flexGrow: 1,
  },

  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

}))(TopBar);