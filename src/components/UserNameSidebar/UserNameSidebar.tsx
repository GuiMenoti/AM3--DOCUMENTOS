import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export function UserNameSidebar({ m = '25px 0 15px 0' }) {
  const theme: ThemeOptions = useTheme();
  const nome = 'User';

  return (
    <Grid
      container
      bgcolor={`${theme.palette.text.span}40`}
      p={'16px 20px'}
      m={m}
      borderRadius={3}
      alignItems={'center'}
      flexWrap={'nowrap'}
    >
      <Avatar sx={{ backgroundColor: 'orange' }}>{nome.substring(0, 1)}</Avatar>
      <Grid marginLeft={2}>
        <Typography
          variant="subtitle1"
          fontWeight={'bold'}
          color={theme.palette.text.h1}
        >
          {nome}
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.text.p}>
          user
        </Typography>
      </Grid>
    </Grid>
  );
}
