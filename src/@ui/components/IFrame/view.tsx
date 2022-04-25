import React, { FC, ReactElement } from 'react';

interface IIFrameProps {
  title: string,
  id: string,
  onLoadCallback: () => void,
  height: number,
  src: string,
}

const IFrame: FC<IIFrameProps> = ({
  title,
  id,
  onLoadCallback,
  height,
  src,
}: IIFrameProps): ReactElement => (
  <iframe
    title={title}
    id={id}
    width="100%"
    onLoad={onLoadCallback}
    height={height}
    src={src}
    frameBorder="0"
  />
);

export default IFrame;
