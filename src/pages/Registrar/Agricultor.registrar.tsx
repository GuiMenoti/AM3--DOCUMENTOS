import { CssBaseline, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ThemeOptions } from '@mui/material/styles';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { PaperRegisterAgricultor } from '../../components/PaperRegisterAgricultor/PaperRegisterAgricultor';
import { usePaths } from '../../hooks/usePaths';

export default function AgricultorRegistrar() {
  const { current } = usePaths();
  const theme: ThemeOptions = useTheme();

  return (
    <Grid
      container
      flexDirection={'column'}
      alignItems={'center'}
      m={'20px 0 0 0'}
      p={'0 5vw 40px 5vw'}
      sx={{ minWidth: '0' }}
    >
      <CssBaseline />
      <Grid
        container
        justifyContent={'space-between'}
        flexDirection={'row'}
        width={'100%'}
        m={'0 0 50px 0'}
      >
        <Grid>
          <Typography p={'10px 0'} variant={'h5'} color={theme.palette.text.h1}>
            {current?.name}
          </Typography>
          <Breadcrumbs />
        </Grid>
      </Grid>
      <Grid
        container
        flexDirection={'row'}
        justifyContent={'center'}
        spacing={3}
        marginTop={-6}
      >
        <PaperRegisterAgricultor />
      </Grid>
    </Grid>
  );
}
