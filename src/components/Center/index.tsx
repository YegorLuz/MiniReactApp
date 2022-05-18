import React from 'react';
import './index.scss';

interface Props {
  children: React.ReactNode;
}

const Center: React.FC<Props> = (props: Props) => (
  <div className="center">{props.children}</div>
);

export default Center;