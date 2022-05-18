import React from 'react';
import './index.scss';

interface Props {
  type?: string;
  value: string;
  onChange: (event: any) => void;
}

const Input = ({ value, onChange, type = 'rest',  ...rest }: Props) => (
  <input className="input" type={type} value={value} onChange={onChange} {...rest} />
);

export default Input;