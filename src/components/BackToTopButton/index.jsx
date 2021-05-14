import React from "react";
import PropTypes from "prop-types";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import withStyles from "@material-ui/core/styles/withStyles";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function ScrollTop(props) {

  const zoomTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = document.querySelector(`#${props.topElementId}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={zoomTrigger}>
      <div onClick={handleClick} role="presentation" className={props.classes.root}>
        {props.children}
      </div>
    </Zoom>
  );
}

class BackToTopButton extends React.Component {

  static propTypes = {
    topElementId: PropTypes.string.isRequired,
  };

  render() {
    return (
      <ScrollTop {...this.props}>
        <Fab color="secondary" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    )
  }
}

export default withStyles(theme => ({

  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },

}))(BackToTopButton);