import { Form, Image, Input, InputNumber, Select, Upload } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import clsx from 'clsx';
import { ButtonCreate, ButtonUpdate } from 'common/components/buttons';
import Container from 'common/components/container';
import FormItem from 'common/components/form/item';
import { DeviceCreateDto } from 'common/dto/request';
import { useFormHandler } from 'common/hooks';
import { checkFieldErrorHelper } from 'common/utilities/validate';
import { useState } from 'react';
import DeviceSchema from '../validate';

export type FormValues = {
  deviceId?: number;
  image: string | File;
  name: string;
  quantity: number;
  brandID: number;
  categoryID: number;
  description?: string;
};
export type BrandDto = {
  id: number;
  name: string;
}[];
export type CategoryDto = {
  id: number;
  name: string;
}[];
export interface Props {
  submit: (data: DeviceCreateDto) => void;
  brandData: BrandDto;
  categoryData: CategoryDto;
  data: DeviceCreateDto;
  loading: boolean;
}

function Index({ submit, data, brandData, categoryData }: Props) {
  const [isImageFile, setIsImageFile] = useState<boolean>(false);

  const form = useFormHandler<FormValues>({
    initialValues: data,
    validationSchema: DeviceSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: submit,
  });
  const { errors, values, handleChange } = form;

  return (
    <Container title="ADD DEVICE" className="pb-20" rootClassName="mt-[126px] max-w-7xl">
      <Form layout="horizontal" labelCol={{ span: 7 }}>
        <div className=" flex flex-col m-auto items-center sm:flex-col bg-[#FFFFFF] border border-solid border-[#979797] rounded-[6px] box-border max-w-[896px] min-h-[846px] py-[50px] px-[46px] mt-[48px]   ">
          <FormItem label="" valuePropName="fileList">
            <div className="flex flex-col items-center">
              <p className="font-bold mb-[10px]">Device Image</p>
              <Image width={225} height={195} src={isImageFile ? URL.createObjectURL(values?.image as File) : (values?.image as string)} alt="" />
              <Upload
                name="image"
                beforeUpload={(e) => {
                  form.setFieldValue('image', e);
                  setIsImageFile(true);
                  return Upload.LIST_IGNORE;
                }}
                showUploadList={false}
                accept=".png,.jpeg"
              >
                <ButtonUpdate
                  title="Upload Image"
                  titleClassName="text-white"
                  className="bg-primary border-primary hover:bg-primary w-[120px] mt-[10px] justify-center "
                />
              </Upload>
            </div>
          </FormItem>
          <div className=" w-[556px] flex flex-col justify-between ">
            <FormItem className="font-medium leading-10 mt-[30px] " label="Name" labelAlign="left" errorMsg={checkFieldErrorHelper(form, 'name')}>
              <Input
                {...form.register('name')}
                name="name"
                className={clsx('w-full text-gray-darker border  rounded-[6px] h-[40px]', {
                  'border border-solid border-primary-light-600': errors.name,
                })}
                onChange={handleChange}
                value={values.name}
              />
            </FormItem>
            <FormItem className="font-medium leading-10 " labelAlign="left" label="Quantity" errorMsg={checkFieldErrorHelper(form, 'quantity')}>
              <InputNumber
                {...form.register('quantity')}
                name="quantity"
                className={clsx('w-full text-gray-darker border leading-10 rounded-[6px] h-[40px]', {
                  'border border-solid border-primary-light-600': errors.quantity,
                })}
                onChange={(value) => form.setFieldValue('quantity', value)}
                value={values.quantity}
              />
            </FormItem>
            <FormItem className="font-medium leading-10 " label="Brand" labelAlign="left">
              <Select
                defaultValue={brandData[0].name}
                style={{ width: 395, height: 40 }}
                onSelect={(e, object) => form.setFieldValue('brandID', object.key)}
              >
                {brandData.map((item) => (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem className="font-medium leading-10 " label="Category" labelAlign="left">
              <Select
                defaultValue={categoryData[0].name}
                onSelect={(e, object) => form.setFieldValue('categoryID', object.key)}
                style={{ width: 395, height: 40 }}
              >
                {categoryData.map((item) => (
                  <Option key={item.id} value={item.name}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </FormItem>
            <FormItem className="font-medium leading-10" label="Description" labelAlign="left" errorMsg={checkFieldErrorHelper(form, 'description')}>
              <TextArea
                rows={4}
                value={values.description}
                onChange={(e) => form.setFieldValue('description', e.target.value)}
                style={{ borderRadius: 6, height: 160 }}
              />
            </FormItem>
          </div>
          <ButtonCreate
            title="Save"
            className="bg-primary border-primary rounded-[6px] hover:bg-primary w-[120px] mt-[10px] justify-center  h-[40px]"
          />
        </div>
      </Form>
    </Container>
  );
}
export default Index;
