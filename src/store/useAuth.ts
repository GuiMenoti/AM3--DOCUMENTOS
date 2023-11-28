import { create } from 'zustand';

type UseAuthProps = {
  access_token: string;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuth = create<UseAuthProps>((set) => ({
  access_token: sessionStorage.getItem('access_token') || '',
  login: (token) => {
    set((state) => {
      sessionStorage.setItem('access_token', token);
      return { ...state, access_token: token };
    });
  },
  logout: () => {
    set((state) => {
      sessionStorage.removeItem('access_token');
      return { ...state, access_token: '' };
    });
  },
}));
