import React, { createContext, useContext, useState, useEffect } from 'react';
import useLogin from '../hooks/useLogin';
import useLogout from '../hooks/useLogout';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const loginMutation = useLogin();
  const logoutMutation = useLogout();

  // If there is a token with the name 'pb.authStore.token' in cookies, update isLoggedIn state to true.
  useEffect(() => {
    const token = Cookies.get('pb.authStore.token');
    if (token) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  // Call login hook to send data to pb and if good to go, set state to true
  const login = async ({ email, password }) => {
    try {
      const authData = await loginMutation.mutateAsync({ email, password });
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login failed:', error);
      setIsLoggedIn(false);
      throw error;
    }
  };

  // Call logoutMutation from useLogout hook, set state to false
  const logout = async () => {
    try {
      await logoutMutation.mutateAsync();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
