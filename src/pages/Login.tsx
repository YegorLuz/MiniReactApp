import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Center } from '../components';
import { Dispatch } from 'redux';
import { login } from '../actions/user';

interface Props {
  login: (name: string, password: string) => void;
}

interface State {
  login: string;
  password: string;
}

class Login extends Component<Props, State> {
  state: State = {
    login: '',
    password: '',
  };

  onChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const login = event.target.value;

    this.setState({ login });
  };

  onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;

    this.setState({ password });
  };

  onSubmit = () => {
    const { login, password } = this.state;

    if (login && password) {
      this.props.login(login, password);
    }
  };

  render() {
    const { login, password } = this.state;

    return (
      <Center>
        <Form>
          <Input value={login} onChange={this.onChangeLogin} />
          <Input type="password" value={password} onChange={this.onChangePassword} />
          <Button onClick={this.onSubmit}>Submit</Button>
        </Form>
      </Center>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (name: string, password: string) => dispatch(login(name, password)),
});

export default connect(null, mapDispatchToProps)(Login);