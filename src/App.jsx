import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

import { Switch, Route } from "react-router-dom";

import TopBar from "./layouts/TopBar";
import SideBar from "./layouts/SideBar";
import Blog from "./layouts/Blog";
import Main from "./layouts/Main";
import BackToTopButton from "./components/BackToTopButton";

class App extends React.Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <TopBar />
        <SideBar />
        <Switch>
          <Route path="/blog" component={Blog} />
          <Route path="/" component={Main} />
        </Switch>
        <BackToTopButton topElementId="top-anchor" />
      </div>
    );
  }
}

export default withStyles(theme => ({
  root: {
    display: "flex",
  },
}))(App);