import * as React from "react";

import PubSub from "pubsub-js";

import Head from "next/head";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import withStyles from "@mui/styles/withStyles";

import GlobalFrame from "../../layouts/GlobalFrame";

import GridWithRestriction from "../../components/GridWithRestriction";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";

import BilibiliImage from "../../../public/images/svg/bilibili.svg";
import FacebookImage from "../../../public/images/svg/facebook.svg";
import GithubImage from "../../../public/images/svg/github.svg";
import GmailImage from "../../../public/images/svg/gmail.svg";
import QqImage from "../../../public/images/svg/qq.svg";
import QqQrImage from "../../../public/images/svg/qq.qr.svg";
import TwitterImage from "../../../public/images/svg/twitter.svg";
import WechatImage from "../../../public/images/svg/wechat.svg";
import WechatQrImage from "../../../public/images/svg/wechat.qr.svg";
import WeiboImage from "../../../public/images/svg/weibo.svg";

import { OPEN_IMAGE_DIALOG } from "../../constants/events";

class Contact extends React.Component {
  wechatClicked = () => {
    PubSub.publish(OPEN_IMAGE_DIALOG, {
      image: WechatQrImage,
      title: "扫描微信二维码",
      alt: "微信二维码",
      titleBar: true,
    });
  };

  qqClicked = () => {
    PubSub.publish(OPEN_IMAGE_DIALOG, {
      image: QqQrImage,
      title: "扫描QQ二维码",
      alt: "QQ二维码",
      titleBar: true,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <GlobalFrame>
        <Head>
          <title>RayAlto - 社交</title>
        </Head>
        <Header>社交</Header>
        <Divider className={classes.divider} />
        <GridWithRestriction>
          <Grid xs item>
            <InfoCard title="QQ" image={QqImage} onClick={this.qqClicked}>
              Ray_Alto(995010578)
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="微信"
              image={WechatImage}
              onClick={this.wechatClicked}
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="微博"
              image={WeiboImage}
              link="https://weibo.com/RayAlto"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="哔哩哔哩"
              image={BilibiliImage}
              link="https://space.bilibili.com/67047863"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Gmail"
              image={GmailImage}
              link="mailto:tianjiayu668@gmail.com"
            >
              tianjiayu668@gmail.com
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Twitter"
              image={TwitterImage}
              link="https://twitter.com/RayAlto1"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Facebook"
              image={FacebookImage}
              link="https://www.facebook.com/ray.alto.148"
            >
              Ray Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Github"
              image={GithubImage}
              link="https://github.com/RayAlto"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
        </GridWithRestriction>
      </GlobalFrame>
    );
  }
}

export default withStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
  },
}))(Contact);
