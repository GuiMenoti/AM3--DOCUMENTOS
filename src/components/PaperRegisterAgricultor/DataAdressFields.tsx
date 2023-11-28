import {
  CircularProgress,
  Divider,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useCallback, useEffect } from 'react';
import { v4 } from 'uuid';
import { dataAdressFieldsRegister } from '../../controller/Register/dataAdressFieldsRegister';
import { useCepGet } from '../../queries/Cep/useCepGet';
import { useCep } from '../../store/useCep';

type AdressFields = {
  errors: any;
  register: any;
  watch: any;
  setValue: any;
};

export function DataAdressFields({
  errors,
  register,
  watch,
  setValue,
}: AdressFields) {
  const { handleCep, resetCep } = useCep();
  const { data, isFetching } = useCepGet();

  useEffect(() => {
    resetCep();
  }, []);

  useEffect(() => {
    if (data && watch('cep')?.length > 0) {
      setValue('nomeRua', data.logradouro);
      setValue('nomeBairro', data.bairro);
      setValue('nomeCidade', data.localidade);
      setValue('uf', data.uf);
    }
  }, [data]);

  const shrinkLabel = useCallback(
    (field: string) => {
      if (watch(field)?.length > 0) {
        return true;
      }

      return undefined;
    },
    [watch]
  );

  return (
    <>
      <Typography variant="overline" sx={{ fontSize: '14px' }}>
        {dataAdressFieldsRegister.title}
      </Typography>
      <Grid container spacing={2} mt={0.5}>
        {dataAdressFieldsRegister.inputs.map((field) => {
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
                fullWidth
                id={v4()}
                variant="outlined"
                label={field.label}
                error={!!errors[field.value]}
                helperText={
                  isFetching && field.loading ? (
                    <CircularProgress size={15} sx={{ mt: 1 }} />
                  ) : (
                    errors[field.value]?.message?.toString()
                  )
                }
                {...register(field.value)}
                {...field.textFieldProps}
                InputLabelProps={{ shrink: shrinkLabel(field.value) }}
                onBlur={(e) => {
                  if (e.target.value.length === 8 && field.value === 'cep') {
                    handleCep(e.target.value);
                  }
                }}
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
