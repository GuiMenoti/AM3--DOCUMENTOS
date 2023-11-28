import { CircularProgress, Grid, Paper, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import { useAgricultorGetId } from '../../queries/Agricultor/useAgricultorGetId';
import { PaperProfilePhoto } from '../PaperProfilePhoto/PaperProfilePhoto';
import { DataAdditionalFieldsView } from './DataAdditionalFields';
import { DataAdressFieldsView } from './DataAdressFields-view';
import { DataPersonalFieldsView } from './DataPersonalFields-view';
import { PaperArchiveView } from '../PaperArchiveView/PaperArchive-View';

export function PaperProfileAgricultorView() {
  const theme: ThemeOptions = useTheme();
  const { id } = useParams();
  const paramsId = id?.replace(':', '');
  const { data, isLoading } = useAgricultorGetId(paramsId);

  return (
    <>
      {!isLoading && (
        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          lg={4}
          rowSpacing={{ xs: 3, lg: 0 }}
        >
          <PaperProfilePhoto
            ativoData={data?.ativoPrograma}
            ativo={data?.ativoPrograma}
          />
          <PaperArchiveView />
        </Grid>
      )}
      <Grid item xs={12} sm={12} md={12} lg={8}>
        <Paper
          variant="elevation"
          sx={{
            p: '24px',
            maxHeight: '100%',
            backgroundColor: theme.palette.color.backgroundColor,
            borderRadius: '16px',
          }}
        >
          <DataPersonalFieldsView data={data} />
          <DataAdressFieldsView data={data} />
          <DataAdditionalFieldsView data={data} />
        </Paper>
      </Grid>
    </>
  );
}
