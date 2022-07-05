import * as React from "react";

import Head from "next/head";
import { withRouter } from "next/router";

import withStyles from "@mui/styles/withStyles";

import GlobalFrame from "../../../layouts/GlobalFrame";
import NoteContent from "../../../layouts/NoteContent";

export async function getStaticProps(context) {
  return {
    props: {
      noteContent: {
        note: context.params.note,
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          note: "java",
        },
      },
    ],
    fallback: false,
  };
}

// url: /notes/java
class NoteContentPage extends React.Component {
  render() {
    const { noteContent } = this.props;

    return (
      <GlobalFrame>
        <Head>
          <title>{`笔记目录 - ${noteContent.note}`}</title>
        </Head>
        <NoteContent
          title={noteContent.note}
          summary="Java 是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级 Web 应用开发和移动应用开发。"
          image={{
            url: "https://www.rayalto.top/images/banner.png",
            alt: "java",
            title: "Java",
          }}
          notes={[
            {
              url: `${this.props.router.asPath}/001`,
              title: "test",
            },
          ]}
        />
      </GlobalFrame>
    );
  }
}

export default withStyles(() => ({}))(withRouter(NoteContentPage));
