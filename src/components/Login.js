import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

class Login extends Component {
  state = {
    username: ''
  };

  handleChange = username => {
    this.setState({ username });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.username);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="Enter username"
            value={this.state.username}
            onChange={e => this.handleChange(e.target.value)}
          />
          <Button type="submit" onClick={this.handleSubmit}>
            View
          </Button>
        </form>
      </div>
    );
  }
}

export default Login;
