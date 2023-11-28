import { Grid, List } from '@mui/material';
import { EmptyData } from '../EmptyData/EmptyData';

export function FileManagerList({ children }: { children: JSX.Element[] }) {
  return (
    <Grid item xs={12}>
      <div>
        {children?.length === 0 && <EmptyData />}
        <List>{children}</List>
      </div>
    </Grid>
  );
}
