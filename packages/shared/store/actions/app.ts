import { createAction } from 'redux-actions';
import { Notification, PopupNotification } from 'store/reducers/app';

export const notification = createAction<Notification>('APP_NOTIFICATION');
export const resetNotification = createAction('APP_RESET_NOTIFICATION');
export const setAuthLoaded = createAction<boolean>('APP_SET_AUTH_LOADED');
export const setAppLoading = createAction<boolean>('APP_SET_APP_LOADING');
export const setPopupNotification = createAction<PopupNotification>('APP_SET_APP_POP_UP_NOTIFICATION');
export const setVisibilityFooter = createAction<boolean>('APP_SET_VISIBILITY_FOOTER');
