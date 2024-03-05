import { createContext } from 'react';

export const LoginContext = createContext({username: 'none', token: 'none', isLoggedIn: false});