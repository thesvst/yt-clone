import React, {
  Dispatch,
  FC, ReactElement, SetStateAction, useEffect, useRef,
} from 'react';

import styles from './module.scss';
import { TPlayerVideoData } from './types';

interface IMainContentProps {
  videoData: TPlayerVideoData | null,
  videoLoading: boolean,
  setVideoLoading: Dispatch<SetStateAction<boolean>>,
}

const MainContent: FC<IMainContentProps> = ({
  videoData,
  videoLoading,
  setVideoLoading,
}: IMainContentProps): ReactElement => {
  const iframeWrapperRef = useRef<any>(null);
  const calcIframeHeight = () => {
    if (!iframeWrapperRef?.current) return 360;

    return iframeWrapperRef.current.clientWidth * 0.5625;
  };
  const iframeHeight = calcIframeHeight();

  useEffect(() => {
    setVideoLoading(true);
  }, [videoData]);

  return (
    <div className={styles.mainContent}>
      {(videoLoading && videoData?.id) && <div className={styles.loader}>LOADING</div>}
      <div ref={iframeWrapperRef}>
        { videoData ? (
          <div>
            <iframe
              title={videoData.id}
              id="player"
              width="100%"
              onLoad={() => {
                setVideoLoading(false);
              }}
              height={iframeHeight}
              src={`https://www.youtube.com/embed/${videoData.id}?enablejsapi=1&origin=http://example.com`}
              frameBorder="0"
            />
          </div>
        ) : 'Video not selected'}
        {(videoData && !videoLoading) && (
        <div>
          <div className={styles.title}>
            {videoData.title}
          </div>
          <div className={styles.description}>
            {videoData.description}
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
