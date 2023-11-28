import { create } from 'zustand';

export type Controls = {
  search: string;
  page: number;
  rows: number;
  orderByField: 'nome' | 'apelido' | 'cpf' | 'ativoPrograma';
  orderByDirection: 'asc' | 'desc';
  filter: 0 | 1 | 2;
};

type UseTableControl = {
  controls: Controls;
  setControls: (controls: Controls) => void;
  resetState: () => void;
};

const initialState: Controls = {
  search: '',
  page: 0,
  rows: 5,
  orderByField: 'nome',
  orderByDirection: 'asc',
  filter: 0,
};

export const useTableControl = create<UseTableControl>((set) => ({
  controls: initialState,
  setControls: (controls) => {
    set((state) => ({ ...state, controls: controls }));
  },
  resetState: () => set((state) => ({ ...state, controls: initialState })),
}));

