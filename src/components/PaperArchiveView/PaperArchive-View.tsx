import { Button, Grid, Paper, useTheme, Typography } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export function PaperArchiveView() {
  const theme: ThemeOptions = useTheme();
  return (
    <Grid item container>
      <Paper
        variant="elevation"
        sx={{
          width: '100%',
          p: '24px',
          minHeight: '20%',
          maxHeight: '100%',
          backgroundColor: theme.palette.color.backgroundColor,
          borderRadius: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid item container flexDirection={'column'} rowSpacing={3}>
          <Grid item>
            <Typography variant="h6">Arquivos</Typography>
          </Grid>
          <Grid item>
            <Link to={'arquivos'}>
              <Button variant="outlined" fullWidth>
                Abrir arquivos
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

