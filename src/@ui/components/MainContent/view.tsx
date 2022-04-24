import React, { FC, ReactElement } from 'react';

import styles from './module.scss';
import { TVideoData } from './types';

interface IMainContentProps {
  videoData: TVideoData | null,
}

const MainContent: FC<IMainContentProps> = ({
  videoData,
}: IMainContentProps): ReactElement => (
  <div className={styles.mainContent}>
    { videoData ? (
      <iframe
        title={videoData.id}
        id="player"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${'M7lc1UVf-VE'}?enablejsapi=1&origin=http://example.com`}
        frameBorder="0"
      />
    ) : 'Video not selected'}

  </div>
);

export default MainContent;
