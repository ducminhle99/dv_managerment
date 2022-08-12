import ProfileComponent from 'common/components/profile';
import useLogic from './useLogic';

function ProfileUser() {
  const { messageError, setMessageError, handleSubmit, loading, userProfiledata } = useLogic();

  return (
    <ProfileComponent
      submit={handleSubmit}
      userProfiledata={userProfiledata}
      loading={loading}
      messageError={messageError}
      setMessageError={setMessageError}
    />
  );
}

export default ProfileUser;
