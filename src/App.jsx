import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";

import withStyles from "@material-ui/core/styles/withStyles";

import About from "./layouts/About";
import BackToTopButton from "./components/BackToTopButton";
import Blogs from "./layouts/Blogs";
import GlobalImageDialog from "./components/GlobalImageDialog";
import NoteIndex from "./layouts/NoteIndex";
import Main from "./layouts/Main";
import Schedule from "./layouts/Schedule";
import SideBar from "./layouts/SideBar";
import TopBar from "./layouts/TopBar";

class App extends React.Component {

  render() {
    return (
      <main className={this.props.classes.root}>
        <CssBaseline />
        <TopBar />
        <SideBar />
        <div className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} id="top-anchor" />
          <Switch>
            <Route path="/blogs" component={Blogs} />
            <Route path="/note" component={NoteIndex} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
          </Switch>
        </div>
        <BackToTopButton topElementId="top-anchor" />
        <GlobalImageDialog />
      </main>
    );
  };

};

export default withStyles(theme => ({

  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,

  root: {
    display: "flex",
  },

  content: {
    backgroundColor: "white",
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}))(App);