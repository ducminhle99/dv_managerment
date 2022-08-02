import ImportOutlined from '@ant-design/icons/ImportOutlined';
import KeyOutlined from '@ant-design/icons/KeyOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
export default function ChildProfile() {
  return (
    <div className="absolute top-20 right-11 w-[260px] rounded-[6px] p-5 shadow-md">
      <a className="flex">
        <div className="flex items-center">
          <img alt="" src="/assets/images/avatar.png" className="w-8 h-8 rounded-[50%]" />

          <div className="flex-col ml-1 ">
            <p className="ml-[5px]">Nguyen Van</p>
            <p className="ml-[5px] text-[#CCCCCC]">dungnn@gmail.com</p>
          </div>
        </div>
      </a>
      <hr />
      <a className="flex items-center">
        <UserOutlined style={{ color: 'rgb(171 156 156)', fontSize: '20px' }} />
        <p className=" ml-5 py-3">Edit profile</p>
      </a>
      <a className="flex items-center">
        <KeyOutlined style={{ color: 'rgb(171 156 156)', fontSize: '20px' }} />
        <p className="ml-5 py-3">Change Password</p>
      </a>
      <hr />
      <a className="flex items-center">
        <ImportOutlined style={{ color: 'rgb(171 156 156)', fontSize: '20px' }} />

        <p className="ml-5 py-2">Sign out</p>
      </a>
    </div>
  );
}
