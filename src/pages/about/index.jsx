import React from 'react';

import GlobalFrame from '../../layouts/GlobalFrame';
import About from '../../layouts/About';

class Home extends React.Component {

  render() {

    return (
      <GlobalFrame>
        <About />
      </GlobalFrame>
    );

  };

};

export default Home;