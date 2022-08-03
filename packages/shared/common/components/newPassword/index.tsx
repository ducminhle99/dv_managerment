import FormItem from '../form/item';
import { Input, Form, Button } from 'antd';
import { useFormHandler } from '../../hooks';
import { validationSchema } from './validate';
import { useEffect } from 'react';
import { checkFieldErrorHelper } from '../../utilities/validate';
import MessageErrors from '../msgError';

export type FormValue = {
  password: string;
  passwordConfirmation: string;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

function NewPassword({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { password: '', passwordConfirmation: '' },
    validateOnChange: true,
    validateOnBlur: false,
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
    <div className="w-full h-full bg-cover bg-[url('/assets/images/bg_login.jpg')] flex items-center justify-center min-w-[800px]">
      <Form colon={false} onFinish={form.handleSubmit} className="bg-white p-[50px] rounded-[6px] flex flex-col w-[546px]">
        <img src="/assets/images/hybrid.png" alt="logo" className="h-[52px] w-[182px] pt-[2px] mb-[70px] mx-auto" />
        <Input.Group>
          <FormItem
            errorMsg={checkFieldErrorHelper(form, 'password')}
            htmlFor="new_password_reset_pass"
            className="block"
            label={<span className="font-medium text-lg leading-5 text-[18px]">New Password</span>}
          >
            <Input.Password
              {...form.register('password')}
              id="new_password_reset_pass"
              placeholder="New Password"
              className="w-full h-[66px] py-6 pl-5 rounded-[46px] boder-[1px] outline-none shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[18px]"
            />
          </FormItem>
        </Input.Group>
        <Input.Group>
          <FormItem
            errorMsg={checkFieldErrorHelper(form, 'passwordConfirmation')}
            htmlFor="confirm_password_reset_pass"
            className="block"
            label={<span className="font-medium text-lg leading-5 text-[18px]">Confirm Password</span>}
          >
            <Input.Password
              {...form.register('passwordConfirmation')}
              id="confirm_password_reset_pass"
              placeholder="Confirm Password"
              className="w-full h-[66px] py-6 pl-5 rounded-[46px] boder-[1px] outline-none shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[18px]"
            />
          </FormItem>
        </Input.Group>
        <MessageErrors message={messageError} className="mb-[20px]" />
        <Button
          loading={loading}
          htmlType="submit"
          className="hover:bg-[#01579b] mt-[4px] rounded-[46px] bg-[#439BE5] text-center w-full border-none shadow-[0px_8px_22px_rgba(74,58,255,0.26)] text-white h-[66px] text-lg font-bold"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default NewPassword;
