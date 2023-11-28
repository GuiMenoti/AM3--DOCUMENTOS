import { Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { AddAPhoto } from '../AddPhoto/AddPhoto';

export function PaperAddPhoto() {
  const theme: ThemeOptions = useTheme();

  return (
    <Grid item xs={12} sm={12} md={12} lg={4}>
      <Paper
        variant="elevation"
        sx={{
          p: '24px',
          minHeight: '40%',
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
            <AddAPhoto />
            <Typography
              variant={'caption'}
              whiteSpace={'nowrap'}
              marginTop={'20px'}
            >
              Permitido: jpeg, jpg, png e svg
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}
