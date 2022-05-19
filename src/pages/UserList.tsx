import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StateTypes } from '../reducers';
import { Dispatch } from 'redux';
import { getText } from '../actions/common';

interface Props {
  text: string;
  getText: () => void;
}

interface State {}

class UserList extends Component<Props, State> {
  componentDidMount() {
    this.props.getText();
  }

  render() {
    const { text } = this.props;

    return (
      <div className="simple-text">
        {text.split('\n').map((txt: string, index: number) => <p key={index}>{txt}</p>)}
      </div>
    );
  }
}

const mapStateToProps = (state: StateTypes) => ({
  text: state.common.text,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getText: () => dispatch(getText()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);