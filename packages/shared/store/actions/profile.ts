import { createAction } from 'redux-actions';
import { UserProfileDto, CompanyProfileDto } from '../../common/dto/response';

export const setCompanyProfile = createAction<CompanyProfileDto>('PROFILE_COMPANY_SET');
export const setAdminProfile = createAction<UserProfileDto>('PROFILE_ADMIN_SET');
export const triggerGetProfile = createAction('PROFILE_TRIGGER_FETCH');
export const loadingGetProfile = createAction('PROFILE_LOADING');
