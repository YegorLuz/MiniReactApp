import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StateTypes } from '../reducers';

interface Props {}

export interface RoleProps {
  role: string;
}

const withRole = <P extends Props>(
  WrapperComponent: React.ComponentType<P & RoleProps>,
) => {
  class Role extends Component<P & Props & RoleProps> {
    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state: StateTypes) => ({
    role: state.user.role,
  });

  // @ts-ignore
  Role.screenName = WrapperComponent.screenName;
  // @ts-ignore
  Role.displayName = WrapperComponent.displayName;

  return connect(mapStateToProps, null)(Role as any) as any;
};

export default withRole;