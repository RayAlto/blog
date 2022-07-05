import * as React from "react";

import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Paper from "@mui/material/Paper";
import Tooltip from "@mui/material/Tooltip";

import withStyles from "@mui/styles/withStyles";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import MarkdownArticle from "../MarkdownArticle";

class InfoArea extends React.Component {
  static propTypes = {
    infoTitle: PropTypes.string.isRequired,
    infoDetail: PropTypes.string.isRequired,
    infoImageUrl: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
    infoImageAlt: PropTypes.string.isRequired,
    infoActions: PropTypes.array,
    titleTypographyProps: PropTypes.object,
    divider: PropTypes.bool,
    noCardActions: PropTypes.bool,
  };

  static defaultProps = {
    divider: false,
    noCardActions: false,
  };

  render() {
    const {
      infoTitle,
      infoDetail,
      infoImageUrl,
      infoImageAlt,
      infoActions,
      titleTypographyProps,
      divider,
      noCardActions,
      classes,
    } = this.props;

    const contentGrid = (
      <Card elevation={0} className={classes.contentCard}>
        <CardHeader
          title={infoTitle}
          titleTypographyProps={{ ...titleTypographyProps }}
        />
        <CardContent>
          <MarkdownArticle md={infoDetail} />
        </CardContent>
        <div className={classes.grow} />
        {divider && <Divider />}
        {!noCardActions && (
          <CardActions>
            {infoActions}
            <div className={classes.grow} />
            <Tooltip title="いいね" arrow>
              <Checkbox
                color="secondary"
                checkedIcon={<FavoriteIcon />}
                icon={<FavoriteBorderIcon />}
              />
            </Tooltip>
          </CardActions>
        )}
      </Card>
    );

    const imageGrid = (
      <img
        className={classes.image}
        src={infoImageUrl.src || infoImageUrl}
        alt={infoImageAlt}
      />
    );

    return (
      <Paper className={classes.root} elevation={0}>
        <Hidden mdUp implementation="css">
          <Grid
            container
            direction="column-reverse"
            alignContent="space-around"
            alignItems="center"
          >
            <Grid item className={classes.mobileGrid}>
              {contentGrid}
            </Grid>
            <Grid item className={classes.mobileGrid}>
              {imageGrid}
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Grid
            container
            direction="row"
            alignContent="space-around"
            spacing={1}
          >
            <Grid item xs={12} sm={6}>
              {contentGrid}
            </Grid>
            <Grid item xs={12} sm={6}>
              {imageGrid}
            </Grid>
          </Grid>
        </Hidden>
      </Paper>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "block",
  },

  contentCard: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  mobileGrid: {
    width: "100%",
  },

  image: {
    width: "100%",
    borderRadius: theme.spacing(1),
  },

  grow: {
    flexGrow: 1,
  },

  tags: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}))(InfoArea);

