import React from 'react';
import './index.scss';

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = (props: Props) => (
  <button className="button" onClick={props.onClick}>{props.children}</button>
);

export default Button;