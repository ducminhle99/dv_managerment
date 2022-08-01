import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useFormHandler } from '../../hooks';
import { checkFieldErrorHelper } from '../../utilities/validate';
import Container from '../container';
import FormItem from '../form/item';
import MessageErrors from '../msgError';
import { validationSchema } from './validate';

export type FormValue = {
  email: string;
  password: string;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

export default function Login({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { email: '', password: '' },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: submit,
  });
  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  return (
    <Container className="min-h-full min-w-full ml-0 flex items-center justify-center bg-[url('/assets/images/bg_login.jpg')] bg-cover">
      <div className="flex flex-col items-center rounded-md bg-white p-[50px]">
        <img src="/assets/images/hybrid.png" className=" h-[52px] w-auto" alt="logo" />
        <Form onFinish={form.handleSubmit} className="w-[28.25rem] flex flex-col items-center" layout="vertical">
          <FormItem className="mt-[70px] w-full" errorMsg={checkFieldErrorHelper(form, 'email')} label={<p className="text-lg">Email address</p>}>
            <Input
              {...form.register('email')}
              type="email"
              placeholder="Email Address"
              className="mt-[18px] h-[66px] w-full rounded-full  p-5 shadow-md "
            />
          </FormItem>
          <FormItem className="mt-0 w-full p-0" errorMsg={checkFieldErrorHelper(form, 'password')} label={<p className="text-lg">Password</p>}>
            <Input
              {...form.register('password')}
              type="password"
              placeholder="Password"
              className="mt-[18px] h-[66px] w-full rounded-full  p-5 shadow-md "
            />
          </FormItem>
          <MessageErrors message={messageError} className="mb-[20px]" />
          <Button
            loading={loading}
            htmlType="submit"
            disabled={!!messageError}
            type="primary"
            className="mt-0 h-[66px] w-full rounded-full border-none text-[18px] font-bold text-white shadow-md "
          >
            Log in
          </Button>
          <a href="#" className="mt-2 text-[primary] ">
            Forgot your password?
          </a>
        </Form>
      </div>
    </Container>
  );
}
