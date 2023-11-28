import { Divider, Grid, Typography } from '@mui/material';
import { dataPersonalFieldsProfile } from '../../controller/Profile/dataPersonalFieldsProfile';

type DataPersonalFieldsViewProps = {
  data: {
    [key: string]: string | null;
  };
};

export function DataPersonalFieldsView({
  data = {},
}: DataPersonalFieldsViewProps) {
  return (
    <>
      <Typography variant="h6" mb={2}>
        {dataPersonalFieldsProfile.title}
      </Typography>
      <Grid container spacing={2}>
        {dataPersonalFieldsProfile.inputs.map((field) => {
          return (
            <Grid key={field.id} item md={6} xs={6} lg={4} {...field.gridProps}>
              <Typography
                variant={'caption'}
                display={'block'}
                fontWeight={'bold'}
              >
                {`${field.label}:`}
              </Typography>
              <Typography variant={'body2'}>{data[field.value]}</Typography>
            </Grid>
          );
        })}
      </Grid>
      <Divider
        sx={{
          margin: '20px 0',
        }}
      />
    </>
  );
}
