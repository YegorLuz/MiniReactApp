import React from 'react';
import './index.scss';

interface Props {
  children: React.ReactNode;
}

const Index = (props: Props) => (
  <div className="title">{props.children}</div>
);

export default Index;