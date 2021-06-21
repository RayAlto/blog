import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

import { Switch, Route, Redirect } from "react-router-dom";

import TopBar from "./layouts/TopBar";
import SideBar from "./layouts/SideBar";
import Blogs from "./layouts/Blogs";
import Main from "./layouts/Main";
import BackToTopButton from "./components/BackToTopButton";
import GlobalImageDialog from "./components/GlobalImageDialog";

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
  }

}))(App);