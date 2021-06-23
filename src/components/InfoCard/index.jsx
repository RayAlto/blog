import React from "react";

import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

import withStyles from "@material-ui/styles/withStyles";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

class InfoCard extends React.Component {

  static propTypes = {
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {

    const {
      link,
      image,
      title,
      classes,
      children
    } = this.props;

    return (
      <Card>
        <CardActionArea href={link} target="_blank">
          <CardMedia
            className={classes.media}
            image={image}
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
        <CardActions>
          <Button
            size="small"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            href={link}
            target="_blank"
          >
            去看看
          </Button>
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

  };

};

export default withStyles(theme => ({

  grow: {
    flexGrow: 1,
  },

  media: {
    paddingTop: "60%",
  },

}))(InfoCard);