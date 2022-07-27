import { Button, Form, Input, Select } from 'antd';
import { checkFieldErrorHelper } from 'common/utilities/validate';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import FormItem, { FormItems } from 'common/components/form/item';
import { useEffect } from 'react';
import Container from 'common/components/container';
import Item from './Item';
import { contactPlanLabel } from 'common/constants/companyAccount';
import { DropdownIcon } from 'common/components/icons/dropdownIcon';
import { LeftOutlined } from '@ant-design/icons';
import router from 'next/router';
import Confirm from './confirm';
import { ScreenType } from '../useLogic';
import { setNestedObjectValues } from 'formik';

const { Option } = Select;

interface IPageProps {
  submit: any;
  messageError: string;
  setMessageError: any;
  loading: boolean;
  screen: ScreenType;
  setScreen: any;
  addressHandler: {
    address: string;
    loadingAddress: boolean;
    handleGetAddress: (address: any, callBack: any) => {};
  };
}

export type FormCompanyRegister = {
  contractType: number | string;
  companyName: string;
  postCode: number;
  address: string;
  subAddress: string;
  phone1: string;
  phone2: string;
  phone3: string;
  position: string;
  email: string;
  firstName: string;
  lastName: string;
  captchaToken: string;
};

export default function Register({ submit, messageError, setMessageError, loading, screen, setScreen, addressHandler }: IPageProps) {
  const form = useFormHandler<FormCompanyRegister>(
    {
      initialValues: {
        contractType: '',
      } as any,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: submit,
    },
    { isShowConfirmChanged: true }
  );

  const handleSwitchScreen = async () => {
    const validationErrors = await form.validateForm();
    if (Object.keys(validationErrors).length > 0) {
      form.setTouched(setNestedObjectValues(validationErrors, true));
      addressHandler;
      return;
    }
    setScreen(ScreenType.CONFIRM);
  };

  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  if (screen === ScreenType.CONFIRM) {
    return <Confirm form={form} setScreen={setScreen} loading={loading} messageError={messageError} />;
  }

  const handleChangeZipCode = async () => {
    await form.setFieldValue('address', '');
    form.setFieldError('address', undefined);
    form.setFieldTouched('address', false);
  };

  return (
    <Container className="flex justify-center pt-36">
      <Form
        onFinish={form.handleSubmit}
        className="px-[2.375rem] py-10 border border-solid rounded border-gray bg-white w-[53.125rem] min-h-[66.188rem]"
      >
        <Button type="text" className="px-0 py-0 hover:bg-transparent h-auto min-h-0 mb-5" onClick={() => router.push('/login')}>
          <div className="flex item-center justify-center">
            <LeftOutlined className="text-sm mt-[1px]" /> <p className="ml-2 text-sm font-bold">ログイン画面に戻る</p>
          </div>
        </Button>

        <div className="text-2xl font-bold flex justify-center mx-4 border-0 border-b border-gray-200 border-solid mb-11">
          <h1 className="pb-11 text-2xl text-black-lighter-2 font-bold">アカウント登録申請</h1>
        </div>

        <Item title="会社名" required>
          <FormItem errorMsg={checkFieldErrorHelper(form, 'companyName')}>
            <Input {...form.register('companyName')} placeholder="株式会社〇〇〇〇" className="w-full max-w-[29.48rem]" />
          </FormItem>
        </Item>

        <Item title="住所" required>
          <div className="flex flex-wrap gap-5">
            <FormItem errorMsg={checkFieldErrorHelper(form, 'postCode') || checkFieldErrorHelper(form, 'address', addressHandler.loadingAddress)}>
              <div className="flex gap-5">
                <Input
                  {...form.register('postCode')}
                  onChange={(e) => {
                    form.setFieldValue('postCode', e.target.value, true);
                    setTimeout(handleChangeZipCode);
                  }}
                  maxLength={7}
                  placeholder="〒"
                  className="w-full max-w-[7.375rem] block"
                />
                <Button
                  className="btn-black h-[48px] flex items-center"
                  onClick={() =>
                    addressHandler.handleGetAddress(form.values.postCode, (newAddress: any) => {
                      form.setFieldValue('address', newAddress);
                      form.setTouched({ ...form.touched, address: true });
                    })
                  }
                >
                  <p className="text-white text-sm">住所自動入力</p>
                </Button>
              </div>
            </FormItem>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium">例: 1234567（半角数字）</p>
              <p className="text-sm font-medium"> -（ハイフン）なしでご入力ください。</p>
            </div>
          </div>
          <Input
            {...form.register('address')}
            placeholder="〇〇県〇〇市〇〇町"
            className="w-full max-w-[29.48rem] mt-5 bg-white text-[#000000a6]"
            disabled
          />
          <FormItem errorMsg={checkFieldErrorHelper(form, 'subAddress')}>
            <Input {...form.register('subAddress')} placeholder="1-2-3 〇〇ビル3階" className="w-full max-w-[29.48rem] mt-5" />
          </FormItem>
        </Item>

        <Item title="連絡先番号" required>
          <FormItems
            errorMsg={checkFieldErrorHelper(form, 'phone1') || checkFieldErrorHelper(form, 'phone2') || checkFieldErrorHelper(form, 'phone3')}
          >
            <div className="flex items-center gap-3">
              <Form.Item validateStatus={checkFieldErrorHelper(form, 'phone1') && 'error'}>
                <Input maxLength={3} placeholder="01" {...form.register('phone1')} className="w-full max-w-[4.375rem]" />
              </Form.Item>
              <div className="h-[1px] bg-[#707070] w-[13px] flex-shrink-0" />
              <Form.Item validateStatus={checkFieldErrorHelper(form, 'phone2') && 'error'}>
                <Input maxLength={4} placeholder="2345" {...form.register('phone2')} className="w-full max-w-[5.625rem]" />
              </Form.Item>
              <div className="h-[1px] bg-[#707070] w-[13px] flex-shrink-0" />
              <Form.Item validateStatus={checkFieldErrorHelper(form, 'phone3') && 'error'}>
                <Input maxLength={4} placeholder="6789" {...form.register('phone3')} className="w-full max-w-[5.625rem]" />
              </Form.Item>
            </div>
          </FormItems>
        </Item>

        <Item title="メールアドレス" required>
          <FormItem errorMsg={checkFieldErrorHelper(form, 'email')}>
            <Input placeholder="メールアドレスを入力してください" {...form.register('email')} className="w-full max-w-[14rem]" />
          </FormItem>
        </Item>

        <Item title="役職">
          <FormItem errorMsg={checkFieldErrorHelper(form, 'position')}>
            <Input {...form.register('position')} className="w-full max-w-[14rem]" />
          </FormItem>
        </Item>

        <Item title="氏名" required>
          <FormItems errorMsg={checkFieldErrorHelper(form, 'firstName') || checkFieldErrorHelper(form, 'lastName')}>
            <div className="flex items-center gap-7">
              <Form.Item validateStatus={checkFieldErrorHelper(form, 'firstName') && 'error'}>
                <Input placeholder="姓" {...form.register('firstName')} className="w-full max-w-[14rem]" />
              </Form.Item>
              <Form.Item validateStatus={checkFieldErrorHelper(form, 'lastName') && 'error'}>
                <Input placeholder="名" {...form.register('lastName')} className="w-full max-w-[14rem]" />
              </Form.Item>
            </div>
          </FormItems>
        </Item>

        <Item title="ご契約プラン" required>
          <FormItem errorMsg={checkFieldErrorHelper(form, 'contractType')}>
            <Select
              placeholder="---　選択してください　---"
              {...form.register('contractType')}
              suffixIcon={<DropdownIcon />}
              className="w-full max-w-[26.875rem]"
            >
              <Option key={0} value="">
                ---　選択してください　---
              </Option>
              {Object.keys(contactPlanLabel).map((item, index) => (
                <Option key={index + 1} value={item}>
                  {contactPlanLabel[Number(item)]}
                </Option>
              ))}
            </Select>
          </FormItem>
        </Item>
        <div className="flex justify-center pb-10">
          <Button
            onClick={() => router.replace('/login')}
            className="mt-10 h-11 btn-primary w-full  max-w-[225px] flex items-center justify-center text-black-lighter-2 bg-white border-black-lighter-3 hover:border-pink hover:bg-pink-50 hover:text-pink"
          >
            <span className="text-lg font-bold">キャンセル</span>
          </Button>
          <Button onClick={handleSwitchScreen} className="mt-10 h-11 btn-primary w-full  max-w-[225px] flex items-center justify-center ml-7">
            <p className="text-white font-bold text-lg">確認画面に進む</p>
          </Button>
        </div>
      </Form>
    </Container>
  );
}
