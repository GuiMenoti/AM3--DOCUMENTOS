import { Grid, Paper, Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { AntSwitch } from '../AntSwitch/AntSwitch.style';
import { AtivoStatus } from '../AtivoStatus/AtivoStatus';
import { ProfilePhotoEdit } from '../ProfilePhotoEdit/ProfilePhotoEdit';
import { ProfilePhotoView } from '../ProfilePhotoView/ProfilePhotoView';

type PaperProfilePhotoProps = {
  register?: any;
  ativo: boolean;
  ativoData?: boolean;
  edit?: boolean;
};

export function PaperProfilePhoto({
  register,
  ativo = false,
  ativoData = false,
  edit = false,
}: PaperProfilePhotoProps) {
  const theme: ThemeOptions = useTheme();

  return (
    <Grid item sx={{ width: '100%' }}>
      <Paper
        variant="elevation"
        sx={{
          p: '24px',
          minHeight: '20%',
          maxHeight: '100%',
          backgroundColor: theme.palette.color.backgroundColor,
          borderRadius: '16px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Grid
          container
          wrap={'wrap'}
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'row'}
        >
          <Grid container justifyContent={'flex-end'}>
            <AtivoStatus ativo={ativo} />
          </Grid>
          <Grid
            item
            container
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={'40px 0'}
            sm={12}
            xs={12}
          >
            {edit ? <ProfilePhotoEdit /> : <ProfilePhotoView />}
            <Grid
              container
              alignItems={'center'}
              justifyContent={'space-between'}
              marginTop={'50px'}
            >
              <Grid>
                <Typography variant="subtitle1">Status</Typography>
                <Typography variant="subtitle2">
                  Aplicar inatividade ao usuário
                </Typography>
              </Grid>
              <AntSwitch
                inputProps={{ 'aria-label': 'ant design' }}
                sx={{ width: 30 }}
                disabled={!edit}
                {...(register ? register('ativoPrograma') : {})}
                defaultChecked={ativoData}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
