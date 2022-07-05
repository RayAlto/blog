import * as React from "react";

import PropTypes from "prop-types";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import withStyles from "@mui/styles/withStyles";

import Div from "../../components/Div";
import InfoArea from "../../components/InfoArea";
import { NextLinkComposed as Link } from "../../components/Link";

class NoteContent extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    notes: PropTypes.array.isRequired,
  };

  render() {
    const { title, summary, image, notes, classes } = this.props;

    return (
      <Div>
        <InfoArea
          titleTypographyProps={{ variant: "h3", component: "h1" }}
          infoTitle={title}
          infoDetail={summary}
          infoImageUrl={image.url}
          infoImageAlt={image.alt}
          infoActions={null}
        />
        <Divider className={classes.divider} />
        <List>
          {notes.map((note, index) => {
            return (
              <ListItem
                component={Link}
                to={note.url}
                button
                key={`${note.url}-${note.title}`}
              >
                <ListItemIcon>
                  <ArrowForwardIcon />
                </ListItemIcon>
                <ListItemText>{`${index + 1}. ${note.title}`}</ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Div>
    );
  }
}

export default withStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
  },
}))(NoteContent);

