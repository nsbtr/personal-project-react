import React, { Component } from 'react';
import { Card, Input, Segment, Header, Icon } from 'semantic-ui-react';

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
      <Segment textAlign="center">
        <Header as="h2" icon>
          <Icon name="github alternate" />
          Github Lookup
        </Header>
        <Card.Content>
          <form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              placeholder="Enter a github username"
              value={this.state.username}
              onChange={e => this.handleChange(e.target.value)}
              size="massive"
              action="Login"
              fluid
            />
          </form>
        </Card.Content>
      </Segment>
    );
  }
}

export default Login;
