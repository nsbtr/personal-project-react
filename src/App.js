import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  updateForkedEvents,
  updatePullRequestEvents,
  setLoggedIn
} from './actions';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { formatForkedRepoData, formatPullRequestData } from './helpers';
import { Segment, Header, Icon } from 'semantic-ui-react';
import Login from './components/Login';
import EventList from './components/EventList';

class App extends Component {
  // state = {
  //   forkEvents: [],
  //   pullRequestEvents: [],
  //   isLoggedIn: false
  // };

  handleSubmit = username => {
    fetch(`https://api.github.com/users/${username}/events`)
      .then(resp => resp.json())
      .then(data => {
        const eventData = data.reduce((acc, event) => {
          return {
            ...acc,
            [event.type]: acc[event.type]
              ? [...acc[event.type], { ...event }]
              : [{ ...event }]
          };
        }, {});

        this.setState({
          forkEvents: eventData.ForkEvent
            ? formatForkedRepoData(eventData.ForkEvent)
            : [],
          pullRequestEvents: eventData.PullRequestEvent
            ? formatPullRequestData(eventData.PullRequestEvent)
            : [],
          isLoggedIn: true
        });
      })
      .catch(() => this.setState({ hasError: true }));
  };

  render() {
    const { isLoggedIn, forkEvents, pullRequestEvents, hasError } = this.props;
    return (
      <Segment textAlign="center" basic>
        <Header as="h2" icon>
          <Icon name="github alternate" />
          Github Lookup
        </Header>
        {!isLoggedIn ? (
          <Login onSubmit={this.handleSubmit} hasError={hasError} />
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

const mapDispatchToProps = {
  updateForkedEvents,
  updatePullRequestEvents,
  setLoggedIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
