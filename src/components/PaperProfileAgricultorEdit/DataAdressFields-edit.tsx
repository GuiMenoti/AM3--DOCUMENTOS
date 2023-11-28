import { Divider, Grid, TextField, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { dataAdressFieldsProfile } from '../../controller/Profile/dataAdressFieldsProfile';

type AdressFields = {
  errors: any;
  register: any;
  data: {
    [key: string]: any;
  };
};

export function DataAdressFieldsEdit({
  errors,
  register,
  data = {},
}: AdressFields) {
  return (
    <>
      <Typography variant="overline" sx={{ fontSize: '14px' }}>
        {dataAdressFieldsProfile.title}
      </Typography>
      <Grid container spacing={2} mt={0.5}>
        {dataAdressFieldsProfile.inputs.map((field) => {
          return (
            <Grid
              key={field.id}
              item
              md={6}
              sm={12}
              xs={12}
              lg={4}
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
                {...register(field.value)}
                defaultValue={data[field.value]}
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

