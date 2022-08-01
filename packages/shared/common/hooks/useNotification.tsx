import { notification } from 'antd';
import { ArgsProps } from 'antd/lib/notification';
import { useSelector } from 'common/hooks';
import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { resetNotification } from 'store/actions';
import { ExclamationOutlined } from '@ant-design/icons';
import { SuccessTick } from 'common/components/icons';

export function useNotification() {
  const { notification: notificationState } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const onCloseNotification = useCallback(() => {
    dispatch(resetNotification());
  }, [dispatch]);

  useEffect(() => {
    if (!notificationState.isOpen) {
      return;
    }

    const notificationBody = {
      message: notificationState.message,
      description: notificationState.description,
      placement: notificationState.placement,
      onClose: onCloseNotification,
      icon: notificationState.icon,
    } as ArgsProps;

    switch (notificationState.type) {
      case 'error':
        notification.error({
          ...notificationBody,
          icon: (
            <div className="rounded-full w-6 h-6 text-white bg-primary flex items-center justify-center">
              <ExclamationOutlined className="h-6" />
            </div>
          ),
        });
        break;
      case 'info':
        notification.info({
          ...notificationBody,
          icon: (
            <div className="rounded-full bg-white w-10 h-10 text-primary flex items-center justify-center mr-4">
              <SuccessTick />
            </div>
          ),
        });
        break;
      case 'success':
        notification.success({
          ...notificationBody,
          icon: (
            <div className="rounded-full w-10 h-10 text-white bg-primary flex items-center justify-center mr-4">
              <SuccessTick />
            </div>
          ),
        });
        break;
      case 'warning':
        notification.warning(notificationBody);
        break;
      default:
        break;
    }
  }, [notificationState.isOpen, onCloseNotification]); //eslint-disable-line react-hooks/exhaustive-deps
}
