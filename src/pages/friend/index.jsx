import React from 'react';

import PubSub from 'pubsub-js';

import Head from 'next/head';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import withStyles from '@material-ui/core/styles/withStyles';

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

    const friends = [
      {
        name: "轻音时雨",
        detail: "鹿友のKICO的小主页",
        link: "https://www.594594.xyz/",
        image: "https://cdn.jsdelivr.net/gh/azmiao/picture-bed/img/%E5%A4%B4%E5%83%8F.jpg",
      },
    ];

    const {
      classes,
    } = this.props;

    return (
      <GlobalFrame>
        <Head>
          <title>RayAlto - 友链</title>
        </Head>
        <Header>友链</Header>
        <Divider className={classes.divider} />
        <GridWithRestriction>
          {friends.map((friend) => {
            return (
              <Grid xs item key={`${friend.name}-${friend.detail}`}>
                <InfoCard
                  title={friend.name}
                  image={friend.image}
                  link={friend.link}
                >
                  {friend.detail}
                </InfoCard>
              </Grid>
            );
          })}
        </GridWithRestriction>
      </GlobalFrame>
    );

  };

};

export default withStyles(theme => ({

  divider: {
    marginBottom: theme.spacing(3),
  },

}))(Contact);