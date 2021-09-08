import React from 'react';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import withStyles from '@material-ui/core/styles/withStyles';

import { alpha } from '@material-ui/core/styles';

class SearchBox extends React.Component {

  render() {
    return (
      <div className={this.props.classes.search}>
        <div className={this.props.classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: this.props.classes.inputRoot,
            input: this.props.classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    );
  };

};

export default withStyles(theme => ({

  search: {

    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),

    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },

  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "inherit",
  },

  inputInput: {

    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",

    [theme.breakpoints.up("md")]: {
      width: "100%",
    },

  },

}))(SearchBox);