import { create } from 'zustand';
import { GenericState } from 'generic';

export type SelectedTableState = {
  selectedTable: GenericState;
  selectedClick: (name: any, value: boolean) => void;
  setAllTable: (checked: boolean) => void;
  getSelectedIsTrueLenght: () => number;
  getAllTrueFields: () => string[];
  setFields: (fields: string[]) => void;
  removeFields: (ids: string[]) => void;
};

export const useSelectedTableStore = create<SelectedTableState>((set, get) => ({
  selectedTable: {},
  getSelectedIsTrueLenght: () => {
    const state = get().selectedTable;
    if (state) {
      const selectedValues = Object.values(state);
      const trueCount = selectedValues.reduce((count, value) => {
        if (value === true) {
          return count + 1;
        }
        return count;
      }, 0);
      return trueCount;
    } else {
      return 0;
    }
  },
  getAllTrueFields: () => {
    const state = get().selectedTable;
    const trueFields = Object.keys(state).filter((id) => state[id] === true);
    const trueFieldsAsString = trueFields.map((id) => String(id));
    return trueFieldsAsString;
  },
  selectedClick: (name = '', value = false) => {
    set((state: SelectedTableState) => ({
      ...state,
      selectedTable: {
        ...state.selectedTable,
        [name]: value,
      },
    }));
  },
  setAllTable: (checked) => {
    set((state) => {
      const updatedTable: { [name: string]: boolean } = {};
      for (const key in state.selectedTable) {
        if (state.selectedTable.hasOwnProperty(key)) {
          updatedTable[key] = checked;
        }
      }
      return {
        selectedTable: updatedTable,
      };
    });
  },
  setFields: (fields) => {
    set((state) => ({
      ...state,
      selectedTable: fields?.reduce((acc: any, id: string) => {
        acc[id] = false;
        return acc;
      }, {}),
    }));
  },
  removeFields: (ids: string[]) => {
    set((state) => {
      const updatedTable = { ...state.selectedTable };

      // Remova os IDs do estado selectedTable
      ids.forEach((id) => {
        delete updatedTable[id];
      });

      return {
        selectedTable: updatedTable,
      };
    });
  },
}));
