import { Divider, Grid, Typography } from '@mui/material';
import { dataAdressFieldsProfile } from '../../controller/Profile/dataAdressFieldsProfile';

type DataAdressFieldsViewProps = {
  data: {
    [key: string]: string | null;
  };
};

export function DataAdressFieldsView({ data = {} }: DataAdressFieldsViewProps) {
  return (
    <>
      <Typography variant="h6" mb={2}>
        {dataAdressFieldsProfile.title}
      </Typography>
      <Grid container spacing={2}>
        {dataAdressFieldsProfile.inputs.map((field) => {
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
