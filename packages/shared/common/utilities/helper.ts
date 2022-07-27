import Router from 'next/router';
import multiLanguage, { LanguageKey } from 'common/constants/multiLanguage';
import { isNumber, isObject } from 'lodash';
import { errorCode, errorMSGCommon } from 'common/constants/apiErrorCode';
import { PaginationRes } from '../dto/response';

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

export const getMessageErrorRes = (errorsRes?: { [key: string]: any }, errorCodeObject?: any): string => {
  if (!Array.isArray(errorsRes)) {
    return '';
  }

  const errorCodeMsg = errorsRes?.[0]?.errorCode as any;
  if (!errorCodeMsg) {
    return '';
  }

  const errorCodeCus: any = errorCode;

  return errorCodeObject?.[errorCodeMsg] || errorCodeCus[errorCodeMsg] || '';
};

export const getMsgCommon = (errorCode: string, errorsRes: any): string => {
  if (!errorCode) {
    return '';
  }

  if (errorsRes?.items?.length !== 1) {
    return '';
  }

  const errorCodeMsg: string = errorsRes.items[0]?.errorField as string;

  if (!errorCodeMsg) {
    return '';
  }

  const msgCommonObj: any = errorMSGCommon[errorCode];

  return msgCommonObj?.[errorCodeMsg] || '';
};

export const getParamFromUrl = (key: string) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(key) || '';
};

export const formatDate = (dateStr: string): string => {
  try {
    const dateObj = new Date(dateStr);

    return dateObj.toISOString().split('T')[0];
  } catch (error) {
    return '';
  }
};

export const convertArrayStringToArrayNumber = (value: string | undefined): number[] => {
  if (!value) {
    return [];
  }

  return value.split(',').map(Number);
};

export const convertStringToArrayString = (value: string | undefined): string[] => {
  if (!value) {
    return [];
  }

  return value.split(',').map(String);
};

function convertRemToPixels(rem: number) {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export const scroll = (topPosition: number, option: any = {}) => {
  const container = document.querySelector('#container .simplebar-content-wrapper') as any;
  if (!container) {
    return;
  }

  const position = convertRemToPixels(topPosition);

  container.scrollTo({ top: position, ...option });
};

export const itemOfPage = (pagination: PaginationRes | undefined) => {
  if (!pagination) {
    return 0;
  }

  return Number(pagination?.total) / Number(pagination?.perPage) <= Number(pagination?.page)
    ? Number(pagination?.total) !== Number(pagination?.perPage)
      ? Number(pagination?.total) % Number(pagination?.perPage)
      : pagination?.total
    : Number(pagination?.perPage);
};

export const getValueFromQueryObjURL = (url: string, key: string): any => {
  try {
    const params = new URL(url).searchParams;

    return params.get(key);
  } catch (ex) {
    return null;
  }
};

export const formatCurrency = (value: number, fractionDigit?: number): string => {
  if (!isNumber(value)) {
    const defaultValue = 0;
    return defaultValue.toLocaleString('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: fractionDigit ?? 0,
    });
  }

  return value.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY', maximumFractionDigits: fractionDigit ?? 0 });
};
