import { Grid, Skeleton, useTheme } from '@mui/material';

export function ErrorSkeleton() {
  const theme = useTheme();

  return (
    <Grid
      container
      height={'100vh'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent="center"
      rowSpacing={3}
      pr={{ xs: 5, sm: 30, md: 50 }}
      pl={{ xs: 5, sm: 30, md: 50 }}
    >
      <Grid item width={'100%'}>
        <Skeleton variant="rounded" width={'100%'} height={400} />
      </Grid>
      <Grid item width={'100%'}>
        <Skeleton variant="rounded" width={'100%'} height={50} />
      </Grid>
      <Grid item width={'100%'}>
        <Skeleton variant="rounded" width={'100%'} height={50} />
      </Grid>
    </Grid>
  );
}
