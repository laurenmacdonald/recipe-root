import { useMutation } from 'react-query';
import pb from '../util/pocketbase';
import Cookies from 'js-cookie';

const useLogout = () => {
  return useMutation(async () => {
    pb.authStore.clear();
    Cookies.remove('pb.authStore.token');
  });
};

export default useLogout;
