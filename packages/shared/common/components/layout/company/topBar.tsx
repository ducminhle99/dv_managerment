import { useSelector } from 'common/hooks';
import { IAuthState } from 'store/reducers/authentication';
import { LogoutIcon } from 'common/components/icons';
import { UserCircle } from 'common/components/icons';
import { MailOutlined } from '@ant-design/icons';

import { useLogout } from 'common/hooks/useLogout';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from 'antd';
import { contactPlanLabel } from '../../../constants/companyAccount';

function TopBar() {
  const [isUploadHover, setIsUploadHover] = useState(false);
  const { handleLogout } = useLogout();

  const { authData, companyProfile } = useSelector((state) => ({
    authData: state.authentication as IAuthState,
    companyProfile: state.profile.company,
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
          {/* <p className="ml-2 font-bold text-sm">{companyProfile?.fullName}</p> */}
          <div className="border-0 border-l border-solid border-gray pl-4 pr-2 ml-4 text-sm">
            <p className="font-bold text-sm">{contactPlanLabel[companyProfile?.companyProfile?.compContractPlan as any]}</p>
          </div>
        </div>
        <Link href="/inquiry">
          <a className="flex items-center ml-6 p-0 underline group hover:text hover:decoration-primary">
            <MailOutlined className="text-[#333] group-hover:text-primary w-5" />
            <p className="font-bold text-sm ml-2 group-hover:text-primary">お問い合わせ</p>
          </a>
        </Link>
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
