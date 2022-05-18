import React from 'react';
import './index.scss';

interface Props {
  children?: React.ReactNode;
}

const Main: React.FC<Props> = (props: Props) => (
  <main className="body">{props.children}</main>
);

export default Main;