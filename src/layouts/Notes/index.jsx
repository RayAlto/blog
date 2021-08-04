import React from "react";

import { Switch, Route, Redirect, Link } from "react-router-dom";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import { Helmet } from "react-helmet";

import withStyles from "@material-ui/core/styles/withStyles";

import Header from "../../components/Header";
import Note from "../Note";

class Notes extends React.Component {

  render() {

    const notes = {
      title: "Java",
      description: "Java 是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级 Web 应用开发和移动应用开发。",
      noteList: [
        {
          title: "数组",
          url: "001",
        },
      ],
    };

    const currentPath = "/note/java";

    notes.noteList.forEach(note => {
      note.url = `${currentPath}/${note.url}`;
    });

    const routes = notes.noteList.map(note => {
      console.log(`add route: ${note.url}`)
      return (
        <Route exact path={note.url} key={`${note.title}-${note.url}`}>
          <Note />
        </Route>
      );
    });

    return (
      <div>
        <Helmet>
          <title>RayAlto - 笔记 - JAVA</title>
        </Helmet>
        <Switch>
          {/* {routes} */}
          <Route exact path={`${currentPath}/001`}>
            <Note />
          </Route>
          <Route exact path={currentPath}>
            <Header>{notes.title}</Header>
            <Typography gutterBottom>{notes.description}</Typography>
            <Divider light />
            <List>
              {notes.noteList.map(note => {
                return (
                  <ListItem component={Link} to={note.url} button key={`${note.url}-${note.title}`}>
                    <ListItemText>
                      {note.title}
                    </ListItemText>
                  </ListItem>
                )
              })}
            </List>
          </Route>
          <Redirect to={currentPath} />
        </Switch>
      </div>
    );

  };

};

export default withStyles(theme => ({}))(Notes);