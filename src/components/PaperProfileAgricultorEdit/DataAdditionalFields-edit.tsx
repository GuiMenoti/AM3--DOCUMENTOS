import { Grid, TextField, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { dataAdditionalFieldsProfile } from '../../controller/Profile/dataAdditionalFieldsProfile';

type DataAdditionalFields = {
  errors: any;
  register: any;
  data: {
    [key: string]: any;
  };
};

export function DataAdditionalFieldsEdit({
  errors,
  register,
  data = {},
}: DataAdditionalFields) {
  return (
    <>
      <Typography
        variant="overline"
        sx={{
          fontSize: '14px',
        }}
      >
        {dataAdditionalFieldsProfile.title}
      </Typography>
      <Grid container spacing={2} mt={0.5}>
        {dataAdditionalFieldsProfile.inputs.map((field) => {
          return (
            <Grid
              key={field.id}
              item
              md={6}
              sm={12}
              xs={12}
              lg={6}
              {...field.gridProps}
            >
              <TextField
                {...field.textFieldProps}
                fullWidth
                id={v4()}
                variant="outlined"
                label={field.label}
                error={!!errors[field.value]}
                helperText={errors[field.value]?.message?.toString()}
                defaultValue={data[field.value]}
                {...register(field.value)}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

