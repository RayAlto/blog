import * as React from 'react';

import PropTypes from 'prop-types';

import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import withStyles from '@mui/styles/withStyles';

import ReactMarkdown from 'react-markdown';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import rehypeRaw from 'rehype-raw';
import Gfm from 'remark-gfm';
import remarkMath from 'remark-math';

import {
  SIDEBAR_WIDTH
} from '../../constants/sizes';

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
          <SyntaxHighlighter
            showLineNumbers
            style={materialLight}
            language={match[1]}
            children={String(children).replace(/\n$/, "")}
            {...props}
          />
        ) : (
          <code className={className} {...props}>{children}</code>
        );
      },
      pre: ({ node, ...props }) => <div className={classes.pre} {...props} />,
      table: ({ node, ...props }) => <Table {...props} />,
      thead: ({ node, ...props }) => <TableHead {...props} />,
      tbody: ({ node, ...props }) => <TableBody {...props} />,
      tr: ({ node, ...props }) => <TableRow {...props} />,
      th: ({ node, style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      td: ({ node, style, isHeader, ...props }) => <TableCell align={style?.textAlign}><Typography {...props} /></TableCell>,
      input: ({ node, checked, disable, type, ...props }) => <Checkbox checked={checked} disabled {...props} />,
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
      width: `calc(100vw - ${SIDEBAR_WIDTH}px)`,
    },

    width: `calc(100vw - ${theme.spacing(6)})`,

  },

}))(MarkdownArticle);