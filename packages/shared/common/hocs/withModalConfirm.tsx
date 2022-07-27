import { isFunction } from 'lodash';
import { useCallback, useEffect, useState } from 'react';
import ModalConfirmComponent from 'common/components/modalConfirm';

export interface IModalProps {
  message?: any;
  title: string;
  btnOk: string;
  btnCancel: string;
}

export const withModalConfirm =
  (Component: any) =>
  ({ message, title, btnOk, btnCancel }: IModalProps) => {
    const ModalConfirm = (props: any) => {
      const [messageConfirm, setMessageConfirm] = useState('');
      const [btnOKLabel, setBtnOKLabel] = useState('');
      const [btnCancelLabel, setBtnCancelLabel] = useState('');
      const [titleLabel, setTitleLabel] = useState('');
      const [isOpen, setIsOpen] = useState(false);
      const [onConfirm, setOnConfirm] = useState<() => {}>();

      useEffect(() => {
        setTitleLabel(title);
      }, [title]);

      useEffect(() => {
        setMessageConfirm(message);
      }, [message]);

      useEffect(() => {
        setBtnOKLabel(btnOk);
      }, [btnOk]);

      useEffect(() => {
        setBtnCancelLabel(btnCancel);
      }, [btnCancel]);

      const openModal = ({ onConfirmFunc, newMessage, newBtnOk, newBtnCancel, newTitle }: any) => {
        if (newMessage) {
          setMessageConfirm(newMessage);
        }

        if (newBtnOk) {
          setBtnOKLabel(newBtnOk);
        }

        if (newBtnCancel) {
          setBtnCancelLabel(newBtnCancel);
        }

        if (newTitle) {
          setTitleLabel(newTitle);
        }

        setIsOpen(true);

        if (onConfirmFunc) {
          setOnConfirm(() => onConfirmFunc);
        }
      };

      const handleClickOk = useCallback(async () => {
        if (isFunction(onConfirm)) {
          await onConfirm();
        }
        setIsOpen(false);
      }, [setIsOpen, onConfirm]);

      return (
        <>
          <ModalConfirmComponent
            open={isOpen}
            title={titleLabel}
            btnOk={btnOKLabel}
            btnCancel={btnCancelLabel}
            handleSubmit={handleClickOk}
            message={messageConfirm}
            setOpen={setIsOpen}
          />
          <Component {...props} openModalConfirm={openModal} setMessageConfirm={setMessageConfirm} setIsOpenConfirm={setIsOpen} />
        </>
      );
    };

    return ModalConfirm;
  };
