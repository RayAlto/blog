import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";

import TopBar from "./layouts/TopBar";
import SideBar from "./layouts/SideBar";
import Main from "./layouts/Main";
import BackToTopButton from "./components/BackToTopButton";

class App extends React.Component {

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <TopBar />
        <SideBar />
        <Main />
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