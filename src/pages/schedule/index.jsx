import React from 'react';

import GlobalFrame from '../../layouts/GlobalFrame';
import Schedule from '../../layouts/Schedule';

class Home extends React.Component {

  render() {

    return (
      <GlobalFrame>
        <Schedule />
      </GlobalFrame>
    );

  };

};

export default Home;