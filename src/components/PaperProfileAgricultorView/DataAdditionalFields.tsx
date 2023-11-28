import { Grid, Typography } from '@mui/material';
import { dataAdditionalFieldsProfile } from '../../controller/Profile/dataAdditionalFieldsProfile';

type DataAdditionalFieldsViewProps = {
  data: {
    [key: string]: string | null;
  };
};

export function DataAdditionalFieldsView({
  data = {},
}: DataAdditionalFieldsViewProps) {
  return (
    <>
      <Typography variant="h6" mb={2}>
        {dataAdditionalFieldsProfile.title}
      </Typography>
      <Grid container spacing={2}>
        {dataAdditionalFieldsProfile.inputs.map((field) => {
          return (
            <Grid key={field.id} item md={6} xs={6} lg={6} {...field.gridProps}>
              <Typography
                variant={'caption'}
                display={'block'}
                fontWeight={'bold'}
              >
                {`${field.label}`}
              </Typography>
              <Typography variant={'body2'}>{data[field.value]}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
