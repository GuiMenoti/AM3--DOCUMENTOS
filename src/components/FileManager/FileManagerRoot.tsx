import { Card, Grid, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export function FileManagerRoot({ children }: { children: React.ReactNode }) {
  const theme: ThemeOptions = useTheme();

  return (
    <Card
      sx={{
        borderRadius: 2,
        width: '100%',
        backgroundColor: theme.palette.color.paper,
      }}
    >
      <Grid>{children}</Grid>
    </Card>
  );
}
