import React, { FC, ReactElement, useRef } from 'react';

import styles from './module.scss';
import { TPlayerVideoData } from './types';

interface IMainContentProps {
  videoData: TPlayerVideoData | null,
}

const MainContent: FC<IMainContentProps> = ({
  videoData,
}: IMainContentProps): ReactElement => {
  const iframeWrapperRef = useRef<any>(null);
  const calcIframeHeight = () => {
    if (!iframeWrapperRef?.current) return 360;

    return iframeWrapperRef.current.clientWidth * 0.5625;
  };
  const iframeHeight = calcIframeHeight();

  return (
    <div className={styles.mainContent}>
      <div ref={iframeWrapperRef}>
        { videoData ? (
          <>
            <iframe
              title={videoData.id}
              id="player"
              width="100%"
              height={iframeHeight}
              src={`https://www.youtube.com/embed/${videoData.id}?enablejsapi=1&origin=http://example.com`}
              frameBorder="0"
            />
            <div>
              <div className={styles.title}>
                {videoData.title}
              </div>
              <div className={styles.description}>
                {videoData.description}
              </div>
            </div>
          </>
        ) : 'Video not selected'}
      </div>
    </div>
  );
};

export default MainContent;
