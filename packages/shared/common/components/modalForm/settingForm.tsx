import ModalConfirmComponent from '../modalConfirm';
import { Button, Form } from 'antd';
import { useEffect } from 'react';
import MessageErrors from '../msgError';
import clsx from 'clsx';
import { FormikValues } from 'formik';

export interface Props {
  children: React.ReactNode;
  open: boolean;
  closeModal: (isShow: boolean) => void;
  title: string;
  form: FormikValues;
  messageError: string;
  setMessageError: (message: string) => void;
  styleButton?: string;
  action: string;
  loading: boolean;
}

function SettingForm({ children, open, closeModal, title, form, messageError, setMessageError, styleButton, action, loading }: Props) {
  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  return (
    <ModalConfirmComponent
      open={open}
      title={title}
      setOpen={closeModal}
      body={
        <Form onFinish={form.handleSubmit} colon={false} className="flex flex-col items-center w-[322px] sm:w-full mx-auto">
          {children}
          <MessageErrors message={messageError} className="mb-[20px] w-full" />
          <div className="w-full">
            <Button
              loading={loading}
              htmlType="submit"
              type="primary"
              className={clsx('flex items-center border-md min-w-[102px] h-[40px] rounded-md float-right', styleButton)}
            >
              <p className="text-white font-bold w-full text-center">{action}</p>
            </Button>
          </div>
        </Form>
      }
    />
  );
}

export default SettingForm;
