import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import withStyles from "@material-ui/core/styles/withStyles";

import BlogCard from "../../components/BlogCard";

class BlogCards extends React.Component {

  static propTypes = {
    blogs: PropTypes.array.isRequired,
  };

  render() {

    const blogs = this.props.blogs;

    return (
      <Grid className={this.props.classes.blogCards} container spacing={3} alignItems="center" direction="row" justify="space-around">
        {blogs.map((blog, index) => {
          return (
            <Grid item key={blog.title}>
              <BlogCard blogData={blog} />
            </Grid>
          )
        })}
      </Grid>
    );

  };

}

export default withStyles(theme => ({

  blogCards: {
    "& > *": {
      width: "100%",
      maxWidth: 510,
    },
  },

}))(BlogCards);