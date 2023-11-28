import { Grid, Skeleton, useTheme } from '@mui/material';

export function AgricultorConsultarSkeleton() {
  const theme = useTheme();

  return (
    <Grid
      container
      flexDirection={'column'}
      alignItems={'center'}
      m={'40px 0'}
      p={'0 5vw'}
      sx={{ minWidth: '0' }}
    >
      <Grid
        container
        justifyContent={'space-between'}
        alignItems={'center'}
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
        <Grid
          sx={{
            [theme.breakpoints.up('xs')]: {
              width: '100%',
            },
            [theme.breakpoints.up('sm')]: {
              width: 'auto',
            },
          }}
          justifyContent={'flex-start'}
          flexDirection={'column'}
        >
          <Skeleton
            variant="text"
            sx={{ fontSize: '1rem', margin: '10px 0 0 0' }}
            width={150}
            height={40}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: '1rem' }}
            width={300}
            height={40}
          />
        </Grid>
        <Skeleton
          variant="rounded"
          sx={{
            margin: '10px 0 20px 0',
            [theme.breakpoints.up('xs')]: {
              width: '100%',
            },
            [theme.breakpoints.up('lg')]: {
              width: 200,
            },
          }}
          height={40}
        />{' '}
      </Grid>
      <Skeleton variant="rounded" width={'100%'} height={300} />
    </Grid>
  );
}
