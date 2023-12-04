import AddIcon from '@mui/icons-material/Add';
import { CssBaseline, Typography, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ThemeOptions } from '@mui/material/styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { ButtonWithIcon } from '../../components/ButtonWithIcon/ButtonWithIcon';
import TableData from '../../components/Table/Table';
import { usePaths } from '../../hooks/usePaths';
import { useAgricultorGetAll } from '../../queries/Agricultor/useAgricultorGetAll';
import { useGetAllIds } from '../../queries/Agricultor/useGetAllIds';
import { useSelectedTableStore } from '../../store/useSelectedTableStore';
import { useQueryClient } from 'react-query';

export default function AgricultorConsultar() {
  const { current } = usePaths();
  const theme: ThemeOptions = useTheme();
  const navigate = useNavigate();
  const { data, isFetching, countItems } = useAgricultorGetAll();
  const { ids } = useGetAllIds();
  const { setFields } = useSelectedTableStore();
  const queryClient = useQueryClient();
  queryClient.invalidateQueries('agricultorGetListFiles');

  useEffect(() => {
    if (ids) {
      setFields(ids);
    }
  }, [ids]);

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
          <Typography p={'10px 0'} variant={'h5'} color={theme.palette.text.h1}>
           Departamentos
          </Typography>
          <Breadcrumbs />
        </Grid>
        <ButtonWithIcon
          icon={<AddIcon />}
          onClick={() => navigate('../../registrar/agricultor')}
        >
          Novo
        </ButtonWithIcon>
      </Grid>
      <TableData data={data} isLoading={isFetching} countItems={countItems} />
    </Grid>
  );
}
