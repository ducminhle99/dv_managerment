import { useFormik, FormikValues, FormikConfig, FormikHelpers } from 'formik';
import { useWarnIfUnsavedChanges } from './useWarnIfUnsavedChanges';

type RegisterOption = {
  nameOfValueProps?: string;
  isNumber?: boolean;
  isShowConfirmChanged?: boolean;
  preventTruncate?: boolean;
};

type UseFormHandler = {
  isShowConfirmChanged?: boolean;
};

export function useFormHandler<Values extends FormikValues>(
  { initialValues, onSubmit, validationSchema, ...rest }: FormikConfig<Values>,
  useFormHandlerProps?: UseFormHandler
) {
  const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    onSubmit(values, formikHelpers);
    formikHelpers.resetForm({ values });
  };

  const form = useFormik<Values>({
    initialValues: initialValues as any,
    validationSchema,
    onSubmit: handleSubmit,
    ...rest,
  });

  const askDiscardConfirmChange = useWarnIfUnsavedChanges(form.dirty, useFormHandlerProps?.isShowConfirmChanged);

  const handleOnChange = (name: string, isNumber?: boolean) => (e: any) => {
    if (e?.target) {
      if (e.target.value && isNumber) {
        form.setFieldValue(name, Number(e.target.value) || 0);
        return;
      }
      return form.handleChange(e);
    }

    if (isNumber) {
      e = Number(e) || e;
    }

    form.setFieldValue(name, e);
  };

  const handleOnblur = (name: string, preventTruncate?: boolean) => (e: any) => {
    let value = e;
    if (e.target) {
      value = e.target.value;
    }

    if (typeof value === 'string' && value && !preventTruncate) {
      value = value.trim();
      form.setFieldValue(name, value, true);
    }

    form.handleBlur(e);
  };

  const setData = (data: { [key: string]: any }) => {
    Object.keys(data).forEach((key) => {
      const value = data[key];
      form.setFieldValue(key, value);
    });
  };

  const register = (name: string, option?: RegisterOption) => {
    return {
      name,
      onChange: handleOnChange(name, option?.isNumber),
      [option?.nameOfValueProps || 'value']: form.values[name],
      onBlur: handleOnblur(name, option?.preventTruncate),
    };
  };

  return { ...form, register, askDiscardConfirmChange, setData };
}
