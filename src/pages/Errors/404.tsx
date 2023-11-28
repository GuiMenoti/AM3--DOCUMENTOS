import { Button, Grid, Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import notFound from '../../assets/imgs/404.svg';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function NotFound() {
  const theme: ThemeOptions = useTheme();

  return (
    <Grid
      container
      flexDirection={'column'}
      alignItems="center"
      pt={{ xs: 10, sm: 2 }}
      rowSpacing={4}
    >
      <Grid
        item
        container
        alignItems={'center'}
        justifyContent="center"
        width={{ xs: '22rem', sm: '40rem', md: '40rem' }}
      >
        <img width={'100%'} src={notFound} alt="NotFound" />
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="space-between"
        flexDirection={'column'}
        rowSpacing={{ xs: 5, md: 5 }}
      >
        <Grid item>
          <Typography variant="h4" fontWeight={'bold'} textAlign="center">
            Página não encontrada
          </Typography>
        </Grid>
        <Grid item>
          <Link to={'/'}>
            <Button
              variant="text"
              sx={{
                color: 'white',
                padding: '10px 15px',
                '&:hover': {
                  backgroundColor: `${theme.palette.color.primary}`,
                },
              }}
              startIcon={<KeyboardReturnIcon />}
            >
              Voltar para a página Inicial
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}
