import { UserNameSidebar } from '../UserNameSidebar/UserNameSidebar';
import Avatar from '@mui/material/Avatar';
import { IconButton, useTheme } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Grid from '@mui/material/Grid';
import { ThemeOptions } from '@mui/material/styles';
import { useSidebarOpen } from '../../store/useSidebarOpen';

export function HeaderSidebar() {
  const theme: ThemeOptions = useTheme();
  const { closedSidebar } = useSidebarOpen();
  return (
    <Grid container>
      <Grid
        container
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Avatar>H</Avatar>
        <IconButton
          onClick={() => closedSidebar()}
          sx={{ padding: '12px', color: theme.palette.text.button }}
        >
          <MenuOpenIcon />
        </IconButton>
      </Grid>
      <UserNameSidebar />
    </Grid>
  );
}
