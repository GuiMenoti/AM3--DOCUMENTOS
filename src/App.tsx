import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeMode, useThemeMode } from './store/useThemeMode';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import { GlobalStyles } from './styles/global.style';
import { useNprogress } from './hooks/useNProgress';
import { Outlet } from 'react-router-dom';
import { queryClient } from './services/queryClient';
import { QueryClientProvider } from 'react-query';
import { ErrorBoundary } from 'react-error-boundary';
import BadRequest from './pages/Errors/400';
import { ErrorMessage } from './components/ErrorMessage/ErrorMessage';

function App() {
  const { theme }: ThemeMode = useThemeMode();
  useNprogress();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ErrorBoundary FallbackComponent={BadRequest}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <GlobalStyles>
            <Outlet />
            <ErrorMessage />
          </GlobalStyles>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
