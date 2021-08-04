import React from "react"

import ScheduleImage1000x600 from "../../images/schedule@1000x600.png"

import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import withStyles from "@material-ui/core/styles/withStyles";

import InfoArea from "../../components/InfoArea";

class Schedule extends React.Component {

  render() {

    const {
      classes
    } = this.props;

    const scheduleData = {
      dateStr: "2021-08-03，星期二",
      updateTimeStr: "2021-08-03 01:00:03",
      scheduleList: [
        {
          "name": "摸鱼入门",
          "duration": "10:20 - 12:10",
          "classroom": "翠七教301",
          "teacher": "杨永信",
          "class": "摸鱼20-1班,摸鱼18-2班",
        },
        {
          "name": "躺平入门",
          "duration": "10:20 - 12:10",
          "classroom": "翠七教301",
          "teacher": "杨永信",
          "class": "摸鱼20-1班,摸鱼18-2班",
        },
      ]
    };

    const hitokotoData = {
      text: "一举一动，都是承诺，会被另一个人看在眼里，记在心上的。",
      from: "悬崖上的金鱼姬",
      fromWho: "宫崎骏"
    }
    return (
      <div>
        <InfoArea
          titleTypographyProps={{ variant: 'h3', component: 'h1' }}
          infoTitle="课程表"
          infoDetail="作为大四老油条，却还有一大堆课要重修，实在是Bon不jour了。"
          infoImageUrl={ScheduleImage1000x600}
          infoImageAlt=""
          noCardActions
        />
        <Divider className={classes.divider} />
        <Typography component="h4" variant="h4" gutterBottom>今天是{scheduleData.dateStr}</Typography>
        <Typography>今天也要以顺利毕业为目标努力奋斗:</Typography>
        <TableContainer component={Paper} className={classes.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  课程名称
                </TableCell>
                <TableCell>
                  上课时间
                </TableCell>
                <TableCell>
                  教室
                </TableCell>
                <TableCell>
                  老师
                </TableCell>
                <TableCell>
                  上课班级
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scheduleData.scheduleList.map(schedule => (
                <TableRow key={`${schedule.name}-${schedule.duration}-${schedule.classroom}-${schedule.teacher}`}>
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
        <Typography component="h4" variant="h4" gutterBottom>每日一句</Typography>
        <Typography>{hitokotoData.text}</Typography>
        <Typography align="right">{`${hitokotoData.fromWho} - 《${hitokotoData.from}》`}</Typography>
      </div>
    );
  };

}

export default withStyles(theme => ({

  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
  },

  table: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },

}))(Schedule);