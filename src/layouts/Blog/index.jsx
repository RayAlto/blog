import React from "react";

import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";

import Divider from "@material-ui/core/Divider";

import MarkdownArticle from "../../components/MarkdownArticle";
import InfoArea from "../../components/InfoArea";
import Tags from "../../components/Tags";
import Tag from "../../components/Tag";

class Blog extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    tags: PropTypes.array,
  };

  render() {

    const title = this.props.title;
    const detail = this.props.detail;
    const imageUrl = this.props.imageUrl;
    const imageAlt = this.props.imageAlt;
    const tags = this.props.tags;
    const classes = this.props.classes;

    return (

      <div>
        <InfoArea
          titleTypographyProps={{ variant: "h3", component: "h1" }}
          infoTitle={title}
          infoDetail={detail}
          infoImageUrl={imageUrl}
          infoImageAlt={imageAlt}
          infoActions={[
            <Tags>
              {tags?.map((tag, index) => {
                return <Tag key={tag.text} href={tag.url} title={tag.text} />
              })}
            </Tags>
          ]}
        />

        <Divider className={classes.divider} />

        <MarkdownArticle md={`
# 😭我是彻底的失败者
# 😭我是彻底的失败者
# 😭我是彻底的失败者
# 😭我是彻底的失败者
# 😭我是彻底的失败者

![music](https://www.rayalto.top/images/music.png "title text here")

$$e=mc^2$$

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

1. First ordered list item
2. Another item
    1. Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
    1. Ordered sub-list
4. And another item.

* Unordered list can use asterisks
- Or minuses
+ Or pluses

* [ ] to do
* [x] done

`} />
      </div>
    );

  };

};

export default withStyles(theme => ({

  divider: {
    marginBottom: theme.spacing(3),
  },

}))(Blog);