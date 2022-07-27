import { useDispatch } from 'react-redux';
import { useApiCaller, useSelector } from 'common/hooks';
import { loadingGetProfile, setCompanyProfile } from 'store/actions';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';
import { CompanyProfileDto } from '../dto/response';

export function useCompanyProfile() {
  const { token, triggerGetProfile } = useSelector((store) => ({
    ...store.authentication,
    triggerGetProfile: store.profile.triggerGetProfile,
  }));
  const [triggerGetProfilePrev, setTriggerGetProfilePrev] = useState<boolean>(undefined as any);

  const dispatch = useDispatch();

  const { request, loading } = useApiCaller<CompanyProfileDto>({
    apiCaller: getUserProfile,
    resDto: CompanyProfileDto,
    setData: (data: any) => dispatch(setCompanyProfile(data.data || ({} as any))),
  });

  useEffect(() => {
    dispatch(loadingGetProfile(loading));
  }, [loading]);

  useEffect(() => {
    if (!token) {
      return;
    }

    if (triggerGetProfilePrev === triggerGetProfile) {
      return;
    }

    setTriggerGetProfilePrev(triggerGetProfile);

    request();
  }, [token, triggerGetProfile]);
}
