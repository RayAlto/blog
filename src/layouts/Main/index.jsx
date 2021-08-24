import React from "react";

import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Div from "../../components/Div";
import GridWithRestriction from "../../components/GridWithRestriction";
import Header from "../../components/Header";
import InfoArea from "../../components/InfoArea";
import InfoCard from "../../components/InfoCard";
import Aria2Image500x300 from "../../images/aria2@500x300.png";
import BannerImage1000x600 from "../../images/banner@1000x600.png";
import DrawioImage500x300 from "../../images/drawio@500x300.png";
import JupyterLabImage500x300 from "../../images/jupyter@500x300.png";
import NoteImage500x300 from "../../images/note@500x300.png";
import ScheduleImage500x300 from "../../images/schedule@500x300.png";

export default class Main extends React.Component {

  render() {
    return (
      <Div>
        <Helmet>
          <title>RayAlto - 主页</title>
        </Helmet>
        <InfoArea
          titleTypographyProps={{ variant: 'h3', component: 'h1' }}
          infoTitle="Ray_Alto 的个人主页"
          infoDetail="部署了一些有趣的小项目，不定时分享一些我最近正在研究的东西，自闭社恐，技不如人，大放厥词。努力成为一个有营养的网站。"
          infoImageUrl={BannerImage1000x600}
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
            </Button>
          ]}
        />
        <Header divider>
          有趣的项目
        </Header>
        <GridWithRestriction>
          <Grid item xs>
            <InfoCard
              title="DrawIO"
              image={DrawioImage500x300}
              link="https://www.baidu.com"
            >
              画图神器，基本上可以抛弃Microsoft Visio了。搭建在这里访问会比原网站快很多，但是只能使用本地文件。
            </InfoCard>
          </Grid>
          <Grid item xs>
            <InfoCard
              title="JupyterLab"
              image={JupyterLabImage500x300}
              link="https://www.baidu.com"
            >
              很牛逼的在线编辑环境，有了这个你甚至可以用手机写代码。什么？你说你不知道密码是什么？巧了我也不知道。
            </InfoCard>
          </Grid>
          <Grid item xs>
            <InfoCard
              title="Aria2"
              image={Aria2Image500x300}
              link="https://www.baidu.com"
            >
              24小时不关机，约等于离线下载器，迅雷可以去eat sh*t了。什么？你说你认证失败了？巧了我也是。
            </InfoCard>
          </Grid>
          <Grid item xs>
            <InfoCard
              title="课程表"
              image={ScheduleImage500x300}
              link="/schedule"
              isRouteLink
            >
              原创爬虫项目。众所周知某说唱大学教务经常不对外网开放，趁着对外开放的时候每天爬取课程表数据就不怕不知道去哪上课了。
            </InfoCard>
          </Grid>
          <Grid item xs>
            <InfoCard
              title="笔记本"
              image={NoteImage500x300}
              link="/note"
              isRouteLink
            >
              买不起Ipad，所以平时用键盘在JupyterLab上用MarkDown记数学以外的笔记，选择性地放在这里献丑。
            </InfoCard>
          </Grid>
        </GridWithRestriction>
      </Div>
    );
  };

};