import ClearIcon from '@mui/icons-material/Clear';
import { CssBaseline, Grid, Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../components/Breadcrumbs/Breadcrumbs';
import { ButtonWithIcon } from '../../../components/ButtonWithIcon/ButtonWithIcon';
import { PaperProfileAgricultorEdit } from '../../../components/PaperProfileAgricultorEdit/PaperProfileAgricultorEdit';

export default function AgricultorProfileEdit() {
  const theme: ThemeOptions = useTheme();
  const { id } = useParams();
  const paramsId = id?.replace(':', '');
  const navigate = useNavigate();

  return (
    <Grid
      container
      flexDirection={'column'}
      alignItems={'center'}
      m={'40px 0'}
      p={'0 5vw'}
      sx={{ minWidth: '0' }}
    >
      <CssBaseline />
      <>
        <Grid
          container
          justifyContent={'space-between'}
          flexDirection={'row'}
          width={'100%'}
          m={'0 0 50px 0'}
          sx={{
            '@media (max-width: 700px)': {
              flexDirection: 'column !important',
              margin: '0 0 10px 0',
            },
          }}
        >
          <Grid>
            <Typography
              p={'10px 0'}
              variant={'h5'}
              color={theme.palette.text.h1}
            >
              Agricultor
            </Typography>
            <Breadcrumbs />
          </Grid>
          <ButtonWithIcon
            onClick={() => navigate(`../../ver/${id}`)}
            icon={<ClearIcon />}
            ismode
          >
            Cancelar
          </ButtonWithIcon>
        </Grid>
        <Grid
          container
          flexDirection={'row'}
          justifyContent={'center'}
          spacing={3}
          marginTop={-5}
        >
          <PaperProfileAgricultorEdit />
        </Grid>
      </>
    </Grid>
  );
}
