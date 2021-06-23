import React from "react";

import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import "katex/dist/katex.min.css";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import Gfm from "remark-gfm";

import Checkbox from "@material-ui/core/Checkbox"
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import withStyles from "@material-ui/core/styles/withStyles";

import Image from "../Image";

import { sideBarWidth } from "../../layouts/SideBar";

class MarkdownArticle extends React.Component {

  static propTypes = {
    md: PropTypes.string.isRequired,
  };

  render() {

    const classes = this.props.classes;

    const components = {
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "")
        return !inline && match ? (
          <SyntaxHighlighter
            showLineNumbers
            style={materialLight}
            language={match[1]}
            children={String(children).replace(/\n$/, "")}
            {...props}
          />
        ) : (
          <code className={className} {...props}>{children}</code>
        )
      },
      pre: ({ node, ...props }) => <div item className={classes.pre} {...props} />,
      table: ({ node, ...props }) => <Table {...props} />,
      thead: ({ node, ...props }) => <TableHead {...props} />,
      tbody: ({ node, ...props }) => <TableBody {...props} />,
      tr: ({ node, ...props }) => <TableRow {...props} />,
      th: ({ node, style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      td: ({ node, style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      input: ({ node, checked, disable, type, ...props }) => <FormControlLabel control={<Checkbox checked={checked} />} disabled label={props.children} />,
      p: ({ node, ...props }) => <Typography {...props} />,
      a: ({ node, ...props }) => <Link {...props} />,
      hr: ({ node, ...props }) => <Divider {...props} />,
      h1: ({ node, level, ...props }) => <Typography variant="h3" component="h1" gutterBottom {...props} />,
      h2: ({ node, level, ...props }) => <Typography variant="h4" component="h2" gutterBotton {...props} />,
      h3: ({ node, level, ...props }) => <Typography variant="h5" component="h3" gutterBotton {...props} />,
      h4: ({ node, level, ...props }) => <Typography variant="h6" component="h4" gutterBotton {...props} />,
      h5: ({ node, level, ...props }) => <Typography variant="h6" component="h5" gutterBotton {...props} />,
      h6: ({ node, level, ...props }) => <Typography variant="h6" component="h6" gutterBotton {...props} />,
      li: ({ node, index, ordered, checked, className, ...props }) => <Typography component="li" {...props} />,
      // img: ({ src, title, ...props }) => <CardMedia component="img" image={src} title={title} {...props} />,
      // img: ({ src, title, ...props }) => <Paper component="img" src={src} title={title} {...props} style={{ width: "100%", }} />
      img: ({ node, ...props }) => <Image {...props} />,
    };

    const md = this.props.md;

    return (
      <ReactMarkdown
        components={components}
        remarkPlugins={[Gfm, remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeRaw]}
        children={md}
      />
    );

  };

};

export default withStyles(theme => ({

  pre: {

    [theme.breakpoints.up("sm")]: {
      width: `calc(100vw - ${sideBarWidth + theme.spacing(8.1)}px)`,
    },

    width: `calc(100vw - ${theme.spacing(6)}px)`,

  },

}))(MarkdownArticle);