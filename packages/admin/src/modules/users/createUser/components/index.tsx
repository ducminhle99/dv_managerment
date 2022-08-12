import { Button, Form, Input, Select } from 'antd';
import Container from 'common/components/container';
import FormItem from 'common/components/form/item';
import Image from 'next/image';
import { checkFieldErrorHelper } from 'common/utilities/validate';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import { Role } from 'common/types/role';
import DatePickerInputMark from 'common/components/datePickerInputMark';
import { Moment } from 'moment';
export type FormValue = {
  email: string;
  phoneNumber: string;
  name: string;
  dateOfBirth: string;
  password: string;
  role: Role;
  position: number;
};

export interface Props {
  submit: (data: FormValue) => void;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => void;
  btnStatus: boolean;
}
const imagePath = '/assets/images/default-avatar.jpg';

const initialValues = {
  email: '',
  phoneNumber: '',
  name: '',
  dateOfBirth: '',
  password: '',
  role: Role.Admin,
  position: 1,
};

function CreateUser() {
  const { Option } = Select;

  const form = useFormHandler<FormValue>({
    initialValues: {
      ...initialValues,
    },
    validateOnChange: true,
    validateOnBlur: false,
    validationSchema,
    onSubmit: () => {
      return;
    },
  });

  const maxDate = (current: Moment) => {
    return current && current.valueOf() > Date.now();
  };

  return (
    <Container title="CREATE USER" className="mt-[74px] px-[54px] w-full max-w-[1367px] ml-auto mr-auto">
      <Form onFinish={form.handleSubmit} colon={false} className="mx-auto flex sm:flex-col justify-center mt-12" labelCol={{ span: 7 }}>
        <div className="w-[556px] sm:w-full lg:mr-0 mr-[92px] sm:order-2">
          <Input.Group>
            <FormItem
              errorMsg={checkFieldErrorHelper(form, 'email')}
              labelAlign="left"
              label={<span className="font-bold leading-10 text-[14px]">Email</span>}
            >
              <Input
                {...form.register('email')}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const newValue = e.target.value;
                  form.setFieldValue('password', newValue);
                }}
                placeholder="Enter email"
                className="w-full h-[40px] rounded-md shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[14px]"
              />
            </FormItem>
          </Input.Group>
          <Input.Group>
            <FormItem
              errorMsg={checkFieldErrorHelper(form, 'phoneNumber')}
              labelAlign="left"
              label={<span className="font-bold leading-10 text-[14px]">Phone number</span>}
            >
              <Input
                {...form.register('phoneNumber')}
                placeholder="Enter phone number"
                className="w-full h-[40px] rounded-md shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[14px]"
              />
            </FormItem>
          </Input.Group>
          <Input.Group>
            <FormItem
              errorMsg={checkFieldErrorHelper(form, 'name')}
              labelAlign="left"
              label={<span className="font-bold leading-10 text-[14px]">Full name</span>}
            >
              <Input
                {...form.register('name')}
                placeholder="Enter name"
                className="w-full h-[40px] rounded-md shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[14px]"
              />
            </FormItem>
          </Input.Group>
          <Input.Group>
            <FormItem
              errorMsg={checkFieldErrorHelper(form, 'dateOfBirth')}
              labelAlign="left"
              label={<span className="font-bold leading-10 text-[14px]">Date of birth</span>}
            >
              <DatePickerInputMark
                {...form.register('dateOfBirth')}
                disabledDate={maxDate}
                inputClass="w-full h-[40px] rounded-md shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[14px]"
              />
            </FormItem>
          </Input.Group>
          <Input.Group>
            <FormItem
              errorMsg={checkFieldErrorHelper(form, 'password')}
              labelAlign="left"
              label={<span className="font-bold leading-10 text-[14px]">Password</span>}
            >
              <Input.Password
                {...form.register('password')}
                value={form.values.password}
                disabled
                className="w-full h-[40px] rounded-md shadow-[0px_2px_6px_rgba(19,18,66,0.07)] text-[14px]"
              />
            </FormItem>
          </Input.Group>
          <Input.Group>
            <FormItem
              errorMsg={checkFieldErrorHelper(form, 'role')}
              labelAlign="left"
              label={<span className="font-bold leading-10 text-[14px]">Role</span>}
            >
              <Select style={{ width: 192, height: 40 }} {...form.register('role')} placeholder="Select a person">
                <Option value={Role.Admin}>Admin</Option>
                <Option value={Role.User}>User</Option>
              </Select>
            </FormItem>
          </Input.Group>
          <Input.Group>
            <FormItem
              errorMsg={checkFieldErrorHelper(form, 'position')}
              labelAlign="left"
              label={<span className="font-bold leading-10 text-[14px]">Position</span>}
            >
              <Select defaultValue="lucy" style={{ width: 192, height: 40 }} {...form.register('position')}>
                <Option value={1}>Intern</Option>
                <Option value={2}>PM</Option>
                <Option value={3}>Tester</Option>
              </Select>
            </FormItem>
          </Input.Group>
          <Button htmlType="submit" type="primary" className="h-[40px] rounded-md sm:mt-7 mt-[62px]">
            Create User
          </Button>
        </div>
        <div className="w-[300px] sm:w-full flex flex-col items-center sm:mb-5">
          <Image src={imagePath} width="180" height="180" alt="avatar" className="sm:w-full" />
        </div>
      </Form>
    </Container>
  );
}

export default CreateUser;
