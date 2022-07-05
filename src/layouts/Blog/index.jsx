import * as React from "react";

import PropTypes from "prop-types";

import Divider from "@mui/material/Divider";
import Div from "../../components/Div";
import InfoArea from "../../components/InfoArea";
import MarkdownArticle from "../../components/MarkdownArticle";

import withStyles from "@mui/styles/withStyles";

import Tag from "../../components/Tag";
import Tags from "../../components/Tags";

class Blog extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    tags: PropTypes.array,
    detail: PropTypes.string.isRequired,
  };

  render() {
    const { title, summary, image, tags, detail, classes } = this.props;

    return (
      <Div>
        <InfoArea
          titleTypographyProps={{ variant: "h3", component: "h1" }}
          infoTitle={title}
          infoDetail={summary}
          infoImageUrl={image.url}
          infoImageAlt={image.alt}
          infoActions={[
            <Tags key="tags">
              {tags?.map((tag, index) => {
                return (
                  <Tag
                    key={`${index}-${tag.title}`}
                    href={tag.url}
                    isRouteLink={tag.route}
                    title={tag.title}
                  />
                );
              })}
            </Tags>,
          ]}
        />
        <Divider className={classes.divider} />
        <MarkdownArticle md={detail} />
      </Div>
    );
  }
}

export default withStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
  },
}))(Blog);

