import { combineReducers } from 'redux';
import { withReduxStateSync } from 'redux-state-sync';

import app from './app';
import authentication from './authentication';
import profile from './profile';

const reducers = combineReducers({
  app,
  authentication,
  profile,
});

export default reducers;

export const reducersSync = withReduxStateSync(reducers as any);
