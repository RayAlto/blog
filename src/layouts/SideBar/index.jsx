import * as React from "react";

import PubSub from "pubsub-js";

import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import withStyles from "@mui/styles/withStyles";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Typography from "@mui/material/Typography";

import LinkIcon from "@mui/icons-material/Attachment";
import BlogIcon from "@mui/icons-material/Book";
import DrawioIcon from "@mui/icons-material/Brush";
import AriangIcon from "@mui/icons-material/CloudDownload";
import CommunicationIcon from "@mui/icons-material/Contacts";
import ScheduleIcon from "@mui/icons-material/DateRange";
import GmailIcon from "@mui/icons-material/Email";
import NoteIcon from "@mui/icons-material/EventNote";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import AboutIcon from "@mui/icons-material/Info";
import ToolsIcon from "@mui/icons-material/Widgets";

import Div from "../../components/Div";
import ICP from "../../components/ICP";
import { NextLinkComposed as Link } from "../../components/Link";

import JupyterIcon from "../../icons/Jupyter";
import QQIcon from "../../icons/QQ";
import WechatIcon from "../../icons/Wechat";

import QQQrImage from "../../../public/images/Qr-QQ.png";
import WechatQrImage from "../../../public/images/Qr-Wechat.png";

import {
  OPEN_IMAGE_DIALOG,
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
} from "../../constants/events";

import { SIDEBAR_WIDTH } from "../../constants/sizes";

class SideBar extends React.Component {
  state = {
    showSidebar: false,
    showToolsList: false,
  };

  toggleDrawer = (toggle) => () => {
    this.setState({ showSidebar: toggle });
  };
  handleDrawerToggle = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };

  collapseToolsList = (collapse) => () => {
    this.setState({ showToolsList: !collapse });
  };
  handleToolsListCollapse = () => {
    this.setState({ showToolsList: !this.state.showToolsList });
  };

  showQQ = () => {
    PubSub.publish(OPEN_IMAGE_DIALOG, {
      image: QQQrImage,
      title: "扫描二维码",
      alt: "QQ二维码",
    });
  };
  showWechat = () => {
    PubSub.publish(OPEN_IMAGE_DIALOG, {
      image: WechatQrImage,
      title: "扫描二维码",
      alt: "微信二维码",
    });
  };

  componentDidMount() {
    PubSub.subscribe(OPEN_SIDEBAR, () => {
      this.setState({ showSidebar: true });
    });
    PubSub.subscribe(CLOSE_SIDEBAR, () => {
      this.setState({ showSidebar: false });
    });
  }

  render() {
    const drawer = (
      <Div>
        <div className={this.props.classes.toolbar} />
        <List subheader={<ListSubheader component="div">菜单</ListSubheader>}>
          <ListItem component={Link} to="/" button key="主页">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="主页" />
          </ListItem>
          <ListItem component={Link} to="/blogs" button key="博客">
            <ListItemIcon>
              <BlogIcon />
            </ListItemIcon>
            <ListItemText primary="博客" />
          </ListItem>
          <ListItem component={Link} to="/notes" button key="笔记本">
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary="笔记本" />
          </ListItem>
          <ListItem component={Link} to="/schedule" button key="课程表">
            <ListItemIcon>
              <ScheduleIcon />
            </ListItemIcon>
            <ListItemText primary="课程表" />
          </ListItem>
          <ListItem
            button
            key="实用工具"
            onClick={this.handleToolsListCollapse}
          >
            <ListItemIcon>
              <ToolsIcon />
            </ListItemIcon>
            <ListItemText primary="实用工具" />
            {this.state.showToolsList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </ListItem>
          <Collapse in={this.state.showToolsList} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem
                component="a"
                href="https://jupyter.rayalto.top"
                target="_blank"
                rel="noopener noreferrer"
                button
                key="JupyterLab"
                className={this.props.classes.nestedListItem}
              >
                <ListItemIcon>
                  <JupyterIcon />
                </ListItemIcon>
                <ListItemText primary="JupyterLab" />
              </ListItem>
              <ListItem
                component="a"
                href="https://aria2.rayalto.top"
                target="_blank"
                rel="noopener noreferrer"
                button
                key="AriaNg"
                className={this.props.classes.nestedListItem}
              >
                <ListItemIcon>
                  <AriangIcon />
                </ListItemIcon>
                <ListItemText primary="AriaNg" />
              </ListItem>
              <ListItem
                component="a"
                href="https://drawio.rayalto.top"
                target="_blank"
                rel="noopener noreferrer"
                button
                key="DrawIO"
                className={this.props.classes.nestedListItem}
              >
                <ListItemIcon>
                  <DrawioIcon />
                </ListItemIcon>
                <ListItemText primary="DrawIO" />
              </ListItem>
            </List>
          </Collapse>
          <ListItem component={Link} to="/about" button key="关于我">
            <ListItemIcon>
              <AboutIcon />
            </ListItemIcon>
            <ListItemText primary="关于我" />
          </ListItem>
          <ListItem component={Link} to="/contact" button key="社交">
            <ListItemIcon>
              <CommunicationIcon />
            </ListItemIcon>
            <ListItemText primary="社交" />
          </ListItem>
          <ListItem component={Link} to="/friend" button key="友链">
            <ListItemIcon>
              <LinkIcon />
            </ListItemIcon>
            <ListItemText primary="友链" />
          </ListItem>
        </List>
        <Divider />
        <List subheader={<ListSubheader component="div">联系</ListSubheader>}>
          <ListItem key="主页">
            <Typography>
              欢迎来骚扰，如果你想的话可以问我一些问题，给我一些建议，跟我交个朋友，或者单纯跟我打个招呼。
            </Typography>
          </ListItem>
          <ListItem
            button
            component="a"
            href="mailto:tianjiayu668@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            key="tianjiayu668@gmail.com"
          >
            <ListItemIcon>
              <GmailIcon />
            </ListItemIcon>
            <ListItemText primary="tianjiayu668@gmail.com" />
          </ListItem>
          <ListItem button onClick={this.showQQ} key="995010578">
            <ListItemIcon>
              <QQIcon />
            </ListItemIcon>
            <ListItemText primary="995010578" />
          </ListItem>
          <ListItem button onClick={this.showWechat} key="Ray_Alto">
            <ListItemIcon>
              <WechatIcon />
            </ListItemIcon>
            <ListItemText primary="Ray_Alto" />
          </ListItem>
        </List>
        <Divider />
        <ICP ipcLink="https://beian.miit.gov.cn/">辽ICP备19015832号</ICP>
      </Div>
    );

    return (
      <nav className={this.props.classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            variant="temporary"
            anchor="left"
            swipeAreaWidth={20}
            open={this.state.showSidebar}
            onOpen={this.toggleDrawer(true)}
            onClose={this.toggleDrawer(false)}
            classes={{
              paper: this.props.classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: this.props.classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    );
  }
}

export default withStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: SIDEBAR_WIDTH,
      flexShrink: 0,
    },
  },

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: SIDEBAR_WIDTH,
  },

  nestedListItem: {
    paddingLeft: theme.spacing(6),
  },
}))(SideBar);
