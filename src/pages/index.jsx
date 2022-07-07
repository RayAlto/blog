import * as React from "react";

import Head from "next/head";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import GridWithRestriction from "../components/GridWithRestriction";
import Header from "../components/Header";
import InfoArea from "../components/InfoArea";
import InfoCard from "../components/InfoCard";
import { NextLinkComposed as Link } from "../components/Link";

import Aria2Image from "../../public/images/svg/aria2.svg";
import BannerImage from "../../public/images/svg/banner.svg";
import DrawioImage from "../../public/images/svg/drawio.svg";
import JupyterLabImage from "../../public/images/svg/jupyter.svg";
import NoteImage from "../../public/images/svg/note.svg";
import ScheduleImage from "../../public/images/svg/schedule.svg";

import GlobalFrame from "../layouts/GlobalFrame";

class Home extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <GlobalFrame>
          <Head>
            <title>RayAlto - 主页</title>
          </Head>
          <InfoArea
            titleTypographyProps={{ variant: "h3", component: "h1" }}
            infoTitle="Ray_Alto 的个人主页"
            infoDetail="部署了一些有趣的小项目，不定时分享一些我最近正在研究的东西，自闭社恐，技不如人，大放厥词。努力成为一个有营养的网站。"
            infoImageUrl={BannerImage}
            infoImageAlt=""
            infoActions={[
              <Button
                component={Link}
                to="/blogs"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                variant="text"
                size="large"
                key="看看我的博客"
              >
                看看我的博客
              </Button>,
            ]}
          />
          <Header divider>有趣的项目</Header>
          <GridWithRestriction>
            <Grid item xs>
              <InfoCard
                title="DrawIO"
                image={DrawioImage}
                link="https://www.baidu.com"
              >
                画图神器，基本上可以抛弃Microsoft
                Visio了。搭建在这里访问会比原网站快很多，但是只能使用本地文件。
              </InfoCard>
            </Grid>
            <Grid item xs>
              <InfoCard
                title="JupyterLab"
                image={JupyterLabImage}
                link="https://www.baidu.com"
              >
                很牛逼的在线编辑环境，有了这个你甚至可以用手机写代码。什么？你说你不知道密码是什么？巧了我也不知道。
              </InfoCard>
            </Grid>
            <Grid item xs>
              <InfoCard
                title="Aria2"
                image={Aria2Image}
                link="https://www.baidu.com"
              >
                24小时不关机，约等于离线下载器，迅雷可以去eat
                sh*t了。什么？你说你认证失败了？巧了我也是。
              </InfoCard>
            </Grid>
            <Grid item xs>
              <InfoCard
                title="课程表"
                image={ScheduleImage}
                link="/schedule"
                isRouteLink
              >
                原创爬虫项目。众所周知某说唱大学教务经常不对外网开放，趁着对外开放的时候每天爬取课程表数据就不怕不知道去哪上课了。
              </InfoCard>
            </Grid>
            <Grid item xs>
              <InfoCard
                title="笔记本"
                image={NoteImage}
                link="/notes"
                isRouteLink
              >
                买不起Ipad，所以平时用键盘在JupyterLab上用MarkDown记数学以外的笔记，选择性地放在这里献丑。
              </InfoCard>
            </Grid>
          </GridWithRestriction>
        </GlobalFrame>
      </React.StrictMode>
    );
  }
}

export default Home;
