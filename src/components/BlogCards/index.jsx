import React from "react";

import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

import BlogCard from "../../components/BlogCard";
import GridWithRestriction from "../../components/GridWithRestriction";

export default class BlogCards extends React.Component {

  static propTypes = {
    blogs: PropTypes.array.isRequired,
  };

  render() {

    const blogs = this.props.blogs;

    return (
      <GridWithRestriction>
        {blogs.map((blog, index) => {
          return (
            <Grid item key={blog.title}>
              <BlogCard blogData={blog} />
            </Grid>
          )
        })}
      </GridWithRestriction>
    );

  };

}