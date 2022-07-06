import * as React from "react";

import PropTypes from "prop-types";

import Head from "next/head";

import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import withStyles from "@mui/styles/withStyles";

import GlobalFrame from "../../layouts/GlobalFrame";

import GridWithRestriction from "../../components/GridWithRestriction";
import Header from "../../components/Header";
import InfoCard from "../../components/InfoCard";

export async function getStaticProps() {
  return {
    props: {
      friends: [
        {
          name: "轻音时雨",
          detail: "鹿友のKICO的小主页",
          link: "https://www.594594.xyz/",
          image:
            "https://cdn.jsdelivr.net/gh/azmiao/picture-bed/img/%E5%A4%B4%E5%83%8F.jpg",
        },
      ],
    },
  };
}

class Contact extends React.Component {
  static propTypes = {
    friends: PropTypes.array,
  };

  render() {
    const { friends, classes } = this.props;

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
  }
}

export default withStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
  },
}))(Contact);
