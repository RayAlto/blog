import React from 'react';

import PubSub from 'pubsub-js';

import Head from 'next/head';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import GlobalFrame from '../../layouts/GlobalFrame';

import GridWithRestriction from '../../components/GridWithRestriction';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';

import BilibiliImage500x300 from '../../../public/images/bilibili@500x300.png';
import FacebookImage500x300 from '../../../public/images/facebook@500x300.png';
import GithubImage500x300 from '../../../public/images/github@500x300.png';
import GmailImage500x300 from '../../../public/images/gmail@500x300.png';
import QQImage500x300 from '../../../public/images/qq@500x300.png';
import QQQrImage from '../../../public/images/Qr-QQ.jpg';
import TwitterImage500x300 from '../../../public/images/twitter@500x300.png';
import WechatImage500x300 from '../../../public/images/wechat@500x300.png';
import WechatQrImage from '../../../public/images/Qr-Wechat.png';
import WeiboImage500x300 from '../../../public/images/weibo@500x300.png';

import {
  OPEN_IMAGE_DIALOG,
} from '../../constants/events';

class Contact extends React.Component {

  wechatClicked = (event) => {
    PubSub.publish(OPEN_IMAGE_DIALOG, {
      image: WechatQrImage,
      title: "扫描二维码",
      alt: "微信二维码"
    })
  };

  qqClicked = (event) => {
    PubSub.publish(OPEN_IMAGE_DIALOG, {
      image: QQQrImage,
      title: "扫描二维码",
      alt: "QQ二维码",
    });
  }

  render() {

    return (
      <GlobalFrame>
        <Head>
          <title>RayAlto - 社交</title>
        </Head>
        <Header>社交</Header>
        <Divider />
        <GridWithRestriction>
          <Grid xs item>
            <InfoCard
              title="QQ"
              image={QQImage500x300}
              onClick={this.qqClicked}
            >
              Ray_Alto(995010578)
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="微信"
              image={WechatImage500x300}
              onClick={this.wechatClicked}
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="微博"
              image={WeiboImage500x300}
              link="https://weibo.com/RayAlto"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="哔哩哔哩"
              image={BilibiliImage500x300}
              link="https://space.bilibili.com/67047863"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Gmail"
              image={GmailImage500x300}
              link="mailto:tianjiayu668@gmail.com"
            >
              tianjiayu668@gmail.com
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Twitter"
              image={TwitterImage500x300}
              link="https://twitter.com/RayAlto1"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Facebook"
              image={FacebookImage500x300}
              link="https://www.facebook.com/ray.alto.148"
            >
              Ray Alto
            </InfoCard>
          </Grid>
          <Grid xs item>
            <InfoCard
              title="Github"
              image={GithubImage500x300}
              link="https://github.com/RayAlto"
            >
              Ray_Alto
            </InfoCard>
          </Grid>
        </GridWithRestriction>
      </GlobalFrame>
    );

  };

};

export default Contact;