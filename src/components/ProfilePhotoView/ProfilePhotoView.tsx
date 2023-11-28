import { Avatar, Grid, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export function ProfilePhotoView() {
  const theme: ThemeOptions = useTheme();

  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        width: '160px',
        height: '160px',
        border: `3px dashed ${theme.palette.text.span}`,
        borderRadius: '100%',
        cursor: 'pointer',
      }}
    >
      <Avatar
        sx={{
          backgroundColor: theme.palette.color.borderInput,
          width: '140px',
          height: '140px',
          display: 'flex',
          flexDirection: 'column',
        }}
      ></Avatar>
    </Grid>
  );
}
