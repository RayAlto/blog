import React from 'react';
import PropTypes from 'prop-types';

import { NextComposed as Link } from '../../components/Link';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

import withStyles from '@mui/styles/withStyles';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

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
      transform: `translateY(-${theme.spacing(0.5)})`,
    },

  },

  tags: {
    marginLeft: theme.spacing(1),
  }

}))(BlogCard);