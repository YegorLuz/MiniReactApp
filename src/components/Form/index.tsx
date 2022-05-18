import React from 'react';
import './index.scss';

interface Props {
  children?: React.ReactNode;
}

const Form: React.FC<Props> = (props: Props) => (
  <div className="form">{props.children}</div>
);

export default Form;