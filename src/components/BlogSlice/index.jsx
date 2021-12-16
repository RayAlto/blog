import * as React from 'react';

import PropTypes from 'prop-types';

import { NextLinkComposed as Link } from '../../components/Link';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Hidden from '@mui/material/Hidden';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import withStyles from '@mui/styles/withStyles';

import Tag from '../../components/Tag';
import Tags from '../../components/Tags';

class BlogSlice extends React.Component {

  static propTypes = {
    blog: PropTypes.object.isRequired,
    isRouteLink: PropTypes.bool.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    isRouteLink: false,
  };

  render() {

    const {
      classes,
      blog,
      isRouteLink,
      className,
    } = this.props;

    const contentGrid = (
      <Card elevation={0} className={classes.contentCard}>
        <CardHeader
          avatar={
            <Avatar alt="RayAlto" src="https://www.rayalto.top/images/favicon.png" />
          }
          title={blog.title}
          subheader={blog.date}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {blog.summary}
          </Typography>
        </CardContent>
        <div className={classes.grow} />
        <Tags className={classes.tags}>
          {blog.tags.map((tag, index) => {
            return (
              <Tag key={tag.title} href={tag.url} title={tag.title} isRouteLink={tag.route} />
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
                to={blog.url}
              >
                去看看
              </Button>
            ) : (
              <Button
                color="primary"
                endIcon={<ArrowForwardIcon />}
                variant="text"
                size="large"
                href={blog.url}
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
      <img className={classes.image} src={blog.image.url} alt={blog.image.alt} title={blog.image.title} />
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
            <Grid item component={Link} to={blog.url} className={classes.mobileGrid}>
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
            <Grid item xs={12} sm={6} component={Link} to={blog.url} >
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
      transform: `translateY(-${theme.spacing(0.5)})`,
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