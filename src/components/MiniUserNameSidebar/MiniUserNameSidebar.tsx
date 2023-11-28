import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Tooltip, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export function MiniUserNameSidebar({ m = '5px 0 15px 0' }) {
  const theme: ThemeOptions = useTheme();
  const nome = 'User';

  return (
    <Tooltip title={nome} placement="right">
      <Grid
        container
        bgcolor={`${theme.palette.text.span}40`}
        p={'10px'}
        m={m}
        borderRadius={3}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Avatar sx={{ backgroundColor: 'orange', width: 35, height: 35 }}>
          {nome.substring(0, 1)}
        </Avatar>
      </Grid>
    </Tooltip>
  );
}
