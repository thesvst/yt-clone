import React, { FC, ReactElement } from 'react';

interface IMainContentProps {
  children: ReactElement
}

const MainContent: FC<IMainContentProps> = ({
  children,
}: IMainContentProps): ReactElement => (
  <div>
    {children}
  </div>
);

export default MainContent;
