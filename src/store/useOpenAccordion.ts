import { create } from 'zustand';

type UseOpenAccordion = {
  menu: string;
  open: (payload: any) => void;
};

export const useOpenAccordion = create<UseOpenAccordion>((set) => ({
  menu: '',
  open: (path) => {
    set((state) => {
      return {
        menu: path === state.menu ? '' : path,
      };
    });
  },
}));

