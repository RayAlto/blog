import React from 'react';

import GlobalFrame from '../../layouts/GlobalFrame';
import NoteIndex from '../../layouts/NoteIndex';

class Home extends React.Component {

  render() {

    return (
      <GlobalFrame>
        <NoteIndex />
      </GlobalFrame>
    );

  };

};

export default Home;