import { Divider, Grid, TextField, Typography } from '@mui/material';
import { v4 } from 'uuid';
import { dataPersonalFieldsProfile } from '../../controller/Profile/dataPersonalFieldsProfile';

type DataPersonalFieldsProps = {
  errors: any;
  register: any;
  data: {
    [key: string]: any;
  };
};

export function DataPersonalFieldsEdit({
  errors,
  register,
  data = {},
}: DataPersonalFieldsProps) {
  return (
    <>
      <Typography variant="overline" sx={{ fontSize: '14px' }}>
        {dataPersonalFieldsProfile.title}
      </Typography>
      <Grid container spacing={2} justifyContent={'center'} mt={0.5}>
        <Grid
          container
          item
          flexDirection={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          rowSpacing={2}
          columnSpacing={2}
        >
          {dataPersonalFieldsProfile.inputs.map((field) => {
            return (
              <Grid
                key={field.id}
                item
                sm={12}
                xs={12}
                md={6}
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
                  {...register(field.value)}
                  defaultValue={data[field.value]}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Divider
        sx={{
          margin: '30px 0',
        }}
      />
    </>
  );
}
