import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateData } from './actions';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header, Icon } from 'semantic-ui-react';
import Login from './components/Login';
import EventList from './components/EventList';

class App extends Component {
  render() {
    const {
      isLoggedIn,
      forkEvents,
      pullRequestEvents,
      hasError,
      handleSubmit
    } = this.props;
    return (
      <Segment textAlign="center" basic>
        <Header as="h2" icon>
          <Icon name="github alternate" />
          Github Lookup
        </Header>
        {!isLoggedIn ? (
          <Login onSubmit={handleSubmit} hasError={hasError} />
        ) : (
          <Segment textAlign="left" basic>
            <EventList
              title="Forked Repos"
              iconName="fork"
              eventArray={forkEvents}
            />
            <EventList
              title="Pull Requests"
              iconName="github"
              eventArray={pullRequestEvents}
            />
          </Segment>
        )}
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    forkEvents: state.forkEvents,
    pullRequestEvents: state.pullRequestEvents,
    isLoggedIn: state.isLoggedIn,
    hasError: state.hasError
  };
};

const mapDispatchToProps = dispatch => {
  return { handleSubmit: username => dispatch(updateData(username)) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
