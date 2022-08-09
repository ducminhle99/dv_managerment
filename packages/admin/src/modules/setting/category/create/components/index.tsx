import { Button, Input } from 'antd';
import { useState } from 'react';
import SettingForm from 'common/components/modalForm/settingForm';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import FormItem from 'common/components/form/item';
import { checkFieldErrorHelper } from 'common/utilities/validate';

export type FormValue = {
  categoryName: string;
};

export interface Props {
  submit: (data: FormValue) => void;
  messageError: string;
  setMessageError: (data: string) => void;
  loading: boolean;
}

function ButtonCreateCategory({ submit, messageError, setMessageError, loading }: Props) {
  const [openModal, setOpenModal] = useState(false);

  const form = useFormHandler<FormValue>({
    initialValues: { categoryName: '' },
    validateOnChange: true,
    validateOnBlur: false,
    validationSchema,
    onSubmit: (data) => {
      submit(data);
    },
  });

  return (
    <div>
      <Button
        type="primary"
        className="mt-0 w-[102px] h-[40px] rounded-md border-none text-[14px] font-bold text-white shadow-md"
        onClick={() => setOpenModal(true)}
      >
        Add New
      </Button>
      <SettingForm
        open={openModal}
        closeModal={() => setOpenModal(false)}
        title="New Category"
        form={form}
        action="Add"
        messageError={messageError}
        setMessageError={setMessageError}
        loading={loading}
      >
        <Input.Group className="create-modal-form w-full">
          <FormItem
            errorMsg={checkFieldErrorHelper(form, 'categoryName')}
            className="flex flex-col items-center w-full"
            label={<span className="text-base font-medium text-left block w-full float-left">Name Category</span>}
          >
            <Input
              {...form.register('categoryName')}
              placeholder="Add New Category"
              className="h-10 px-[10px] w-full rounded-md border border-solid focus:shadow-none text-base"
            />
          </FormItem>
        </Input.Group>
      </SettingForm>
    </div>
  );
}

export default ButtonCreateCategory;
