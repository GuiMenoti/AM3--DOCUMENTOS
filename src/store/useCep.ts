import { create } from 'zustand';

type UseCep = {
  cep: string;
  handleCep: (cep: string) => void;
  resetCep: () => void;
};

export const useCep = create<UseCep>((set) => ({
  cep: '',
  handleCep: (cep) => set((state) => ({ ...state, cep })),
  resetCep: () => set((state) => ({ ...state, cep: '' })),
}));
