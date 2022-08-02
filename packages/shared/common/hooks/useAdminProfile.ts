import { useDispatch } from 'react-redux';
import { useApiCaller, useSelector } from 'common/hooks';
import { loadingGetProfile, setAdminProfile } from 'store/actions';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../services/api';
import { UserProfileDto } from '../dto/response';

export function useAdminProfile() {
  const { token, triggerGetProfile } = useSelector((store) => ({
    ...store.authentication,
    triggerGetProfile: store.profile.triggerGetProfile,
  }));
  const dispatch = useDispatch();
  const [triggerGetProfilePrev, setTriggerGetProfilePrev] = useState<boolean>(undefined as any);

  const { request, loading } = useApiCaller<UserProfileDto>({
    apiCaller: getUserProfile,
    resDto: UserProfileDto,
    setData: (data) => {
      if (data) {
        dispatch(setAdminProfile(data.data || ({} as any)));
      }
    },
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
