import * as React from 'react';

import Head from 'next/head';

import withStyles from '@mui/styles/withStyles';

import Blog from '../../../layouts/Blog';
import GlobalFrame from '../../../layouts/GlobalFrame';

export async function getStaticProps(context) {
  return {
    props: {
      blog: {
        title: context.params.title,
        content: "content",
      },
    },
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          title: "高斯GS78D键盘在Linux下功能键不正常工作的修复方法",
        },
      },
    ],
    fallback: false,
  };
};

class BlogPage extends React.Component {

  render() {

    const { blog, classes } = this.props;
    const testMarkdown = `
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

\`\`\`c++
#include "cpr/cpr.h"
#include <iostream>

int main(int argc, char const *argv[])
{
    cpr::Response r = cpr::Get(cpr::Url{"https://www.baidu.com"}, cpr::VerifySsl{false});
    std::cout << r.url << std::endl;
    std::cout << r.status_code << std::endl;
    std::cout << r.header["content-type"] << std::endl;
    std::cout << r.text << std::endl;
    std::cout << r.error.message << std::endl;
    return 0;
}
\`\`\`
    `;

    return (
      <GlobalFrame>
        <Head>
          <title>{`${blog.title}`}</title>
        </Head>
        <Blog
          title='😭我是彻底的失败者'
          summary='😭我一直是彻底的失败者😭😭'
          detail={testMarkdown}
          image={{
            url: "https://www.rayalto.top/images/banner.png",
            alt: "banner",
            title: "Banner",
          }}
          tags={[
            {
              url: "https://www.baidu.com",
              title: "垃圾桶",
              route: false,
            }
          ]}
        />
      </GlobalFrame>
    );
  };

};

export default withStyles(theme => ({
}))(BlogPage);