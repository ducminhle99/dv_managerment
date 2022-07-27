import { NotificationPlacement, IconType } from 'antd/lib/notification';
import { ReactNode } from 'react';
import { handleActions, Action } from 'redux-actions';
import * as actions from 'store/actions';

export type PopupNotification = {
  isOpen: boolean;
  actionString: 'logout' | 'redirect' | '';
  message: string;
  title?: string;
  closable?: boolean;
  body?: any;
  btnOk?: string;
};

export interface IAppState {
  notification: Notification;
  authLoaded: boolean;
  popupNotification: PopupNotification;
  footerVisibility: boolean;
}

export type Notification = {
  message?: string;
  description?: string;
  placement?: NotificationPlacement | 'center';
  isOpen: boolean;
  type: IconType;
  icon?: ReactNode;
};

const initialState: IAppState = {
  notification: {
    isOpen: false,
    type: 'info',
    description: '',
    message: '',
    placement: 'bottom',
  },
  popupNotification: {
    isOpen: false,
    actionString: '',
    message: '',
    title: '',
    btnOk: 'OK',
  },
  authLoaded: false,
  footerVisibility: true,
};

export default handleActions<IAppState>(
  {
    [actions.notification.toString()]: (state = initialState, action: Action<any>) => ({
      ...state,
      notification: { ...state.notification, ...action.payload },
    }),
    [actions.resetNotification.toString()]: (state = initialState) => ({
      ...state,
      notification: initialState.notification,
    }),
    [actions.setAuthLoaded.toString()]: (state = initialState, action: Action<any>) => ({
      ...state,
      authLoaded: action.payload,
    }),
    [actions.setPopupNotification.toString()]: (state = initialState, action: Action<any>) => ({
      ...state,
      popupNotification: { ...state.popupNotification, ...action.payload },
    }),
    [actions.setVisibilityFooter.toString()]: (state = initialState, action: Action<any>) => ({
      ...state,
      footerVisibility: action.payload,
    }),
  },
  initialState
);
