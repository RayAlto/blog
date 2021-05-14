import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
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
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Tags from "../../components/Tags";
import Tag from "../../components/Tag";

class BlogSlice extends React.Component {

  static propTypes = {
    blogData: PropTypes.object.isRequired,
  };

  render() {

    const classes = this.props.classes;
    const blogData = this.props.blogData;

    const contentGrid = (
      <Card elevation={0} className={classes.contentCard}>
        <CardHeader
          avatar={
            <Avatar alt="RayAlto" src="https://www.rayalto.top/images/favicon.png" />
          }
          title={blogData.title}
          subheader={blogData.date}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {blogData.description}
          </Typography>
        </CardContent>
        <div className={classes.grow} />
        <Tags className={classes.tags}>
          {blogData.tags.map((tag, index) => {
            return (
              <Tag key={tag.text} href={tag.url} title={tag.text} />
            )
          })}
        </Tags>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            endIcon={<ArrowForwardIcon />}
            variant="text"
            size="large"
            href={blogData.url}
          >
            去看看
          </Button>
          <div className={classes.grow} />
          <Tooltip title="いいね" arrow>
            <Checkbox color="secondary" checkedIcon={<FavoriteIcon />} icon={<FavoriteBorderIcon />} />
          </Tooltip>
        </CardActions>
      </Card>
    );

    const imageGrid = (
      <img className={classes.image} src={blogData.image.url} alt="anime" />
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
            <Grid item component="a" href="https://www.baidu.com" target="_blank" className={classes.mobileGrid}>
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
            <Grid item xs={12} sm={6} component="a" href="https://www.baidu.com" target="_blank">
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
    transition: "transform 0.2s ease",

    "&:hover": {
      transform: `translateY(-${theme.spacing(0.5)}px)`,
    }
  },

  grow: {
    flexGrow: 1,
  },

  tags: {
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }

}))(BlogSlice);