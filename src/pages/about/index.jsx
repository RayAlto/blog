import * as React from "react";

import Grid from "@mui/material/Grid";

import GlobalFrame from "../../layouts/GlobalFrame";

import GridWithRestriction from "../../components/GridWithRestriction";
import Header from "../../components/Header";
import InfoArea from "../../components/InfoArea";
import InfoCard from "../../components/InfoCard";

import BannerImage from "../../../public/images/svg/banner.svg";
import CppImage from "../../../public/images/svg/cpp.svg";
import JavaImage from "../../../public/images/svg/java.svg";
import PythonImage from "../../../public/images/svg/python.svg";

class About extends React.Component {
  render() {
    return (
      <GlobalFrame>
        <InfoArea
          infoTitle="关于我"
          titleTypographyProps={{ variant: "h3", component: "h1" }}
          infoDetail="我是 rayalto.top 的站长，对站内几乎所有内容负责，开设个网站的目的主要是记录我的学习过程，督促自己；垃圾大学在读苦逼大学生，主要苦在专业是数学，平时不务正业，数学经常不及格，或者说没有几个是及格的，喜欢鼓捣计算机与计算机交流，自闭症患者。"
          infoImageUrl={BannerImage}
          infoImageAlt="banner"
          noCardActions
        />
        <Header divider>一知半解</Header>
        <GridWithRestriction>
          <Grid xs item>
            <InfoCard
              title="C++"
              image={CppImage}
              link="https://en.cppreference.com"
            >
              启蒙语言。第一本书看的是Stanley B.Lippman老师写的《Essential
              C++》，Segment Fault 什么的最喜欢了，能遇到 Bus Error 就更好了。
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Python"
              image={PythonImage}
              link="https://www.python.org"
            >
              接触到的第二个语言，看清华大学的慕课简单的学了一下。脚本语言，遇到需求首先想的不是怎么自己解决，而是去找其他大佬做好的，平时只会写写
              import 之类的。
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Java"
              image={JavaImage}
              link="https://openjdk.java.net"
            >
              接触到的第三个语言，看官方的教程学了一些，这个语言给我的感觉很繁重，GUI
              就是从 Swing 开始学的，写出的代码可以说又臭又长。
            </InfoCard>
          </Grid>
        </GridWithRestriction>
      </GlobalFrame>
    );
  }
}

export default About;
