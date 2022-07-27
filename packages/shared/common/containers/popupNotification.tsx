import ModalConfirmComponent from 'common/components/modalConfirm';
import { useSelector } from '../hooks';
import { useDispatch } from 'react-redux';
import { logout, setPopupNotification } from 'store/actions';
import Router from 'next/router';

const PopupNotification = () => {
  const popupNotification = useSelector((state) => state.app.popupNotification);
  const dispatch = useDispatch();

  const handleRedirect = () => {
    const currentPathURL = Router.pathname;
    const currentPathURLs = currentPathURL.split('/');
    if (currentPathURLs.length > 1) {
      Router.push(`/${currentPathURLs[1]}`);
    } else {
      Router.back();
    }
  };

  const handleClickOk = () => {
    switch (popupNotification.actionString) {
      case 'logout':
        dispatch(logout());
        break;
      case 'redirect':
        handleRedirect();
        break;
    }
    dispatch(setPopupNotification({ actionString: '', isOpen: false, message: '', title: '' }));
  };

  const handleClose = () => {
    dispatch(setPopupNotification({ actionString: '', isOpen: false, message: '', title: '', body: '', btnOk: 'OK', closable: false }));
  };

  return (
    <ModalConfirmComponent
      open={popupNotification.isOpen}
      title={popupNotification.title}
      btnOk={popupNotification.btnOk as any}
      handleSubmit={handleClickOk}
      message={popupNotification.message}
      setOpen={handleClose}
      closable={!!popupNotification.closable}
      body={popupNotification.body}
    />
  );
};

export default PopupNotification;
