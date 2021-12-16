import * as React from 'react';

import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { Helmet } from 'react-helmet';

import withStyles from '@mui/styles/withStyles';

import Div from '../../components/Div';
import Header from '../../components/Header';
import Note from '../Note';

class Notes extends React.Component {

  render() {

    const notes = {
      title: "Java",
      summary: "Java 是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级 Web 应用开发和移动应用开发。",
      noteList: [
        {
          title: "数组",
          url: "001",
        },
      ],
    };

    const currentPath = "/notes/java";

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
      <Div>
        <Helmet>
          <title>RayAlto - 笔记 - JAVA</title>
        </Helmet>
        <Switch>
          {routes}
          <Route exact path={currentPath}>
            <Header>{notes.title}</Header>
            <Typography gutterBottom>{notes.summary}</Typography>
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
      </Div>
    );

  };

};

export default withStyles(theme => ({}))(Notes);