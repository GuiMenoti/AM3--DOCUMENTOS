import { GenericState } from 'generic';
import { create } from 'zustand';

type UseOpenMenuSidebar = {
  menuSidebar: GenericState;
  openSidebarMenu: (payload: any) => void;
  closedAllSidebarMenu: () => void;
};

export const useOpenMenuSidebar = create<UseOpenMenuSidebar>((set) => ({
  menuSidebar: {},
  openSidebarMenu: (path) => {
    set((state) => {
      const updatedMenuSidebar: GenericState = {};

      Object.keys(state.menuSidebar).forEach((key) => {
        updatedMenuSidebar[key] = false;
      });

      updatedMenuSidebar[path] = !state.menuSidebar[path];

      return {
        menuSidebar: updatedMenuSidebar,
      };
    });
  },
  closedAllSidebarMenu: () => {
    set((state) => {
      const updatedMenuSidebar: GenericState = {};

      Object.keys(state.menuSidebar).forEach((key) => {
        updatedMenuSidebar[key] = false;
      });

      return {
        menuSidebar: updatedMenuSidebar,
      };
    });
  },
}));
