import { Grid, Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { Cloud } from '@mui/icons-material';

export function EmptyData() {
  const theme: ThemeOptions = useTheme();
  return (
    <Grid
      container
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      p={'20px 0 0 0'}
    >
      <Cloud
        sx={{
          width: '8em',
          height: '8em',
          color: theme.palette.color.borderInput,
        }}
      />
      <Typography variant="h6">Nada encontrado</Typography>
      <ManageSearchIcon
        sx={{
          position: 'relative',
          top: '-160px',
          left: '0px',
          width: '3em',
          height: '3em',
          color: theme.palette.text.button,
        }}
      />
    </Grid>
  );
}
