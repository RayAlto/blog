import React from "react";

import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";
import Gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";

import withStyles from "@material-ui/core/styles/withStyles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";

import Image from "../Image";

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
          <SyntaxHighlighter customStyle={{}} codeTagProps={{ className: classes.code }} showLineNumbers style={materialLight} language={match[1]} children={String(children).replace(/\n$/, "")} {...props} />
        ) : (
          <code className={className} {...props}>{children}</code>
        )
      },
      pre: ({ node, ...props }) => <div className={classes.code} {...props} />,
      table: Table,
      thead: TableHead,
      tbody: TableBody,
      tr: TableRow,
      th: ({ node, style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      td: ({ node, style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      input: ({ node, checked, disable, type, ...props }) => <FormControlLabel control={<Checkbox checked={checked} />} disabled label={props.children} />,
      p: Typography,
      a: Link,
      hr: Divider,
      h1: ({ node, level, ...props }) => <Typography variant="h3" gutterBottom {...props} />,
      h2: ({ node, level, ...props }) => <Typography variant="h4" gutterBotton {...props} />,
      h3: ({ node, level, ...props }) => <Typography variant="h5" gutterBotton {...props} />,
      h4: ({ node, level, ...props }) => <Typography variant="h6" gutterBotton {...props} />,
      h5: ({ node, level, ...props }) => <Typography variant="h6" gutterBotton {...props} />,
      h6: ({ node, level, ...props }) => <Typography variant="h6" gutterBotton {...props} />,
      li: ({ node, index, ordered, checked, className, ...props }) => <Typography component="li" {...props} />,
      // img: ({ src, title, ...props }) => <CardMedia component="img" image={src} title={title} {...props} />,
      // img: ({ src, title, ...props }) => <Paper component="img" src={src} title={title} {...props} style={{ width: "100%", }} />
      img: Image,
    };

    const md = this.props.md;

    return (
      <ReactMarkdown components={components} remarkPlugins={[Gfm, remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]} children={md} />
    );

  };

};

export default withStyles(theme => ({

  code: {
    width: "100vw",
    overflow: "hidden",
    // overflow: "auto",
    // "& > *": {
    // width: "100%",
    // overflow: "auto",
    // }
  },

}))(MarkdownArticle)