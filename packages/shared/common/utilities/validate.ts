import Router from 'next/router';
import multiLanguage, { LanguageKey } from 'common/constants/multiLanguage';
import { isObject } from 'lodash';
import { appConfig } from '@configs/app';

export const replaceRouter = (path: string) => {
  if (typeof window === 'undefined' || !path) {
    return;
  }

  Router.replace(path);
};

export const translate = (key: string, languageKey: LanguageKey = 'jp') => {
  return multiLanguage[key] ? multiLanguage[key][languageKey] : key;
};

export const convertObjectToQueryParams = (paramObj: { [key: string]: any }) => {
  let paramStr = '';

  if (isObject(paramObj)) {
    paramStr = Object.keys(paramObj)
      .map(function (key) {
        return key + '=' + (paramObj as any)[key];
      })
      .join('&');
  }

  return paramStr;
};

export function validateNumber(value?: string) {
  const regEx = /^(\s*|\d+)$/;

  return regEx.test(value || '');
}

export function checkMax(maxVal: number) {
  return (value?: string) => {
    if (!value) {
      return true;
    }

    return Number(value) <= maxVal;
  };
}

export function validateInternalEmail(value?: string) {
  if (!value) {
    return false;
  }

  const emailSplits = value.split('@');

  if (emailSplits.length != 2) {
    return false;
  }

  return appConfig.internalEmailSuffix.includes(emailSplits[1]);
}

export function isFullSize(value?: string) {
  if (!value) {
    return true;
  }

  const regexp = new RegExp(/^[ａ-ｚＡ-Ｚ０-９ぁ-んァ-ン一-龥　、。ー]+$/);

  return regexp.test(value);
}

export function isHalfSize(value?: string) {
  if (!value) {
    return true;
  }
  const regexp = new RegExp(/^[^ａ-ｚＡ-Ｚ０-９ぁ-んァ-ン一-龥　、。ー]+$/);

  return regexp.test(value);
}

export function isHalfSizeAlphanumeric(value?: string) {
  if (!value) {
    return true;
  }
  const regexp = new RegExp(/^[a-zA-Z0-9]+$/);

  return regexp.test(value);
}

export function checkFieldErrorHelper<Values>(form: any, fieldName: keyof Values, disableCheck?: boolean) {
  if (disableCheck) {
    return;
  }

  if (!form.touched[fieldName]) {
    return;
  }

  return form.errors[fieldName];
}

export function isEmailHalfSize(value?: string) {
  if (!value) {
    return true;
  }

  const regexp = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  return regexp.test(value);
}
