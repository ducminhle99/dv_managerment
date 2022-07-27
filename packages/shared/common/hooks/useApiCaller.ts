import { useDispatch } from 'react-redux';
import { useSelector } from 'common/hooks';
import { notification, setPopupNotification, logout, setAuthenticated } from 'store/actions';
import NProgress from 'nprogress';
import { useEffect, useState } from 'react';
import { BaseDTO } from 'common/dto/base';
import { plainToClass, Type, instanceToPlain } from 'class-transformer';
import { ResTemplate } from 'common/dto/response/responseTemplate';
import { isObject } from 'lodash';
import { getMessageErrorRes, getMsgCommon } from '../utilities/helper';
import { ErrorCodeCommon } from '../constants/apiErrorCode';
import { Role } from 'common/types/role';
import { getNewToken } from '../services/api';
import { appConfig } from '@configs/app';

interface ApiCallerParam {
  apiCaller: any;
  messageFail?: boolean | string;
  messageSuccess?: boolean | string;
  setData?: (data: any) => void;
  resDto?: BaseDTO;
  errorCodeObject?: { [key: string]: any };
  prefixMessage?: string;
}

const convertDto = <T>(dto: any) => {
  class ResponseTemplateData extends ResTemplate<T> {
    @Type(() => dto)
    data: T;
  }

  return ResponseTemplateData;
};

export function useApiCaller<TRes, TReq = {}>({ apiCaller, messageFail, messageSuccess, setData, resDto, errorCodeObject }: ApiCallerParam) {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { role, refreshToken } = useSelector((state) => ({
    role: state.authentication.role,
    refreshToken: state.authentication.refreshToken,
  }));
  let hasRenewToken = false;

  useEffect(() => {
    if (loading) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [loading]);

  const handleProcessCommonError = (responseData: any) => {
    const errorCode = responseData?.message ? responseData?.message : getMessageErrorRes(responseData?.data?.items);

    const targetName = role === Role.Company ? '企業アカウント' : 'ユーザー';

    const msg = getMsgCommon(errorCode, responseData.data);

    switch (errorCode) {
      case ErrorCodeCommon.authorFailed:
        dispatch(
          setPopupNotification({
            actionString: 'logout',
            isOpen: true,
            message: `この${targetName}は既に削除されているためもう操作できません。`,
          })
        );
        break;
      case ErrorCodeCommon.dataDelete:
        if (msg) {
          dispatch(
            setPopupNotification({
              actionString: 'redirect',
              isOpen: true,
              message: msg,
            })
          );
        }

        break;
      case ErrorCodeCommon.doesNotExist:
        if (msg) {
          dispatch(
            setPopupNotification({
              actionString: 'redirect',
              isOpen: true,
              message: msg,
            })
          );
        }

        break;
      case ErrorCodeCommon.interviewProcessing:
        if (msg) {
          dispatch(
            setPopupNotification({
              actionString: 'redirect',
              isOpen: true,
              message: msg,
            })
          );
        }

        break;
      case ErrorCodeCommon.workplaceDelete:
        dispatch(
          setPopupNotification({
            actionString: 'redirect',
            isOpen: true,
            message: `この所属先は既に削除されているためもう操作できません。`,
          })
        );
        break;
      case ErrorCodeCommon.resourceDelete:
        dispatch(
          setPopupNotification({
            actionString: 'redirect',
            isOpen: true,
            message: `この人材は既に削除されているためもう操作できません。`,
          })
        );
        break;
      case ErrorCodeCommon.documentDelete:
        dispatch(
          setPopupNotification({
            actionString: 'redirect',
            isOpen: true,
            message: `この書類は既に削除されているためもう使用できません。`,
          })
        );
        break;
      case ErrorCodeCommon.companyDelete:
        dispatch(
          setPopupNotification({
            actionString: 'redirect',
            isOpen: true,
            message: `この企業アカウントは既に削除されているためもう操作できません。`,
          })
        );
        break;
      case ErrorCodeCommon.resourceDelete:
        dispatch(
          setPopupNotification({
            actionString: 'redirect',
            isOpen: true,
            message: `この企業アカウント作成は既に削除されているためもう操作できません。`,
          })
        );
        break;
      // case ErrorCodeCommon.tokenExpired:
      //   dispatch(logout());
      //   break;
      case ErrorCodeCommon.serverError:
        dispatch(
          dispatch(
            notification({
              isOpen: true,
              type: 'error',
              message: '内部サーバーエラー',
            })
          )
        );
        break;

      default:
        break;
    }
  };

  const showMessage = (responseData: ResTemplate<TRes>) => {
    if (responseData.statusCode === 404) {
      dispatch(
        notification({
          type: 'error',
          isOpen: true,
          message: 'Not found API endpoint',
        })
      );
    }

    if (responseData.statusCode === 200) {
      if (messageSuccess === true) {
        messageSuccess = responseData?.message;
      }

      if (messageSuccess) {
        dispatch(
          notification({
            type: 'info',
            isOpen: true,
            message: messageSuccess as string,
          })
        );
      }
    }

    if (responseData.statusCode !== 200) {
      if (messageFail && responseData?.message) {
        messageFail = responseData?.message;
      }
      if (messageFail) {
        dispatch(
          notification({
            isOpen: true,
            type: 'error',
            message: messageFail as string,
          })
        );
      }
    }
  };

  const request = async (dataOrig?: TReq): Promise<ResTemplate<TRes>> => {
    setLoading(true);
    let newDataOrig = dataOrig;

    if (!(dataOrig instanceof FormData)) {
      newDataOrig = instanceToPlain(newDataOrig, { exposeDefaultValues: true }) as any;
    }

    const responseData = await apiCaller(newDataOrig);
    setLoading(false);

    let newResponseData = {} as any;
    if (isObject(responseData?.data)) {
      newResponseData = plainToClass(convertDto<TRes>(resDto), responseData?.data, { exposeDefaultValues: true });
    }

    newResponseData.statusCode = responseData?.status;

    if (newResponseData.statusCode === 401) {
      if (!refreshToken) {
        dispatch(logout());
        return newResponseData;
      }

      if (hasRenewToken) {
        dispatch(logout());
        return newResponseData;
      }

      const resultGetNewToken = await getNewToken({
        refreshToken,
      });

      if (resultGetNewToken?.data?.data) {
        const payloadAuth = {
          refreshToken,
          token: resultGetNewToken.data.data,
        };

        window.sessionStorage.setItem(appConfig.authSecretKey, JSON.stringify(payloadAuth));
        dispatch(setAuthenticated({ token: resultGetNewToken.data.data }));
      } else {
        dispatch(logout());
      }

      hasRenewToken = true;
      return request(dataOrig);
    }

    if (newResponseData.statusCode === 400) {
      const getMsg = getMessageErrorRes(newResponseData?.data?.items, errorCodeObject);

      if (getMsg && !Object.values(ErrorCodeCommon).includes(getMsg as any)) {
        newResponseData.message = getMsg;
      }
    }

    showMessage(newResponseData);
    handleProcessCommonError(newResponseData);

    if (newResponseData.statusCode === 200) {
      if (setData) {
        setData(newResponseData);
      }
    }

    return newResponseData;
  };

  return {
    loading,
    request,
    setLoading,
  };
}
