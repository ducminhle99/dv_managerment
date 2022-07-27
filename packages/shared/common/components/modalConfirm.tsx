import React from 'react';
import { Button, Modal } from 'antd';
import clsx from 'clsx';

export interface ModalProps {
  open: boolean;
  title?: string;
  btnOk: string;
  btnCancel?: string;
  handleSubmit: any;
  message: string;
  setOpen: any;
  closable?: boolean;
  body?: any;
}

const ModalConfirm = ({ open, title, btnOk, btnCancel, handleSubmit, message, setOpen, closable = true, body }: ModalProps) => {
  return (
    <>
      <Modal
        visible={open}
        bodyStyle={{ padding: '0px' }}
        className="width-unset flex  justify-center sm:overflow-hidden sm:rounded-sm"
        maskClosable={false}
        closable={closable}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <div className="py-16 px-9 sm:px-2 min-w-[500px] sm:min-w-0 sm:max-w-[100vw] sm:overflow-hidden">
          <div className="min-w-[40rem] sm:min-w-full sm:px-5 flex flex-col">
            {title && (
              <>
                <p className="text-center text-2xl font-bold">{title}</p>
                <div className="h-[1px] bg-[#CCCCCC] mt-7" />
              </>
            )}
            <p className={clsx('whitespace-pre text-center text-lg sm:whitespace-normal', { 'mt-9': title })}>{message}</p>
            {body}
            <div className={clsx('flex mt-9 self-center', { 'mt-12': !!!title })}>
              {btnCancel && (
                <Button
                  className="w-64 font-bold text-[18px] hover:bg-primary-light-500 text-black-lighter-2 hover:text-primary sm:w-auto"
                  onClick={() => setOpen(false)}
                >
                  {btnCancel}
                </Button>
              )}{' '}
              {btnOk && (
                <Button className="w-64 btn-primary ml-6 font-bold text-[18px] sm:w-32" onClick={handleSubmit}>
                  {btnOk}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalConfirm;
