import * as React from "react";

import Head from "next/head";
import { withRouter } from "next/router";

import withStyles from "@mui/styles/withStyles";

import GlobalFrame from "../../layouts/GlobalFrame";

import BlogSlice from "../../components/BlogSlice";

class Blogs extends React.Component {
  // static propTypes = {
  //   blogs: PropTypes.array.isRequired,
  // };

  render() {
    // const blogs = this.props.blogs;
    const { classes } = this.props;

    const currnetPath = this.props.router.asPath;

    const blogs = [
      {
        title: "高斯GS78D键盘在Linux下功能键不正常工作的修复方法",
        date: "MARCH 12, 2021",
        url: "2021-3-12-1",
        summary:
          "其实根本不用折腾扫描码映射键位码之类的，修改一个参数就可以修复这个问题。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/018-cover.png",
          title: "GS87D",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "keyboard",
          },
        ],
      },
      {
        title: "树莓派搭建Samba服务器",
        date: "FEBRARY 28, 2021",
        url: "2021-2-28-1",
        summary:
          "通过 SMB 协议可以同时传输视频和视频的字幕，基本上等于一个网盘，可以添加到网络位置像本地磁盘一样操作远程内容。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/016-cover.png",
          title: "SMB",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "samba",
          },
        ],
      },
      {
        title: "树莓派搭建简单DLNA/UPnP服务器",
        date: "FEBRARY 10, 2021",
        url: "2021-2-10-1",
        summary:
          "船新的看番姿势，免去主机的下载/拷贝等操作，直接通过局域网点播你最喜欢的番剧。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/miniDlna.png",
          title: "minidlna",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "dlna",
          },
          {
            url: "https://www.baidu.com",
            title: "upnp",
          },
        ],
      },
      {
        title: "Minecraft 空岛服务器二周目",
        date: "JANUARY 23, 2021",
        url: "2021-1-23-1",
        summary: "Minecraft空岛服务器2周目开服，来康康。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/014-cover.png",
          title: "Minecraft",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "midden",
          },
        ],
      },
      {
        title: "合肥工业大学每日疫情填报新平台自动提交脚本",
        date: "JANUARY 21, 2021",
        url: "2021-1-21-1",
        summary:
          "合肥工业大学每日疫情填报新平台自动提交脚本，适用于新平台，挂在你的任意一台计算机/服务器上即可实现定时自动提交。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/013-cover-800x500.png",
          title: "cpdaily",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "cpdayly",
          },
        ],
      },
      {
        title: "只获取 git 仓库中某个子目录中的内容",
        date: "NOVEMBER 7, 2020",
        url: "2020-11-7-1",
        summary: "国内网络令我痛苦不堪",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/git-clone-filter.png",
          title: "git",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "git",
          },
        ],
      },
      {
        title: "使用 JAVA☕ 连接 MySQL (进阶篇)",
        date: "OCTOBER 14, 2020",
        url: "2020-10-14-1",
        summary: "接上一篇，也暂时是关于数据库的最后一篇。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/java-mysql2.png",
          title: "java*sql",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "java",
          },
          {
            url: "https://www.baidu.com",
            title: "mysql",
          },
        ],
      },
      {
        title: "使用 JAVA☕ 连接 MySQL (基础篇)",
        date: "OCTOBER 12, 2020",
        url: "2020-10-12-1",
        summary: "继续准备数据库的项目，客户端还是想用 JAVA 做。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/java-mysql.png",
          title: "java*sql",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "mysql",
          },
        ],
      },
      {
        title: "使用 Python 连接 MySQL🐬",
        date: "OCTOBER 7, 2020",
        url: "2020-10-7-1",
        summary:
          "着手准备数据库的项目，有了大佬的轮子 PyMySQL 用 Python 执行 SQL 语句简直不能再简单了。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/python-mysql.png",
          title: "python*sql",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "python",
          },
          {
            url: "https://www.baidu.com",
            title: "mysql",
          },
        ],
      },
      {
        title: "回顾 Python🐍 格式化字符串",
        date: "OCTOBER 6, 2020",
        url: "2020-10-6-1",
        summary: "关于格式化字符串的细节已经忘得差不多了，回顾一下。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/f-string01.svg",
          title: "python",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "python",
          },
        ],
      },
      {
        title: "关于编码🔠",
        date: "AUGUST 8, 2020",
        url: "2020-8-8-1",
        summary:
          "需要处理文字的时候，编码问题可能是不可避免的。这一篇主要记录我学习有关 Unicode 的一些细节。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/Unicode-005.png",
          title: "unicode",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "unicode",
          },
        ],
      },
      {
        title: "个人 Minecraft 服务器🏞",
        date: "JULY 20, 2020",
        url: "2020-7-20-1",
        summary: "自闭症 Ray_Alto 又又又又开自闭服务器了???",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/006-cover.png",
          title: "minecraft",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "minecraft",
          },
        ],
      },
      {
        title: "奇怪的需求 001: 使用 GCC 编译 C 动态链接库并在 C# 代码中使用",
        date: "JULY 8, 2020",
        url: "2020-7-8-1",
        summary:
          "根据我浅显的见解，一些深入底层的操作可以很方便的在 C / C++ 中实现，然而使用 C# 就有些麻烦，所以想到这个奇怪的需求。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/sr001-cover.png",
          title: "c++*c#",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "c#",
          },
        ],
      },
      {
        title: "根据宏判断操作系统🐧",
        date: "JULY 6, 2020",
        url: "2020-7-6-1",
        summary:
          "有时可能会对跨平台编程有一定需求，而且正巧某些细节在不同操作系统中是不一样的，这种情况就可以通过判断编译器定义的宏来判断操作系统。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/macro-cover.png",
          title: "marco",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "marco",
          },
        ],
      },
      {
        title: "获取没有水印的抖音视频🐦🍸",
        date: "JULY 3, 2020",
        url: "2020-7-3-1",
        summary:
          "想要得到无水印的无情哈拉少还是需要付出一些努力的，整增高，雷霆嘎巴！欧青辣少！",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/douyinCover.png",
          title: "douyin",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "douyin",
          },
        ],
      },
      {
        title: "JAVA Swing 之俄罗斯方块",
        date: "JUNE 2, 2020",
        url: "2020-6-2-1",
        summary:
          "JAVA Swing 练手小项目，我是没有想到俄罗斯方块里有这么多学问🤔",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/TetrisCover.png",
          title: "tetris",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "java-swing",
          },
        ],
      },
      {
        title: "Windows Terminal 的简单美化",
        date: "APRIL 13, 2020",
        url: "2020-4-13-1",
        summary:
          "是时候告别难看的原生 Power Shell / CMD 了。配置好 Windows Terminal ，既美观又方便，用过的人都说好👍。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/wt.png",
          title: "terminal",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "windows",
          },
        ],
      },
      {
        title: "使用Python应对形式与政策题库课",
        date: "APRIL 6, 2020",
        url: "2020-4-6-1",
        summary:
          "形式与政策的题实在是太多了，简单使用 Python 稍微减少工作量的方法🤫。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/xingshiyuzhengce10.png",
          title: "python",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "python",
          },
        ],
      },
      {
        title: "使用 ar 创建链接库并使用",
        date: "APRIL 3, 2020",
        url: "2020-4-3-1",
        summary: "想了解一下CMake实际上做了什么，偶然找到了这里👀。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/gcc.png",
          title: "ar",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "ar",
          },
        ],
      },
      {
        title: "gcc 参数",
        date: "APRIL 2, 2020",
        url: "2020-4-2-1",
        summary:
          "最近学习 OpenCV 时需要使用 OpenCV 的链接库，所以看了一下文档，把一些常用参数列在这里。然而直接使用 gcc 链接 OpenCV 的链接库实在太麻烦了，所以想要学习一下 CMake ，使用 CMake 管理源文件，里面也涉及到了好多 gcc 参数相关的内容。",
        image: {
          url: "https://www.rayalto.top/blogs/imgs/gcc.png",
          title: "gcc",
        },
        tags: [
          {
            url: "https://www.baidu.com",
            title: "gcc",
          },
        ],
      },
    ];

    blogs.forEach((blog) => {
      blog.url = `${currnetPath}/${blog.url}`;
    });

    return (
      <GlobalFrame>
        <Head>
          <title>RayAlto - 博客</title>
        </Head>
        {blogs.map((blog) => {
          return (
            <BlogSlice
              className={classes.slices}
              blog={blog}
              key={blog.title}
              isRouteLink
            />
          );
        })}
      </GlobalFrame>
    );
  }
}

export default withStyles((theme) => ({
  slices: {
    marginBottom: theme.spacing(2),
  },
}))(withRouter(Blogs));

