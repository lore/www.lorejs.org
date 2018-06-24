import React from 'react';

export default class Video extends React.Component {

  componentDidMount() {
    const { video } = this.refs;

    // Load prettyembed.js to make pretty YouTube videos
    $(video).prettyEmbed({
      // useFitVids: true
      showInfo: false,
      showControls: true,
      loop: false,

      colorScheme: 'dark',
      showRelated: false
    });
  }

  render() {
    const { videoId } = this.props;

    return (
      <div className="video">
        <div
          ref="video"
          className="embed-responsive embed-responsive-16by9 drop-shadow pretty-embed"
          data-pe-videoid={videoId}
        />
      </div>
    );
  }

};

