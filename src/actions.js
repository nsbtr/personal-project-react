export const UPDATE_FORKED_EVENTS = 'UPDATE_FORKED_EVENTS';
export const UPDATE_PULL_REQUEST_EVENTS = 'UPDATE_PULL_REQUEST_EVENT';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';

export const updateForkedEvents = payload => ({
  type: UPDATE_FORKED_EVENTS,
  payload
});
export const updatePullRequestEvents = payload => ({
  type: UPDATE_PULL_REQUEST_EVENTS,
  payload
});

export const setLoggedIn = isLoggedIn => ({
  type: SET_LOGGED_IN,
  isLoggedIn
});

export const setHasError = hasError => ({
  type: SET_LOGGED_IN,
  hasError
});
