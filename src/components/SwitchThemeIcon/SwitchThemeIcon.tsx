import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '../../store/useThemeMode';
import { StyledSwitchThemeIcon } from './SwitchThemeIcon.style';

export function SwitchThemeIcon(): JSX.Element {
  const { theme, switchTheme } = useThemeMode();

  const themeIcon =
    theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />;

  return (
    <StyledSwitchThemeIcon
      id={'tema'}
      size="small"
      edge="start"
      aria-label="Trocar de tema"
      sx={{ m: 1, p: 1, float: 'right' }}
      onClick={() => switchTheme()}
    >
      {themeIcon}
    </StyledSwitchThemeIcon>
  );
}
