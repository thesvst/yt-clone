import React, {
  Dispatch,
  FC, ReactElement, SetStateAction, useEffect, useRef,
} from 'react';

import Loader from '@ui/components/Loader';
import IFrame from '@ui/components/IFrame';

import styles from './module.scss';
import { TPlayerVideoData } from './types';
import MovieDetails from './components/MovieDetails';
import { getVideoSrc } from './utils';

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
  const videoSrc = getVideoSrc(videoData?.id);

  const calcIframeHeight = () => {
    if (!iframeWrapperRef?.current) return 360;

    return iframeWrapperRef.current.clientWidth * 0.5625;
  };
  const iframeHeight = calcIframeHeight();

  const onLoadCallback = () => {
    setVideoLoading(false);
  };

  useEffect(() => {
    setVideoLoading(true);
  }, [videoData]);

  return (
    <div className={styles.mainContent}>
      {(videoLoading && videoData?.id) && <Loader />}
      <div ref={iframeWrapperRef}>
        { videoData ? (
          <IFrame
            id={videoData.id}
            title={videoData.title}
            onLoadCallback={onLoadCallback}
            height={iframeHeight}
            src={videoSrc}
          />
        ) : 'Video not selected' }
        {(videoData && !videoLoading) && (
          <MovieDetails
            title={videoData.title}
            description={videoData.description}
          />
        )}
      </div>
    </div>
  );
};

export default MainContent;
