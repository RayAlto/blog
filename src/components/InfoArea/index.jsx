import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

class InfoArea extends React.Component {

  static propTypes = {
    infoTitle: PropTypes.string.isRequired,
    infoDetail: PropTypes.string.isRequired,
    infoImage: PropTypes.string.isRequired,
    infoActions: PropTypes.array.isRequired,
  };

  render() {

    const classes = this.props.classes;
    const { infoTitle, infoDetail, infoImage, infoActions } = this.props;

    const contentGrid = (
      <Card elevation={0} className={classes.contentCard}>
        <CardHeader
          title={infoTitle}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {infoDetail}
          </Typography>
        </CardContent>
        <div className={classes.grow} />
        <Divider />
        <CardActions>
          {infoActions}
          <div className={classes.grow} />
          <Tooltip title="いいね" arrow>
            <Checkbox color="secondary" checkedIcon={<FavoriteIcon />} icon={<FavoriteBorderIcon />} />
          </Tooltip>
        </CardActions>
      </Card>
    );

    const imageGrid = (
      <img className={classes.image} src={infoImage} alt="anime" />
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
        <Hidden smDown implementation="css">
          <Grid
            container
            direction="row"
            alignContent="space-around"
            spacing={1}
          >
            <Grid item xs={12} sm={6}>
              {contentGrid}
            </Grid>
            <Grid item xs={12} sm={6} >
              {imageGrid}
            </Grid>
          </Grid>
        </Hidden>
      </Paper>
    );

  };

}

export default withStyles(theme => ({

  root: {
    padding: theme.spacing(1),
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
  }

}))(InfoArea);