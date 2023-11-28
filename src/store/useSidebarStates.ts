import sidebarController from '../controller/sidebarModel';
import { create } from 'zustand';
import { sidebarControllerModelProps } from 'sidebar';

export type SidebarStates = {
  states: Array<sidebarControllerModelProps>;
  isSelectedButtonSidebar: (payload: any) => void;
};

export const useSidebarStates = create<SidebarStates>((set) => ({
  states: sidebarController,
  isSelectedButtonSidebar: (payload = {}) => {
    const { previous, current } = payload;
    set((state) => {
      state.states?.map((value) => {
        value?.items.map((items) => {
          if (
            items?.path === previous[0]?.path ||
            items?.path === current?.path
          ) {
            items.selected = true;

            items?.subItems?.map((subItems) => {
              if (
                `${items.path}${subItems?.path.replace('.', '')}` ===
                current?.path
              ) {
                subItems.selected = true;
              } else {
                subItems.selected = false;
              }
            });
          } else {
            items.selected = false;

            items?.subItems?.map((subItems) => {
              subItems.selected = false;
            });
          }
        });
      });

      return { ...state };
    });
  },
}));
