import React from 'react';

import GlobalFrame from '../../layouts/GlobalFrame';
import Blogs from '../../layouts/Blogs';

class Home extends React.Component {

  render() {

    return (
      <GlobalFrame>
        <Blogs/>
      </GlobalFrame>
    );

  };

};

export default Home;