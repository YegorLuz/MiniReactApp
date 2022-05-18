import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import { pageTitle, userNameLetters } from '../../utils/helpers';
import { useLocation } from 'react-router-dom';
import { StateTypes } from '../../reducers';
import Title from '../Title';

interface Props {
  userName: string;
}

const Index: React.FC<Props> = (props: Props) => {
  const location = useLocation();

  return (
    <header className="header">
      <Title>{pageTitle(location)}</Title>
      <div className="user">{userNameLetters(props.userName) || '?'}</div>
    </header>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  userName: state.user.name,
});

export default connect(mapStateToProps, {})(Index);