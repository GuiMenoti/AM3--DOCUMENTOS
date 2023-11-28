import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type InitialState = {
  open: boolean;
};

type UseModalMessage = {
  initialState: InitialState;
  handle: () => void;
  handleClose: () => void;
};

const initialState: InitialState = {
  open: true,
};

export const useModalMessage = create(
  persist<UseModalMessage>(
    (set) => ({
      initialState,
      handle: () => {
        set((prev) => ({
          ...prev,
          initialState: { ...initialState, open: true },
        }));
      },
      handleClose: () => {
        set((prev) => ({
          ...prev,
          initialState: {
            ...initialState,
            open: false,
          },
        }));
      },
    }),
    {
      name: 'modalMessage',
    }
  )
);
