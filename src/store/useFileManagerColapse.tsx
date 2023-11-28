import { create } from 'zustand';

type File = {
  [key: string]: boolean;
};

type UseFileManagerColapse = {
  colapseFiles: File;
  openFile: (payload: any) => void;
  closedAllFiles: () => void;
};

export const useFileManagerColapse = create<UseFileManagerColapse>((set) => ({
  colapseFiles: {},
  openFile: (nome) => {
    set((state) => {
      const updatedFiles: File = {};

      Object.keys(state.colapseFiles).forEach((key) => {
        updatedFiles[key] = false;
      });

      updatedFiles[nome] = state.colapseFiles[nome]
        ? !state.colapseFiles[nome]
        : true;

      return {
        colapseFiles: updatedFiles,
      };
    });
  },
  closedAllFiles: () => {
    set((state) => {
      const updatedFiles: File = {};

      Object.keys(state.colapseFiles).forEach((key) => {
        updatedFiles[key] = false;
      });

      return {
        colapseFiles: updatedFiles,
      };
    });
  },
}));
