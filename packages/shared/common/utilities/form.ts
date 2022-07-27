import { autoFillMappingKeys } from '../constants/form';
import { messageValidateObj } from '../constants/msgValidate';

export const getFullAddress = (addressObj: any) => {
  try {
    if (!addressObj) {
      return;
    }
    const zipCode = addressObj.zipCode ? `〒${addressObj.zipCode.slice(0, 3)}-${addressObj.zipCode.slice(3, 7)}　` : '';

    return `${zipCode}${addressObj.address || ''}${addressObj.subAddress || ''}`;
  } catch (error) {
    return '';
  }
};

export const fillForm = (formDoom: any, objectValue: any, setFormHasChanged: any) => {
  if (!formDoom) {
    return;
  }

  if (!objectValue) {
    return;
  }

  const listFormKey = Object.keys(autoFillMappingKeys);

  let hasFilled = false;
  listFormKey.forEach((formKey) => {
    const formEles = document.getElementsByName(formKey) as any;

    formEles.forEach((formEle: any) => {
      if (!formEle) {
        return;
      }

      const mappingObj = autoFillMappingKeys[formKey];
      const valueOrg = mappingObj.key ? objectValue[mappingObj.key] : null;

      let valueFilled = valueOrg;

      if (mappingObj.labelObj && mappingObj.key) {
        valueFilled = mappingObj.labelObj[valueOrg];
      }

      if (mappingObj.convert) {
        valueFilled = mappingObj.convert(mappingObj.key ? valueOrg : objectValue);
      }

      if (typeof valueFilled === 'undefined' || Object.is(valueFilled, NaN)) {
        valueFilled = '';
      }

      hasFilled = true;
      switch (formEle.type) {
        case 'radio':
        case 'checkbox':
          formEle.checked = valueFilled === formEle.value;
          break;
        default:
          formEle.value = valueFilled;
          break;
      }
    });

    if (hasFilled && setFormHasChanged) {
      setFormHasChanged(hasFilled);
    }
  });
};

export const getValidateMessage = (messageObj: any) => {
  if (!messageObj?.errorCode) {
    return '';
  }

  const messageTemp = messageValidateObj[messageObj?.errorCode] as string;

  if (!messageTemp) {
    return;
  }

  const listObjReplace: any[] = [];

  Object.keys(messageObj).forEach((key) => {
    if (key === 'desc') {
      listObjReplace.push({ value: messageObj[key] });
    }

    if (key.startsWith('value')) {
      const keyReplace = `value${listObjReplace.length || ''}`;
      listObjReplace.push({ [keyReplace]: messageObj[key] });
    }
  });

  let messageValidate = messageTemp;
  listObjReplace.forEach((objReplace) => {
    const [[key, value]] = Object.entries(objReplace);
    messageValidate = messageValidate.replace(`[${key}]`, value as any);
  });

  return messageValidate;
};

export const cloneForm = (objectValue: any) => {
  if (!objectValue) {
    return;
  }

  Object.keys(objectValue).forEach((formName) => {
    const formEles = document.getElementsByName(formName) as any;

    formEles.forEach((formEle: any) => {
      if (!formEle) {
        return;
      }

      const value = objectValue[formName];

      switch (formEle.type) {
        case 'radio':
        case 'checkbox':
          formEle.checked = value === formEle.value;
          break;
        default:
          formEle.value = value;
          break;
      }
    });
  });
};
