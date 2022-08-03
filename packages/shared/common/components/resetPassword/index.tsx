import { Input, Form, Button } from 'antd';
import { useEffect } from 'react';
import { useFormHandler } from '../../hooks';
import FormItem from '../form/item';
import MessageErrors from '../msgError';
import { validationSchema } from './validate';

export type FormValue = {
  email: string;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
  btnStatus: boolean;
}

function ResetPassword({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { email: '' },
    validationSchema,
    onSubmit: (data) => {
      submit(data);
    },
  });

  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  return (
    <div className="w-full h-full bg-cover center bg-[url('/assets/images/bg_login.jpg')] flex items-center justify-center min-w-[800px]">
      <Form colon={false} onFinish={form.handleSubmit} className="bg-white p-[50px] rounded-[6px] flex flex-col w-[546px]">
        <img src="/assets/images/hybrid.png" alt="logo" className="h-[52px] w-[182px] pt-[2px] mb-[70px] mx-auto" />
        <Input.Group>
          <FormItem
            errorMsg={form.errors.email}
            htmlFor="email_reset_pass"
            className="block"
            label={<span className="font-medium text-lg leading-5 text-[18px]">Email address</span>}
          >
            <Input
              {...form.register('email')}
              id="email_reset_pass"
              placeholder="Email address"
              className="w-full h-[66px] py-6 pl-5 rounded-[46px] shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[18px]"
            />
          </FormItem>
        </Input.Group>
        <MessageErrors message={messageError} className="mb-[20px]" />
        <Button
          loading={loading}
          htmlType="submit"
          type="primary"
          className="mt-[4px] rounded-[46px] text-center w-full border-none shadow-[0px_8px_22px_rgba(74,58,255,0.26)] text-white h-[66px] text-lg font-bold"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ResetPassword;
