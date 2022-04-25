import React, { useRef } from 'react';

import { getYouTubePlayerHeight } from 'common/utils/GetYouTubePlayerHeight';

import styles from './module.scss';

const VideoBlinder = () => {
  const ref = useRef(null);
  const playerHeight = getYouTubePlayerHeight(ref);
  const playerStyles = { height: playerHeight };

  return (
    <>
      <div
        ref={ref}
        className={styles.player}
        style={playerStyles}
      >
        <span>Video not selected</span>
      </div>
      <div className={styles.title} />
      <div className={styles.description} />
    </>
  );
};

export default VideoBlinder;
