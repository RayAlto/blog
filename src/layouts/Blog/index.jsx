import React from "react";

import MarkdownArticle from "../../components/MarkdownArticle";

class Blog extends React.Component {

  render() {

    return (

        <MarkdownArticle md={`
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
    );

  };

};

export default Blog;