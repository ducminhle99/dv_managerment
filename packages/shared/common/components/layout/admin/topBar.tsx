import { Button } from 'antd';
import { useSelector } from 'common/hooks';
import { IAuthState } from 'store/reducers/authentication';
import { roleLabelFull } from 'common/constants/role';
import { LogoutIcon } from 'common/components/icons';
import { UserCircle } from 'common/components/icons';
import { useLogout } from 'common/hooks/useLogout';
import { useState } from 'react';

function TopBar() {
  const [isUploadHover, setIsUploadHover] = useState(false);
  const { handleLogout } = useLogout();

  const { authData, adminProfile } = useSelector((state) => ({
    authData: state.authentication as IAuthState,
    adminProfile: state.profile.admin,
  }));

  if (!authData) {
    return null;
  }

  return (
    <div className="mt-7 mb-8 self-baseline flex justify-end w-full pr-9">
      <div className="flex self-baseline">
        <div className="flex items-center p-2 bg-white rounded-lg shadow">
          <div className="ml-2 flex items-center">
            <UserCircle />
          </div>
          <p className="ml-2 font-bold text-sm">{adminProfile?.fullName}</p>
          <div className="border-0 border-l border-solid border-gray pl-4 pr-2 ml-4 text-sm">
            <p className="font-bold text-sm">{roleLabelFull[authData.role]}</p>
          </div>
        </div>

        <Button
          onClick={handleLogout}
          className="flex items-center ml-6 p-0 group bg-transparent border-none"
          onMouseEnter={() => setIsUploadHover(true)}
          onMouseLeave={() => setIsUploadHover(false)}
        >
          <LogoutIcon color={isUploadHover ? '#fc7679' : ''} />
          <p className="font-bold text-sm ml-2 group-hover:text-primary underline">ログアウト</p>
        </Button>
      </div>
    </div>
  );
}

export default TopBar;
