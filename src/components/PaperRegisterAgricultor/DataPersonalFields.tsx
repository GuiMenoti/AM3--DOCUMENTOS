import { Divider, Grid, TextField, Typography } from '@mui/material';
import { AddAPhoto } from '../AddPhoto/AddPhoto';
import { v4 } from 'uuid';
import { DateInput } from './DateInput';
import { parseISO } from 'date-fns';

type DataPersonalFieldsProps = {
  errors: any;
  register: any;
  setValue: any;
  watch: any;
};

export function DataPersonalFields({
  errors,
  register,
  setValue,
  watch,
}: DataPersonalFieldsProps) {
  return (
    <>
      <Typography variant="overline" sx={{ fontSize: '14px' }}>
        Dados pessoais
      </Typography>
      <Grid container spacing={2} justifyContent={'center'} mt={0.5}>
        <Grid
          item
          alignItems={'center'}
          justifyContent={'center'}
          flexDirection={'row'}
          xs={12}
          sm={12}
          md={4}
          lg={4}
        >
          <Grid
            item
            container
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            padding={'40px 0'}
            sm={12}
            xs={12}
          >
            <AddAPhoto />
            <Typography
              variant={'caption'}
              whiteSpace={'nowrap'}
              marginTop={'20px'}
            >
              Permitido: jpeg, jpg, png e svg
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          sm={12}
          xs={13}
          md={8}
          lg={8}
          flexDirection={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-between'}
          rowSpacing={2}
          columnSpacing={2}
        >
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <TextField
              fullWidth
              id={v4()}
              variant="outlined"
              label="Nome"
              error={!!errors['nome']}
              helperText={errors['nome']?.message?.toString()}
              {...register('nome')}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <TextField
              fullWidth
              id={v4()}
              variant="outlined"
              label="Sobrenome"
              error={!!errors['sobrenome']}
              helperText={errors['sobrenome']?.message?.toString()}
              {...register('sobrenome')}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <TextField
              fullWidth
              id={v4()}
              variant="outlined"
              label="Apelido"
              error={!!errors['apelido']}
              helperText={errors['apelido']?.message?.toString()}
              {...register('apelido')}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <TextField
              fullWidth
              id={v4()}
              variant="outlined"
              label="CPF"
              error={!!errors['cpf']}
              helperText={errors['cpf']?.message?.toString()}
              type="number"
              sx={{
                "& input[type='number']::-webkit-inner-spin-button": {
                  WebkitAppearance: 'none',
                },
              }}
              {...register('cpf')}
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <DateInput
              id={v4()}
              label="Data de Nascimento"
              slotProps={{
                textField: {
                  error: !!errors['dataNascimento'],
                  helperText: errors['dataNascimento']?.message?.toString(),
                },
              }}
              onChange={(date: Date | null) => {
                setValue('dataNascimento', date);
              }}
              value={watch('dataNascimento') ? watch('dataNascimento') : null}
              disableFuture
            />
          </Grid>
          <Grid item sm={12} xs={12} md={6} lg={6}>
            <TextField
              fullWidth
              id={v4()}
              variant="outlined"
              label="Celular"
              error={!!errors['numCelular']}
              helperText={errors['numCelular']?.message?.toString()}
              placeholder={'51999999999'}
              type="number"
              sx={{
                "& input[type='number']::-webkit-inner-spin-button": {
                  WebkitAppearance: 'none',
                },
              }}
              {...register('numCelular')}
            />
          </Grid>
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6}>
          <TextField
            fullWidth
            id={v4()}
            variant="outlined"
            label="Telefone Fixo"
            error={!!errors['numTelFixo']}
            helperText={errors['numTelFixo']?.message?.toString()}
            placeholder={'5199999999'}
            type="number"
            sx={{
              "& input[type='number']::-webkit-inner-spin-button": {
                WebkitAppearance: 'none',
              },
            }}
            {...register('numTelFixo')}
          />
        </Grid>
        <Grid item md={6} sm={12} xs={12} lg={6}>
          <TextField
            fullWidth
            id={v4()}
            variant="outlined"
            label="Email"
            error={!!errors['email']}
            helperText={errors['email']?.message?.toString()}
            {...register('email')}
          />
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

