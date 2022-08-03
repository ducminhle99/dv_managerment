import { takeEvery, put, delay } from 'redux-saga/effects';
import { loadAuthentication, logout, setAuthenticated, setAuthLoaded } from 'store/actions';
import { appConfig } from '@configs/app';
import { IAuthRememberState, initialState } from 'store/reducers/authentication';
import { Action } from 'redux-actions';

function* handleLoadAuthentication() {
  let authToken = window.localStorage.getItem(appConfig.authSecretKey);

  if (!authToken) {
    authToken = null;
  }

  let payloadData = { ...initialState };

  if (authToken) {
    payloadData = JSON.parse(authToken);
    yield put(setAuthenticated(payloadData));
    yield put(setAuthLoaded(true));
    return;
  }
  yield delay(1000);
  yield put(setAuthLoaded(true));
}

function* trackSetAuthentication(action: Action<IAuthRememberState>) {
  const payloadString = JSON.stringify(action.payload);
  window.localStorage.setItem(appConfig.authSecretKey, payloadString);

  yield put(setAuthLoaded(true));
}

function* trackLogout() {
  window.localStorage.removeItem(appConfig.authSecretKey);
  window.sessionStorage.removeItem(appConfig.authSecretKey);
}

function* syncState(action: any) {
  if (action?.payload?.authentication) {
    const payloadString = JSON.stringify(action.payload.authentication);
    window.sessionStorage.setItem(appConfig.authSecretKey, payloadString);
  }
}

export default function* watchAuthentication() {
  yield takeEvery(loadAuthentication.toString(), handleLoadAuthentication);
  yield takeEvery(setAuthenticated.toString(), trackSetAuthentication);
  yield takeEvery(logout.toString(), trackLogout);
  yield takeEvery('&_RECEIVE_INIT_STATE', syncState);
}
