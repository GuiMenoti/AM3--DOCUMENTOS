import { combineReducers } from 'redux';
import selectedTable from '../store/useSelectedTableStore';
import sidebarStates from '../store/useSidebarStates';
import themeMode from '../store/useThemeMode';
import sidebarOpen from '../store/useSidebarOpen';

const rootReducer = combineReducers({
  sidebarStates: sidebarStates,
  selectedTable: selectedTable,
  sidebarOpen: sidebarOpen,
});

export type RootState = ReturnType<typeof rootReducer>;
