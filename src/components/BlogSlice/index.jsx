import React from 'react';

import PropTypes from 'prop-types';

import { NextComposed as Link } from '../../components/Link';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import withStyles from '@material-ui/core/styles/withStyles';

import Tag from '../../components/Tag';
import Tags from '../../components/Tags';

// {
//   title: "How to poop",
//   date: "September 14, 2016",
//   url: "https://www.baidu.com",
//   description: "This blog will show you the most morden way to poop.",
//     image: {
//       url: "https://www.rayalto.top/images/anime.png",
//       title: "poop music"
//   },
//   tags: [
//     {
//       url: "https://www.baidu.com",
//       text: "midden"
//     }
//   ]
// }

class BlogSlice extends React.Component {

  static propTypes = {
    blogData: PropTypes.object.isRequired,
    isRouteLink: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    isRouteLink: false,
  };

  render() {

    const {
      classes,
      blogData,
      isRouteLink,
      className,
    } = this.props;

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
          {
            isRouteLink ? (
              <Button
                color="primary"
                endIcon={<ArrowForwardIcon />}
                variant="text"
                size="large"
                component={Link}
                to={blogData.url}
              >
                去看看
              </Button>
            ) : (
              <Button
                color="primary"
                endIcon={<ArrowForwardIcon />}
                variant="text"
                size="large"
                href={blogData.url}
              >
                去看看
              </Button>
            )
          }
          <div className={classes.grow} />
          <Tooltip title="いいね" arrow>
            <Checkbox color="secondary" checkedIcon={<FavoriteIcon />} icon={<FavoriteBorderIcon />} />
          </Tooltip>
        </CardActions>
      </Card >
    );

    const imageGrid = (
      <img className={classes.image} src={blogData.image.url} alt="anime" />
    );

    return (
      <Paper
        className={
          className ?
            `${className} ${classes.root}` :
            classes.root
        }
      >
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
            <Grid item component={Link} to={blogData.url} className={classes.mobileGrid}>
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
            <Grid item xs={12} sm={6} component={Link} to={blogData.url} >
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