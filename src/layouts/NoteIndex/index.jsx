import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import { Helmet } from "react-helmet";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import withStyles from "@material-ui/core/styles/withStyles";

import Header from "../../components/Header";
import GridWithRestriction from "../../components/GridWithRestriction";
import InfoCard from "../../components/InfoCard";
import Notes from "../Notes";

import javaImage500x300 from "../../images/java@500x300.png";
import linuxImage500x300 from "../../images/linux@500x300.png";
import cmakeImage500x300 from "../../images/cmake@500x300.png";
import dotnetImage500x300 from "../../images/dotnet@500x300.png";
import mariadbImage500x300 from "../../images/mariadb@500x300.png";

class NoteIndex extends React.Component {

  render() {

    const currentPath = "/note";
    const classes = this.props.classes;

    const noteIndexes = [
      {
        title: "Java",
        image: javaImage500x300,
        link: "java",
        text: "Java 是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级 Web 应用开发和移动应用开发。",
        isRouteLink: true,
      },
      {
        title: "Linux",
        image: linuxImage500x300,
        link: "linux",
        text: "Linux 是一种自由和开放源码的类 UNIX 操作系统。该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布，在加上用户空间的应用程序之后，成为 Linux 操作系统。 Linux 也是自由软件和开放源代码软件发展中最著名的例子。",
        isRouteLink: true,
      },
      {
        title: "CMake",
        image: cmakeImage500x300,
        link: "cmake",
        text: "CMake 是个一个开源的跨平台自动化建构系统，用来管理软件建置的程序，并不依赖于某特定编译器，并可支持多层目录、多个应用程序与多个库。 它用配置文件控制建构过程的方式和 Unix 的 make 相似，只是 CMake 的配置文件取名为 CMakeLists.txt。",
        isRouteLink: true,
      },
      {
        title: "WPF",
        image: dotnetImage500x300,
        link: "wpf",
        text: "WPF 是美国微软公司推出 .NET Framework  3.0及以后版本的组成部分之一，它是一套基于 XML、.NET Framework、向量绘图技术的展示层开发框架，微软视其为下一代用户界面技术，广泛被用于 Windows Vista 的界面开发。其早期开发阶段的代号为“Avalon”。",
        isRouteLink: true,
      },
      {
        title: "MariaDB",
        image: mariadbImage500x300,
        link: "maraidb",
        text: "MariaDB 是 MySQL 关系数据库管理系统的一个复刻，由社区开发，有商业支持，旨在继续保持在 GNU GPL 下开源。 MariaDB 的开发是由 MySQL 的一些原始开发者领导的，他们担心甲骨文公司收购 MySQL 后会有一些隐患。",
        isRouteLink: true,
      },
    ];
    noteIndexes.forEach(noteIndex => {
      noteIndex.link = `${currentPath}/${noteIndex.link}`;
    });

    return (
      <div>
        <Helmet>
          <title>RayAlto - 笔记目录</title>
        </Helmet>
        <Switch>
          <Route path={`${currentPath}/java`}>
            <Notes />
          </Route>
          <Route exact path={currentPath}>
            <Header>我的笔记</Header>
            <Typography>基本都是在 JupyterLab 上写的笔记，选择性地放在这里献丑。</Typography>
            <Divider className={classes.divider} />
            <GridWithRestriction>
              {
                noteIndexes.map((noteIndex, index) => {
                  return (
                    <Grid xs item key={`${noteIndex.link}-${noteIndex.title}`}>
                      <InfoCard
                        title={noteIndex.title}
                        image={noteIndex.image}
                        link={noteIndex.link}
                        isRouteLink={noteIndex.isRouteLink}
                      >
                        {noteIndex.text}
                      </InfoCard>
                    </Grid>
                  )
                })
              }
            </GridWithRestriction>
          </Route>
          <Redirect to={currentPath} />
        </Switch>
      </div>
    );

  };

};

export default withStyles(theme => ({

  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },

}))(NoteIndex);