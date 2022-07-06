import * as React from "react";

import withStyles from "@mui/styles/withStyles";

import BackToTopButton from "../../components/BackToTopButton";
import GlobalImageDialog from "../../components/GlobalImageDialog";

import SideBar from "../SideBar";
import TopBar from "../TopBar";

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <main className={this.props.classes.root}>
        <TopBar />
        <SideBar />
        <div className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} id="top-anchor" />
          {/* <Switch>
            <Route path="/blogs" component={Blogs} />
            <Route path="/note" component={NoteIndex} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Main} />
            <Redirect to="/" />
          </Switch> */}
          {children}
        </div>
        <BackToTopButton topElementId="top-anchor" />
        <GlobalImageDialog />
      </main>
    );
  }
}

export default withStyles((theme) => ({
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
