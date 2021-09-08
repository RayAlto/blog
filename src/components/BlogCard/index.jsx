import React from 'react';
import PropTypes from 'prop-types';

import { NextComposed as Link } from '../../components/Link';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import withStyles from '@material-ui/core/styles/withStyles';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

import Tags from '../../components/Tags';
import Tag from '../../components/Tag';

// {
//   title: "How to poop",
//     date: "September 14, 2016",
//       url: "https://www.baidu.com",
//         description: "This blog will show you the most morden way to poop.",
//           image: {
//     url: "https://www.rayalto.top/images/anime.png",
//       title: "poop music"
//   },
//   tags: [
//     {
//       url: "https://www.baidu.com",
//       text: "midden"
//     }
//   ]
// }

class BlogCard extends React.Component {

  static propTypes = {
    blogData: PropTypes.object.isRequired,
    isRouteLink: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    isRouteLink: false,
  };

  render() {

    const blogData = this.props.blogData;
    const isRouteLink = this.props.isRouteLink;

    return (
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar alt="RayAlto" src="https://www.rayalto.top/images/favicon.png" />
          }
          title={blogData.title}
          subheader={blogData.date}
        />
        {
          isRouteLink ? (
            <CardMedia
              className={this.props.classes.media}
              image={blogData.image.url}
              title={blogData.image.title}
              component={Link}
              to={blogData.url}
            />
          ) : (
            <CardMedia
              className={this.props.classes.media}
              image={blogData.image.url}
              title={blogData.image.title}
              component="a"
              href={blogData.url}
            />
          )
        }
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {blogData.description}
          </Typography>
        </CardContent>
        <Tags className={this.props.classes.tags}>
          {blogData.tags.map((tag) => {
            return (
              <Tag key={tag.text} href={tag.url} title={tag.text} />
            )
          })}
        </Tags>
        <CardActions>
          <Tooltip title="いいね" arrow>
            <Checkbox color="secondary" checkedIcon={<FavoriteIcon />} icon={<FavoriteBorderIcon />} />
          </Tooltip>
          {
            isRouteLink ? (
              <Button
                className={this.props.classes.detailButton}
                color="primary" startIcon={<FullscreenIcon />}
                variant="contained"
                disableElevation
                size="large"
                component={Link}
                to={blogData.url}
              >
                去看看
              </Button>
            ) : (
              <Button
                className={this.props.classes.detailButton}
                color="primary" startIcon={<FullscreenIcon />}
                variant="contained"
                disableElevation
                size="large"
                href={blogData.url}
              >
                去看看
              </Button>
            )
          }
        </CardActions>
      </Card>
    );

  };

};

export default withStyles(theme => ({

  detailButton: {
    width: "100%",
  },

  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    transition: "transform 0.2s ease",

    "& : hover": {
      transform: `translateY(-${theme.spacing(0.5)}px)`,
    },

  },

  tags: {
    marginLeft: theme.spacing(1),
  }

}))(BlogCard);