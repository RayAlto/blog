import * as React from "react";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import withStyles from "@mui/styles/withStyles";

import Head from "next/head";

import InfoArea from "../../components/InfoArea";

import GlobalFrame from "../../layouts/GlobalFrame";

import ScheduleImage1000x600 from "../../../public/images/schedule@1000x600.png";

export async function getStaticProps() {
  const scheduleData = {
    dateStr: "2021-08-03，星期二",
    updateTimeStr: "2021-08-03 01:00:03",
    scheduleList: [
      {
        name: "摸鱼入门",
        duration: "10:20 - 12:10",
        classroom: "翠七教301",
        teacher: "杨永信",
        class: "摸鱼20-1班,摸鱼18-2班",
      },
      {
        name: "躺平入门",
        duration: "10:20 - 12:10",
        classroom: "翠七教301",
        teacher: "杨永信",
        class: "摸鱼20-1班,摸鱼18-2班",
      },
    ],
  };

  const hitokotoResponse = await fetch(
    "https://v1.hitokoto.cn/?encode=utf-8&c=a"
  );
  const hitokotoResponseData = await hitokotoResponse.json();

  const hitokotoData = {
    text: hitokotoResponseData.hitokoto,
    from: hitokotoResponseData.from || "未知",
    fromWho: hitokotoResponseData.from_who || "未知",
  };

  return {
    props: { scheduleData, hitokotoData },
  };
}

class Schedule extends React.Component {
  render() {
    const { scheduleData, hitokotoData, classes } = this.props;

    return (
      <GlobalFrame>
        <Head>
          <title>RayAlto - 课程表</title>
        </Head>
        <InfoArea
          titleTypographyProps={{ variant: "h3", component: "h1" }}
          infoTitle="课程表"
          infoDetail="作为大四老油条，却还有一大堆课要重修，实在是Bon不jour了。"
          infoImageUrl={ScheduleImage1000x600}
          infoImageAlt=""
          noCardActions
        />
        <Divider className={classes.divider} />
        <Typography component="h4" variant="h4" gutterBottom>
          今天是{scheduleData.dateStr}
        </Typography>
        <Typography>今天也要以顺利毕业为目标努力奋斗:</Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>课程名称</TableCell>
                <TableCell>上课时间</TableCell>
                <TableCell>教室</TableCell>
                <TableCell>老师</TableCell>
                <TableCell>上课班级</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scheduleData.scheduleList.map((schedule) => (
                <TableRow
                  key={`${schedule.name}-${schedule.duration}-${schedule.classroom}-${schedule.teacher}`}
                >
                  <TableCell>{schedule.name}</TableCell>
                  <TableCell>{schedule.duration}</TableCell>
                  <TableCell>{schedule.classroom}</TableCell>
                  <TableCell>{schedule.teacher}</TableCell>
                  <TableCell>{schedule.class}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography>更新时间：{scheduleData.updateTimeStr}</Typography>
        <Divider className={classes.divider} />
        <Typography component="h4" variant="h4" gutterBottom>
          每日一句
        </Typography>
        <Typography>{hitokotoData.text}</Typography>
        <Typography align="right">{`${hitokotoData.fromWho} - 《${hitokotoData.from}》`}</Typography>
      </GlobalFrame>
    );
  }
}

export default withStyles((theme) => ({
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },

  table: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))(Schedule);
