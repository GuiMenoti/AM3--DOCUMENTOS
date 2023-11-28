import { CssBaseline, Grid, Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { usePaths } from '../../hooks/usePaths';
import { AccordionList } from '../../components/AccordionList/AccordionList';
import { config } from '.';

export default function Help() {
  const { current } = usePaths();
  const theme: ThemeOptions = useTheme();

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
            {current?.name}
          </Typography>
          <Breadcrumbs />
        </Grid>
      </Grid>
      <Grid item container flexDirection={'column'} rowSpacing={1}>
        {config.map((item) => (
          <Grid item>
            <AccordionList
              key={item.id}
              id={item.id}
              title={item.title}
              dataTexts={item.dataTexts}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
