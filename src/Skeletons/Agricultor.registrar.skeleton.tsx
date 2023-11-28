import { Grid, Skeleton, useTheme } from '@mui/material';

export function AgricultorRegistrarSkeleton() {
  const theme = useTheme();
  return (
    <Grid
      container
      flexDirection={'column'}
      alignItems={'center'}
      m={'20px 0 0 0'}
      p={'0 5vw 40px 5vw'}
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
          container
          justifyContent={'flex-start'}
          flexDirection={'column'}
          marginBottom={5}
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
      </Grid>
      <Grid
        container
        flexDirection={'row'}
        justifyContent={'center'}
        spacing={3}
        marginTop={-6}
      >
        <Grid item xs={12} sm={12} md={12} lg={4}>
          <Skeleton variant="rounded" height={300} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8}>
          <Skeleton variant="rounded" height={300} />
        </Grid>
      </Grid>
    </Grid>
  );
}

