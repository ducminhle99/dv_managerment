import ProfileUserComponent from './components';
import useLogic from './useLogic';

function ProfileUser() {
  const { messageError, setMessageError, handleSubmit, loading, userProfiledata } = useLogic();

  return (
    <ProfileUserComponent
      submit={handleSubmit}
      userProfiledata={userProfiledata}
      loading={loading}
      messageError={messageError}
      setMessageError={setMessageError}
    />
  );
}

export default ProfileUser;
