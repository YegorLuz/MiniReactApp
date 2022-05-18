import React from 'react';
import { connect } from 'react-redux';
import { StateTypes } from '../reducers';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { SideBar, Header, Main } from '../components';
import withRole, { RoleProps } from '../wrappers/withRole';
import { isInitialRoute, isRouteAllowed } from '../utils/helpers';

interface Props extends RoleProps {
  loggedIn: boolean;
}

const Layout: React.FC<Props> = (props: Props) => {
  const { loggedIn, role } = props;
  const location = useLocation();

  if (!loggedIn && location.pathname !== '/login') return <Navigate to={'/login'} replace/>;
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

export default connect(mapStateToProps, {})(withRole(Layout));