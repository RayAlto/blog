import * as React from "react";

import PropTypes from "prop-types";

import { NextLinkComposed as Link } from "../Link";

import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import withStyles from "@mui/styles/withStyles";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

class InfoCard extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.object.isRequired,
    ]),
    title: PropTypes.string.isRequired,
    isRouteLink: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    isRouteLink: false,
  };

  render() {
    const { link, image, title, classes, children, isRouteLink, onClick } =
      this.props;

    return (
      <Card>
        {isRouteLink ? (
          <CardActionArea onClick={onClick} component={Link} to={link}>
            <CardMedia
              className={classes.media}
              image={image.src || image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {children}
              </Typography>
            </CardContent>
          </CardActionArea>
        ) : (
          <CardActionArea onClick={onClick} href={link} target="_blank">
            <CardMedia
              className={classes.media}
              image={image.src || image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {children}
              </Typography>
            </CardContent>
          </CardActionArea>
        )}
        <CardActions>
          {isRouteLink ? (
            <Button
              size="small"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={onClick}
              component={Link}
              to={link}
            >
              去看看
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={onClick}
              href={link}
              target="_blank"
            >
              去看看
            </Button>
          )}
          <div className={classes.grow} />
          <Tooltip title="いいね" arrow>
            <Checkbox
              size="small"
              color="secondary"
              checkedIcon={<FavoriteIcon />}
              icon={<FavoriteBorderIcon />}
            />
          </Tooltip>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(() => ({
  grow: {
    flexGrow: 1,
  },

  media: {
    paddingTop: "60%",
  },
}))(InfoCard);
