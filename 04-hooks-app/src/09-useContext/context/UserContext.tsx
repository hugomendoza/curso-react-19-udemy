import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import { users, type User } from '../data/user-mock.data';

// interface UserContextProps {
//   children: React.ReactNode;
// }

type AuthStatus = 'checking' | 'authenticathed' | 'not-authenticated';

interface UserContextProps {
  authStatus: AuthStatus;
  isAuthenticated: boolean;
  user: User | null;

  login: (userId: number) => boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextProps);

//HOC
export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('checking');
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number) => {
    const user = users.find((user) => user.id === userId);
    if (!user) {
      console.log(`User not found ${userId}`);
      setUser(null);
      setAuthStatus('not-authenticated');
      return false;
    }

    setUser(user);
    setAuthStatus('authenticathed');
    localStorage.setItem('userId', userId.toString());
    return true;
  };

  const handleLogout = () => {
    console.log('logout');
    setAuthStatus('not-authenticated');
    setUser(null);
    localStorage.removeItem('userId');
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');

    if (storedUserId) {
      handleLogin(+storedUserId);
    }

    handleLogout();
  }, []);

  return (
    <UserContext
      value={{
        authStatus: authStatus,
        isAuthenticated: authStatus === 'authenticathed',
        user: user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
