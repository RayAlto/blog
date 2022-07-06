import * as React from "react";

import SvgIcon from "@mui/material/SvgIcon";

export default class Jupyter extends React.Component {
  render() {
    return (
      <SvgIcon viewBox="0 0 1024 1024" {...this.props}>
        <path d="M520.533333 772.266667c-162.133333 0-307.2-59.733333-384-145.066667 29.866667 76.8 81.066667 145.066667 149.333334 192s149.333333 72.533333 234.666666 72.533333 166.4-25.6 234.666667-72.533333 119.466667-115.2 149.333333-192c-76.8 85.333333-221.866667 145.066667-384 145.066667z m0-563.2c162.133333 0 307.2 59.733333 384 145.066666-29.866667-76.8-81.066667-145.066667-149.333333-192C682.666667 110.933333 601.6 85.333333 520.533333 85.333333c-85.333333 0-166.4 25.6-234.666666 72.533334-68.266667 51.2-119.466667 115.2-149.333334 196.266666 76.8-89.6 217.6-145.066667 384-145.066666z m298.666667-204.8a59.733333 59.733333 0 1 0 0 119.466666 59.733333 59.733333 0 1 0 0-119.466666zM217.6 866.133333a76.8 76.8 0 1 0 0 153.6 76.8 76.8 0 1 0 0-153.6z m-64-768a42.666667 42.666667 0 1 0 0 85.333334 42.666667 42.666667 0 1 0 0-85.333334z" />
      </SvgIcon>
    );
  }
}
