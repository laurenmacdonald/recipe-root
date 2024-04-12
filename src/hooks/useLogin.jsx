import { useMutation } from 'react-query';
import pb from '../util/pocketbase';
import Cookies from 'js-cookie';

//
const useLogin = () => {
  const loginMutation = useMutation(async ({ email, password }) => {
    const authData = await pb
      .collection('users')
      .authWithPassword(email, password);

    Cookies.set('pb.authStore.token', pb.authStore.token, {
      expires: 7,
      secure: true,
    });

    return authData;
  });

  return loginMutation;
};

export default useLogin;
