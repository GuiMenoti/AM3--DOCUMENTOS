import { Divider, Grid, TextField, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { dataAdditionalFieldsRegister } from '../../controller/Register/dataAdditionalFieldsRegister';

type DataAdditionalFields = {
  errors: any;
  register: any;
};

export function DataAdditionalFields({
  errors,
  register,
}: DataAdditionalFields) {
  return (
    <>
      <Typography
        variant="overline"
        sx={{
          fontSize: '14px',
        }}
      >
        {dataAdditionalFieldsRegister.title}
      </Typography>
      <Grid container spacing={2} mt={0.5}>
        {dataAdditionalFieldsRegister.inputs.map((field) => {
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
                fullWidth
                id={v4()}
                variant="outlined"
                label={field.label}
                error={!!errors[field.value]}
                helperText={errors[field.value]?.message?.toString()}
                {...register(field.value)}
                {...(field.textFieldProps || {})}
              />
            </Grid>
          );
        })}
      </Grid>
      <Divider
        sx={{
          margin: '30px 0',
        }}
      />
    </>
  );
}
