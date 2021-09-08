import React from 'react';

import SvgIcon from '@material-ui/core/SvgIcon';

export default class Schedule extends React.Component {

  render() {
    return (
      <SvgIcon viewBox="0 0 1024 1024" {...this.props}>
        <path d="M264.9 390.1h127.2v127.2H264.9V390.1z m184.7 0h127.2v127.2H449.6V390.1z m184.6 0h127.2v127.2H634.2V390.1z m6.2 44.7M264.9 597.8h127.2V725H264.9V597.8z m184.7 0h127.2V725H449.6V597.8z m184.6 0h127.2V725H634.2V597.8z m6.2 0" />
        <path d="M825 201v626.1H198.8V201H825m10-70H188.8c-33 0-60 27-60 60v646.1c0 33 27 60 60 60H835c33 0 60-27 60-60V191c0-33-27-60-60-60z" />
        <path d="M192.2 201.4h639.2v74H192.2z" />
        <path d="M806.4 226.4v24H217.2v-24h589.2m50-50H167.2v124h689.2v-124z" />
      </SvgIcon>
    );
  };

};