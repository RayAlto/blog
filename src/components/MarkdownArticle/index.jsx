import React from "react";

import PropTypes from "prop-types";

import ReactMarkdown from "react-markdown";
import Gfm from "remark-gfm";
import { Prism as SyntexHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css";

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

export default class MarkdownArticle extends React.Component {

  static propTypes = {
    md: PropTypes.string.isRequired,
  };

  render() {

    const components = {
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || "")
        return !inline && match ? (
          <SyntexHighlighter style={materialLight} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, "")}{...props} />
        ) : (
          <code className={className} {...props}>{children}</code>
        )
      },
      table: Table,
      thead: TableHead,
      tbody: TableBody,
      tr: TableRow,
      th: ({ style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      td: ({ style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      input: ({ checked, disable, type, ...props }) => <FormControlLabel control={<Checkbox checked={checked} />} disabled label={props.children} />,
      p: Typography,
      a: Link,
      hr: Divider,
      h1: ({ level, ...props }) => <Typography variant="h3" {...props} />,
      h2: ({ level, ...props }) => <Typography variant="h4" {...props} />,
      h3: ({ level, ...props }) => <Typography variant="h5" {...props} />,
      h4: ({ level, ...props }) => <Typography variant="h6" {...props} />,
      h5: ({ level, ...props }) => <Typography variant="h6" {...props} />,
      h6: ({ level, ...props }) => <Typography variant="h6" {...props} />,
      li: ({ index, ordered, checked, className, ...props }) => <li><Typography {...props} /></li>,
    };

    const md = this.props.md;

    return (
      <ReactMarkdown components={components} remarkPlugins={[Gfm, remarkMath]} rehypePlugins={[rehypeKatex, rehypeRaw]} children={md} />
    )

  }

}