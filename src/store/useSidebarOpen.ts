import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type SidebarOpen = {
  isOpen: boolean;
  openSidebar: () => void;
  closedSidebar: () => void;
};

export const useSidebarOpen = create(
  persist<SidebarOpen>(
    (set) => ({
      isOpen: true,
      openSidebar: () =>
        set((state) => ({
          ...state,
          isOpen: true,
        })),
      closedSidebar: () =>
        set((state) => ({
          ...state,
          isOpen: false,
        })),
    }),
    {
      name: 'sidebar-open',
    }
  )
);

