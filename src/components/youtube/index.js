import React from 'react';

import styles from './videoarea.module.css'

const VideoWithContent = ({ videoSrc, videoHeading, content }) => {
  return (
    <div className={styles.container}>
      <div className={styles.video_card}>
        <h2>{videoHeading}</h2>
        <iframe
          // width="560"
          // height="315"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.content_card}>
        <h2>Related Content</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default VideoWithContent;
