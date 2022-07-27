import { Button } from 'antd';
import Container from 'common/components/container';
import Item from './Item';
import { FormCompanyRegister } from '.';
import { ScreenType } from '../useLogic';
import { contactPlanLabel } from 'common/constants/companyAccount';
import ReCAPTCHA from 'react-google-recaptcha';
import { appConfig } from '@configs/app';
import { useState } from 'react';

interface IPageProps {
  submit?: any;
  messageError?: string;
  loading?: boolean;
  form: any;
  setScreen: any;
}

export default function Confirm({ loading, form, setScreen, messageError }: IPageProps) {
  const {
    companyName,
    address,
    contractType,
    email,
    firstName,
    lastName,
    phone1,
    phone2,
    phone3,
    position,
    postCode,
    subAddress,
  }: FormCompanyRegister = form.values;

  const [isCheck, setCheck] = useState<boolean>(false);

  const handleChange = (value: string | null) => {
    if (value !== null) {
      form.setFieldValue('captchaToken', value);
      setCheck(true);
      return;
    }

    form.setFieldValue('captchaToken', '');
    setCheck(false);
  };

  return (
    <Container className="flex justify-center pt-36">
      <div className="px-[2.375rem]  h-[66.188rem] w-[53.125rem] py-10 border border-solid rounded border-gray bg-white">
        <div className="text-2xl font-bold flex justify-center mx-4 border-0 border-b border-gray-200 border-solid mb-11">
          <h1 className="pb-11 text-2xl font-bold">アカウント登録申請</h1>
        </div>

        <Item title="会社名">{companyName}</Item>
        <Item title="住所">
          〒{String(postCode).slice(0, 3)}-{String(postCode).slice(3)}　{address}
          {subAddress}
        </Item>
        <Item title="連絡先番号">
          {phone1}-{phone2}-{phone3}
        </Item>
        <Item title="メールアドレス">{email}</Item>
        <Item title="役職">{position}</Item>
        <Item title="氏名">
          {firstName} {lastName}
        </Item>
        <Item title="ご契約プラン">{contactPlanLabel[Number(contractType)]}</Item>
        {messageError && <p className="pb-[10px] error-msg whitespace-nowrap">{messageError}</p>}
        <div className="flex justify-center">
          <ReCAPTCHA theme="light" sitekey={appConfig.captchaKey} onChange={(e) => handleChange(e)} />
        </div>

        <div className="flex justify-center pb-10">
          <Button
            onClick={() => setScreen(ScreenType.FORM)}
            className="mt-10 h-11 btn-primary w-full  max-w-[225px] flex items-center justify-center text-black-lighter-2 bg-white border-black-lighter-3 hover:border-pink hover:bg-pink-50 hover:text-pink"
          >
            <span className="text-lg font-bold">戻って内容を修正する</span>
          </Button>
          <Button
            loading={loading}
            onClick={() => form.handleSubmit()}
            className="mt-10 h-11 btn-primary w-full  max-w-[225px] flex items-center justify-center ml-7"
            disabled={!isCheck || !form.dirty || !!messageError}
          >
            <p className="text-white text-lg font-bold">送　信</p>
          </Button>
        </div>
      </div>
    </Container>
  );
}
