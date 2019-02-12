import { combineReducers } from 'redux';
import {
  UPDATE_FORKED_EVENTS,
  UPDATE_PULL_REQUEST_EVENTS,
  SET_LOGGED_IN
} from './actions';

const forkEvents = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FORKED_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

const pullRequestEvents = (state = [], action) => {
  switch (action.type) {
    case UPDATE_PULL_REQUEST_EVENTS:
      return action.payload;
    default:
      return state;
  }
};

const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

const hasError = (state = false, action) => {
  switch (action.type) {
    case SET_LOGGED_IN:
      return action.payload;
    default:
      return state;
  }
};

const reducers = combineReducers({
  forkEvents,
  pullRequestEvents,
  isLoggedIn,
  hasError
});

export default reducers;
