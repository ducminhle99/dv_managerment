import { DatePicker, Form, Image, Input, Upload } from 'antd';
import clsx from 'clsx';
import { ButtonBack, ButtonCancel, ButtonRemove, ButtonSave, ButtonUpdate } from 'common/components/buttons';
import Container from 'common/components/container';
import FormItem from 'common/components/form/item';
import { UserProfileDto } from 'common/dto/response';
import { useFormHandler } from 'common/hooks';
import { checkFieldErrorHelper } from 'common/utilities/validate';
import moment from 'moment';
import { useEffect, useState } from 'react';
import validationSchema from './validate';

export type FormValues = {
  avatar: string | File;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: number;
  userCode: string;
  dayOfBirth: any;
  position: string;
};

export interface Props {
  submit: (data: UserProfileDto) => void;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => void;
  userProfiledata: UserProfileDto;
}

const ProfileComponent = ({ submit, loading, messageError, setMessageError, userProfiledata }: Props) => {
  const [isShowFormEdit, setIsShowFormEdit] = useState<boolean>(false);
  const [isAvatarFile, setIsAvatarFile] = useState<boolean>(false);

  const form = useFormHandler<FormValues>({
    initialValues: userProfiledata,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: submit,
  });
  const { errors, values, handleChange } = form;
  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  const handleEditProfile = () => {
    setIsShowFormEdit(true);
  };
  const handleCancel = () => {
    setIsShowFormEdit(false);
  };
  return (
    <Container title="USER PROFILE" className="pb-20" rootClassName="mt-[126px] max-w-7xl">
      <Form layout="vertical" onFinish={form.handleSubmit}>
        <div className="flex flex-wrap bg-while-light-1 border border-solid border-gray-darker-2 rounded-[6px] box-border max-w-[896px] min-h-[846px] py-[50px] px-[46px] mt-[48px]  m-auto ">
          <div className="w-[40%] h-full justify-center flex">
            <FormItem label="" valuePropName="fileList">
              <Image
                width={225}
                height={195}
                alt={values.firstName}
                src={isAvatarFile ? URL.createObjectURL(values?.avatar as File) : (values?.avatar as string)}
              />

              <p className="items-center justify-center flex text-[24px] font-medium">Profile photo</p>
              {!isShowFormEdit && (
                <>
                  <ButtonUpdate
                    title="Edit Profile"
                    handleUpdate={handleEditProfile}
                    titleClassName="text-white"
                    isDisabled={isShowFormEdit}
                    className="bg-orange-light-3 border-orange-light-3 hover:bg-orange-light-4 w-[225px]  mt-[25px] justify-center "
                  />

                  <ButtonUpdate
                    title="Change Password"
                    titleClassName="text-white"
                    isDisabled={isShowFormEdit}
                    className="bg-orange-light-3 border-orange-light-3 hover:bg-orange-light-4 w-[225px]  mt-[23px] justify-center "
                  />
                </>
              )}
            </FormItem>
          </div>
          <div className="w-[60%] h-full">
            <p className="text-while-light-1 mt-[83px]">Your photo should be in PNG or JPG format</p>
            <div className="flex mt-[48px]">
              <Upload
                name="avatar"
                beforeUpload={(e) => {
                  form.setFieldValue('avatar', e);
                  setIsAvatarFile(true);
                  return Upload.LIST_IGNORE;
                }}
                showUploadList={false}
                accept=".png,.jpeg"
              >
                <ButtonUpdate
                  title="Choose image"
                  titleClassName={clsx({ 'text-while-light-2': !isShowFormEdit }, { 'text-white': isShowFormEdit })}
                  isDisabled={!isShowFormEdit}
                  className={clsx('max-w-[123px]  justify-center ', {
                    'bg-orange-light-3 border-orange-light-3 hover:bg-orange-light-4': isShowFormEdit,
                  })}
                />
              </Upload>
              <ButtonRemove
                title="Remove"
                titleClassName={clsx({ 'text-while-light-2': !isShowFormEdit }, { 'text-white': isShowFormEdit })}
                isDisabled={!isShowFormEdit}
                handleDelete={() => form.setFieldValue('avatar', '')}
                className={clsx('max-w-[123px] pl-7  justify-center ml-[89px]', {
                  'bg-orange-light-3 border-orange-light-3 hover:bg-orange-light-4 ': isShowFormEdit,
                })}
              />
            </div>
            <div className="flex mt-[30px]">
              <FormItem className="font-medium" label="First name" errorMsg={checkFieldErrorHelper(form, 'firstName')}>
                {!isShowFormEdit ? (
                  <p className="font-normal text-gray-darker">{userProfiledata.firstName}</p>
                ) : (
                  <Input
                    {...form.register('firstName')}
                    name="firstName"
                    className={clsx('max-w-[200px] text-gray-darker border', { 'border border-solid border-primary-light-600': errors.firstName })}
                    onChange={handleChange}
                    value={values.firstName}
                    disabled={!isShowFormEdit}
                  />
                )}
              </FormItem>
              <FormItem
                label="Last name"
                errorMsg={checkFieldErrorHelper(form, 'lastName')}
                className={clsx('ml-7  font-medium', { 'ml-[150px]': !isShowFormEdit })}
              >
                {!isShowFormEdit ? (
                  <p className="font-normal text-gray-darker">{userProfiledata.lastName}</p>
                ) : (
                  <Input
                    {...form.register('lastName')}
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                    className={clsx('max-w-[200px] text-gray-darker border', { 'border border-solid border-primary-light-600': errors.lastName })}
                    disabled={!isShowFormEdit}
                  />
                )}
              </FormItem>
            </div>
            <FormItem label="Email" errorMsg={checkFieldErrorHelper(form, 'email')} className=" font-medium ">
              {!isShowFormEdit ? (
                <p className="font-normal text-gray-darker">{userProfiledata.email}</p>
              ) : (
                <Input
                  {...form.register('email')}
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  className={clsx('max-w-[435px] text-gray-darker border', { 'border border-solid border-primary-light-600': errors.email })}
                  disabled={!isShowFormEdit}
                />
              )}
            </FormItem>
            <FormItem className="font-medium" label="Address" errorMsg={checkFieldErrorHelper(form, 'address')}>
              {!isShowFormEdit ? (
                <p className="font-normal text-gray-darker">{userProfiledata.address}</p>
              ) : (
                <Input
                  {...form.register('address')}
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                  className={clsx('max-w-[435px] text-gray-darker border', { 'border border-solid border-primary-light-600': errors.address })}
                  disabled={!isShowFormEdit}
                />
              )}
            </FormItem>
            <FormItem className="font-medium" label="Phone number" errorMsg={checkFieldErrorHelper(form, 'phoneNumber')}>
              {!isShowFormEdit ? (
                <p className="font-normal text-gray-darker">{userProfiledata.phoneNumber}</p>
              ) : (
                <Input
                  {...form.register('phoneNumber')}
                  name="phoneNumber"
                  onChange={handleChange}
                  value={values.phoneNumber}
                  className={clsx('max-w-[435px] text-gray-darker border', { 'border border-solid border-primary-light-600': errors.phoneNumber })}
                  disabled={!isShowFormEdit}
                />
              )}
            </FormItem>
            <FormItem className="font-medium" label="User-code" errorMsg={checkFieldErrorHelper(form, 'userCode')}>
              <p className="font-normal text-gray-darker">{userProfiledata.userCode}</p>
            </FormItem>
            <FormItem className="font-medium" label="Day of birth">
              {!isShowFormEdit ? (
                <p className="font-normal text-gray-darker">{userProfiledata.dayOfBirth}</p>
              ) : (
                <DatePicker
                  name="dayOfBirth"
                  format={'DD-MM-YYYY'}
                  onChange={(e, date) => form.setFieldValue('dayOfBirth', date)}
                  defaultValue={moment(values.dayOfBirth)}
                  className={clsx('max-w-[435px] text-gray-darker')}
                  disabled={!isShowFormEdit}
                />
              )}
            </FormItem>
            <FormItem className="font-medium" label="Position">
              <p className="font-normal text-gray-darker">{userProfiledata.position}</p>
            </FormItem>
            <div className="flex">
              {isShowFormEdit && (
                <ButtonSave
                  loading={loading}
                  title="Save"
                  titleClassName={clsx({ 'text-white': isShowFormEdit })}
                  isDisabled={!isShowFormEdit}
                  className={clsx('bg-orange-light-3 border-orange-light-3 hover:bg-orange-light-4 w-[103px]   mt-[23px]  justify-center pl-7 ')}
                />
              )}
              {isShowFormEdit ? (
                <ButtonCancel
                  handleCancel={handleCancel}
                  title="Cancel"
                  className={clsx('w-[103px]  mt-[23px]  justify-center bg-white shadow ml-7 pl-7')}
                />
              ) : (
                <ButtonBack
                  title="Back"
                  className={clsx(
                    'w-[103px]  mt-[23px]  justify-center  py-[10px]',
                    {
                      ' bg-orange-light-3 border-orange-light-3 hover:bg-orange-light-3': !isShowFormEdit,
                    },
                    {
                      ' bg-white shadow ml-7 ': isShowFormEdit,
                    }
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </Form>
    </Container>
  );
};

export default ProfileComponent;
