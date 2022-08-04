import { Input, Form, Button } from 'antd';
import Link from 'next/link';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import FormItem from 'common/components/form/item';
import { useEffect } from 'react';
import Container from 'common/components/container';
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

function ResetPassword({ submit, loading, messageError, setMessageError, btnStatus }: Props) {
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
    <Container className="min-h-full flex items-center justify-center">
      <div className="bg-white px-48 pt-[4.6rem] pb-24 flex flex-col rounded-md border border-solid border-[#CCCCCC]">
        <Form className="w-[28.25rem] flex flex-col" onFinish={form.handleSubmit} layout="vertical">
          <h1 className="text-2xl font-bold text-black-lighter-2">パスワードをお忘れの方</h1>
          <p className="mt-8 text-lg">ご登録のメールアドレスを入力してください。 </p>
          <p className="text-lg">パスワード再設定用のURLをメールにて送信します。 </p>

          <FormItem label={<span className="text-lg text-black-lighter-2">メールアドレス</span>} errorMsg={form.errors.email} className="mt-10">
            <Input {...form.register('email')} className="text-base h-[3.375rem]" placeholder="メールアドレスを入力してください" />
          </FormItem>

          <div className="mt-12 flex flex-col">
            {messageError && <p className="pb-[10px] error-msg">{messageError}</p>}
            <Button loading={loading} htmlType="submit" disabled={!form.dirty || btnStatus} className="btn-primary text-lg h-[3.375rem] rounded-sm">
              送信
            </Button>
          </div>

          <Link href="/login">
            <a className=" text-black-lighter-2 self-center underline mt-8 text-sm">ログイン画面に戻る</a>
          </Link>
        </Form>
      </div>
    </Container>
  );
}

export default ResetPassword;
