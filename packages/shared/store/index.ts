import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers, { reducersSync } from './reducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { createStateSyncMiddleware, initMessageListener, initStateWithPrevTab } from 'redux-state-sync';
import { setAuthenticated, logout } from './actions';

let stateSyncMiddleware: any = undefined;

if (process.browser) {
  stateSyncMiddleware = createStateSyncMiddleware({ whitelist: [setAuthenticated({}).type, logout().type] });
}

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  let middleware = bindMiddleware([sagaMiddleware]);
  if (stateSyncMiddleware) {
    middleware = bindMiddleware([stateSyncMiddleware, sagaMiddleware]);
  }
  const store: any = createStore(reducersSync, middleware);

  store.sagaTask = sagaMiddleware.run(rootSaga);
  initMessageListener(store);
  initStateWithPrevTab(store);
  return store;
};

// const storeGlobalSync = createStore(reducersSync);

const storeGlobal = createStore(reducers);
export type RootState = ReturnType<typeof storeGlobal.getState>;

export const wrapper = createWrapper(makeStore, { debug: process.env.NODE_ENV !== 'production' });
