import FormItem from '../form/item';
import { Input, Form, Button } from 'antd';
import { useFormHandler } from '../../hooks';
import { validationSchema } from './validate';
import { useEffect } from 'react';
import MessageErrors from '../msgError';
import Container from '../container';
export type FormValue = {
  password: string;
  newPassword: string;
  passwordConfirmation: string;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

function ChangePassword({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { password: '', newPassword: '', passwordConfirmation: '' },
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
    <Container className="px-[54px] pt-[74px]" title="CHANGE PASSWORD">
      <Form
        colon={false}
        onFinish={form.handleSubmit}
        className="rounded-[6px] mt flex flex-col mx-auto w-[400px] p-[30px] mt-12 shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-[#dddddd] border border-solid"
      >
        <Input.Group>
          <FormItem
            errorMsg={form.errors.password}
            className="block"
            label={<span className="font-bold text-lg leading-5 text-[18px]">Old Password</span>}
          >
            <Input.Password
              {...form.register('password')}
              placeholder="Current Password"
              className="w-full border border-[dddddd] shadow-none text-[14px] h-[32px] rounded-md"
            />
          </FormItem>
        </Input.Group>
        <Input.Group>
          <FormItem
            errorMsg={form.errors.newPassword}
            className="block"
            label={<span className="font-bold text-lg leading-5 text-[18px]">New Password</span>}
          >
            <Input.Password
              {...form.register('newPassword')}
              placeholder="New Password"
              className="w-full border border-[dddddd] shadow-none text-[14px] h-[32px] rounded-md"
            />
          </FormItem>
        </Input.Group>
        <Input.Group>
          <FormItem
            errorMsg={form.errors.passwordConfirmation}
            className="block"
            label={<span className="font-bold text-lg leading-5 text-[18px]">Confirm Password</span>}
          >
            <Input.Password
              {...form.register('passwordConfirmation')}
              placeholder="Confirm Password"
              className="w-full border border-[dddddd] shadow-none text-[14px] h-[32px] rounded-md"
            />
          </FormItem>
        </Input.Group>
        <MessageErrors message={messageError} className="mb-[20px]" />
        <Button
          loading={loading}
          htmlType="submit"
          className=" mt-[4px] bg-secondary hover:bg-secondary-strong bg-rounded-md text-center w-full border-none shadow-md text-white h-[66px] text-lg font-bold"
        >
          Update
        </Button>
      </Form>
    </Container>
  );
}

export default ChangePassword;
