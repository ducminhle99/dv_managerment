import { handleActions, Action } from 'redux-actions';
import * as actions from 'store/actions';
import { CompanyProfileDto, UserProfileDto } from '../../common/dto/response';

export interface IProfileState {
  company?: CompanyProfileDto;
  admin?: UserProfileDto;
  triggerGetProfile: boolean;
  loading: boolean;
}

const initialState: IProfileState = {
  company: {} as any,
  admin: {} as any,
  triggerGetProfile: false,
  loading: false,
};

export default handleActions<IProfileState, any>(
  {
    [actions.setCompanyProfile.toString()]: (state = initialState, action: Action<CompanyProfileDto>) => ({
      ...state,
      company: action.payload,
    }),
    [actions.setAdminProfile.toString()]: (state = initialState, action: Action<UserProfileDto>) => ({
      ...state,
      admin: action.payload,
    }),
    [actions.triggerGetProfile.toString()]: (state = initialState) => ({
      ...state,
      triggerGetProfile: !state.triggerGetProfile,
    }),
    [actions.loadingGetProfile.toString()]: (state = initialState, action: Action<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
  },
  initialState
);
