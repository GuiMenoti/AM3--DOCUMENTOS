import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PaletteMode } from '@mui/material';

export type ThemeMode = {
  theme: PaletteMode;
  switchTheme: () => void;
};

export const useThemeMode = create(
  persist<ThemeMode>(
    (set) => ({
      theme: 'light',
      switchTheme: () =>
        set((state: ThemeMode) => ({
          ...state,
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
    }),
    {
      name: 'themeMode',
    }
  )
);
