import React from 'react';

import GlobalFrame from '../../layouts/GlobalFrame';
import Contact from '../../layouts/Contact';

class Home extends React.Component {

  render() {

    return (
      <GlobalFrame>
        <Contact />
      </GlobalFrame>
    );

  };

};

export default Home;