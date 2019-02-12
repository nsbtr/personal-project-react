import React, { Component } from 'react';
import { Input, Segment, Header, Icon } from 'semantic-ui-react';

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
    const { hasError } = this.props;
    return (
      <Segment textAlign="center">
        <Header as="h2" icon>
          <Icon name="github alternate" />
          Github Lookup
        </Header>
        <form onSubmit={this.handleSubmit}>
          {hasError && (
            <Segment inverted color="red" secondary>
              Please enter a valid github username.
            </Segment>
          )}
          <Input
            type="text"
            placeholder="Enter a github username"
            value={this.state.username}
            onChange={e => this.handleChange(e.target.value)}
            size="massive"
            action="Login"
            error={hasError}
            fluid
          />
        </form>
      </Segment>
    );
  }
}

export default Login;
