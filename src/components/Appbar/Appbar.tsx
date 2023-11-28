import { AppBar as MuiAppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ListIcon from '@mui/icons-material/List';
import { useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { StyledContainerIconsAppBar, StyledIconMenu } from './Appbar.style';
import { Notifications } from '../Notifications/Notifications';
import Profile from '../Profile/Profile';
import { useSidebarOpen } from '../../store/useSidebarOpen';

export default function AppBar() {
  const theme: ThemeOptions = useTheme();
  const { openSidebar } = useSidebarOpen();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar
        position="static"
        color={'transparent'}
        sx={{
          boxShadow: `0px 0.5px ${theme.palette.color.borderInput}`,
          transition: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <StyledIconMenu
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => openSidebar()}
          >
            <ListIcon />
          </StyledIconMenu>
          <StyledContainerIconsAppBar>
            <Notifications />
            <Profile />
          </StyledContainerIconsAppBar>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}
