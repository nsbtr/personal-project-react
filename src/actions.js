import { formatForkedRepoData, formatPullRequestData } from './helpers';

export const UPDATE_FORKED_EVENTS = 'UPDATE_FORKED_EVENTS';
export const UPDATE_PULL_REQUEST_EVENTS = 'UPDATE_PULL_REQUEST_EVENT';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

const updateForkedEvents = payload => ({
  type: UPDATE_FORKED_EVENTS,
  payload
});
const updatePullRequestEvents = payload => ({
  type: UPDATE_PULL_REQUEST_EVENTS,
  payload
});

const setLoggedIn = payload => ({
  type: SET_LOGGED_IN,
  payload
});

const setHasError = payload => ({
  type: SET_LOGGED_IN,
  payload
});

export const updateData = username => {
  return dispatch => {
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

        const forkedEvents = eventData.ForkEvent
          ? formatForkedRepoData(eventData.ForkEvent)
          : [];
        const pullRequestEvents = eventData.PullRequestEvent
          ? formatPullRequestData(eventData.PullRequestEvent)
          : [];

        dispatch(updateForkedEvents(forkedEvents));
        dispatch(updatePullRequestEvents(pullRequestEvents));
        dispatch(setLoggedIn(true));
      })
      .catch(() => dispatch(setHasError(true)));
  };
};
