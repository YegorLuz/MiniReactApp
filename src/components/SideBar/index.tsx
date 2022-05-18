import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import withRole, { RoleProps } from '../../wrappers/withRole';
import { List, ListItem } from '../../components';
import { Link, useLocation, Location } from 'react-router-dom';
import { RouteData } from '../../static/routes';
import { getRoutes, isActiveRoute } from '../../utils/helpers';
import { Dispatch } from 'redux';
import { logOut } from '../../actions/user';

interface Props extends RoleProps {
  logOut: () => void;
}

const renderItem = ({ to, title, id }: RouteData, location: Location) => {
  const isActive = isActiveRoute(to, location);

  return (
    <ListItem key={id}>
      <Link to={to} title={title} className={isActive ? '-active' : ''}>{title}</Link>
    </ListItem>
  );
};

const Index: React.FC<Props> = (props: Props) => {
  const data = getRoutes(props.role);
  const location = useLocation();

  return (
    <div className="sidebar">
      <div>
        <Link className="logo" to={'/'}>Logo</Link>
        <List data={data} renderItem={(item) => renderItem(item, location)} />
      </div>
      <div className="logout" onClick={props.logOut}>Log Out</div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(null, mapDispatchToProps)(withRole(Index));