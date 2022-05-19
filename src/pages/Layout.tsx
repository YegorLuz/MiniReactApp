import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StateTypes } from '../reducers';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { SideBar, Header, Main } from '../components';
import withRole, { RoleProps } from '../wrappers/withRole';
import { isInitialRoute, isRouteAllowed } from '../utils/helpers';
import { Dispatch } from 'redux';
import { verify } from '../actions/common';

interface Props extends RoleProps {
  loggedIn: boolean;
  verify: () => void;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { loggedIn, role } = props;
  const location = useLocation();
  const [route, setRoute] = useState('');

  useEffect(() => {
    if (!loggedIn) {
      props.verify();
    }
    if (!route && !isInitialRoute(location)) {
      setRoute(location.pathname);
    }
  }, []);

  if (!loggedIn && location.pathname !== '/login') return <Navigate to={'/login'} replace/>;
  if (loggedIn && location.pathname === '/login') return <Navigate to={route} replace/>;
  if (!isInitialRoute(location) && !isRouteAllowed(role, location)) return <Navigate to={'/'} replace/>;

  return <div className="layout">
    <SideBar/>
    <Main>
      <Header/>
      <div className="page">
        <Outlet/>
      </div>
    </Main>
  </div>;
}

const mapStateToProps = (state: StateTypes) => ({
  loggedIn: state.user.loggedIn,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  verify: () => dispatch(verify()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRole(Layout));