import { Input, Form, Button } from 'antd';
import Link from 'next/link';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import FormItem from 'common/components/form/item';
import { useEffect } from 'react';
import { checkFieldErrorHelper } from 'common/utilities/validate';
import Container from 'common/components/container';

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

function InputPassword({ submit, loading, messageError, setMessageError }: Props) {
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
    <Container className="min-h-full flex items-center justify-center">
      <div className="bg-white xl:py-16 xl:px-32 py-[5.875rem] px-40 flex flex-col rounded-md border border-solid border-[#CCCCCC]">
        <Form className="w-[25rem] flex flex-col" onFinish={form.handleSubmit} layout="vertical">
          <h1 className="text-2xl font-bold">パスワード再設定</h1>
          <p className="mb-[52px] mt-3 text-lg">新しいパスワードを作成してください。</p>
          <FormItem label={<span className="text-lg">新しいパスワード</span>} errorMsg={checkFieldErrorHelper(form, 'password')}>
            <Input.Password
              className=" text-base"
              {...form.register('password')}
              placeholder="パスワードを入力してください"
              iconRender={(visible) =>
                visible ? <img alt="eye" src="/assets/images/eye-light.png" /> : <img alt="eye" src="/assets/images/eye-dark.png" />
              }
            />
          </FormItem>

          <p className="mt-3 text-sm font-black">6文字以上30文字以内の半角英数字</p>
          <p className="text-sm">※英小文字・英大文字・数字をそれぞれ1文字以上含む</p>

          <FormItem
            label={<span className="text-lg">新しいパスワード(確認)</span>}
            errorMsg={checkFieldErrorHelper(form, 'passwordConfirmation')}
            className="mt-8"
          >
            <Input.Password
              className=" text-base"
              {...form.register('passwordConfirmation')}
              placeholder="パスワードを入力してください"
              iconRender={(visible) =>
                visible ? <img alt="eye" src="/assets/images/eye-light.png" /> : <img alt="eye" src="/assets/images/eye-dark.png" />
              }
            />
          </FormItem>

          <div className="mt-10 flex flex-col mb-12">
            {messageError && <p className="pb-[10px] error-msg">{messageError}</p>}

            <Button loading={loading} htmlType="submit" disabled={!form.dirty} className="btn-primary">
              <span className="text-lg">新しいパスワードを設定</span>
            </Button>
          </div>
          <Link href="/login">
            <a className="text-[#172B4D] self-center underline text-sm">ログイン画面に戻る</a>
          </Link>
        </Form>
      </div>
    </Container>
  );
}

export default InputPassword;
