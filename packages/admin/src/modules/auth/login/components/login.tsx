import { Input, Form, Button, Checkbox, Typography } from 'antd';
import Link from 'next/link';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import FormItem from 'common/components/form/item';
import { useEffect } from 'react';
import { checkFieldErrorHelper } from 'common/utilities/validate';
import Container from 'common/components/container';

export type FormValue = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

function Login({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { email: '', password: '', rememberMe: false },
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
    <Container className="min-h-full flex items-center justify-center">
      <div className="bg-white px-48 py-24 flex flex-col rounded-md border border-solid border-[#CCCCCC]">
        <Form className="w-[28.25rem] flex flex-col" onFinish={form.handleSubmit} layout="vertical">
          <FormItem
            className="mb-9"
            label={<Typography className="text-lg text-black-lighter-2">メールアドレス</Typography>}
            errorMsg={checkFieldErrorHelper(form, 'email')}
          >
            <Input {...form.register('email')} className="text-base h-[3.375rem]" placeholder="メールアドレスを入力してください" />
          </FormItem>
          <FormItem
            className="mb-1 "
            label={<Typography className="text-lg text-black-lighter-2">パスワード</Typography>}
            errorMsg={checkFieldErrorHelper(form, 'password')}
          >
            <Input.Password
              {...form.register('password')}
              className="m-input-password h-[3.375rem]"
              placeholder="パスワードを入力してください"
              iconRender={(visible) =>
                visible ? <img alt="eye" src="/assets/images/eye-light.png" /> : <img alt="eye" src="/assets/images/eye-dark.png" />
              }
            />
          </FormItem>
          <Link href="/reset-password">
            <a className="text-black-lighter-2 self-end underline text-sm">パスワードをお忘れの方</a>
          </Link>
          <div className="mt-12 flex flex-col mb-3">
            {messageError && <p className="pb-[10px] error-msg whitespace-nowrap">{messageError}</p>}
            <Button
              loading={loading}
              htmlType="submit"
              className="h-[3.375rem] btn-primary text-lg rounded-sm"
              disabled={!form.dirty || !!messageError}
            >
              ログイン
            </Button>
          </div>
          <Checkbox {...form.register('rememberMe', { nameOfValueProps: 'checked' })} className="self-center">
            <Typography className="text-sm text-black-lighter-2">ログイン状態を保持する</Typography>
          </Checkbox>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
