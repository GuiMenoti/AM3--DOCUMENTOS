import { yupResolver } from '@hookform/resolvers/yup';
import { CircularProgress, Grid, Paper, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAgricultorPost } from '../../queries/Agricultor/useAgricultorPost';
import { useCep } from '../../store/useCep';
import { convertDataToBackFormData } from '../../utils/convertDataToBackFormData';
import { ButtonWithIcon } from '../ButtonWithIcon/ButtonWithIcon';
import { DataAdditionalFields } from './DataAdditionalFields';
import { DataAdressFields } from './DataAdressFields';
import { FilesFields } from './DataFilesField';
import { DataPersonalFields } from './DataPersonalFields';
import {
  Agricultor,
  initialStateAgricultorPostFields,
  schemaAgricultorPostFields,
} from './schema';
import { convertFileToBase64 } from '../../utils/convertFileToBase64';
import { v4 } from 'uuid';

export function PaperRegisterAgricultor() {
  const theme: ThemeOptions = useTheme();
  const { mutate, isLoading, isError, isSuccess } = useAgricultorPost();
  const { resetCep } = useCep();

  useEffect(() => {
    if (isSuccess) {
      reset(initialStateAgricultorPostFields);
      resetCep();
    }
  }, [isSuccess, isError]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    setError,
    setFocus,
    formState: { errors },
  } = useForm({
    defaultValues: initialStateAgricultorPostFields,
    resolver: yupResolver(yup.object(schemaAgricultorPostFields).required()),
  });

  const onSubmit = async (data: Partial<Agricultor>) => {
    if (data.anexoTalao.length > 0 && data?.numTalao?.length === 0) {
      setError('numTalao', {
        type: 'manual',
        message: 'Campo obrigatório, caso o anexo do talão seja inserido',
      });
      setFocus('numTalao');
      return;
    }

    data = {
      ...data,
      id: v4(),
      ativo: true,
      ativoPrograma: true,
      anexoTalao: {
        name: data.anexoTalao[0].name,
        file: await convertFileToBase64(data.anexoTalao[0]),
      },
      contrato: {
        name: data.contrato[0].name,
        file: await convertFileToBase64(data.contrato[0]),
      },
      identidade: {
        name: data.identidade[0].name,
        file: await convertFileToBase64(data.identidade[0]),
      },
    };

    mutate(data as Agricultor);
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12}>
      <Paper
        variant="elevation"
        sx={{
          p: '24px',
          maxHeight: '100%',
          backgroundColor: theme.palette.color.backgroundColor,
          borderRadius: '16px',
        }}
      >
        <DataPersonalFields
          errors={errors}
          register={register}
          setValue={setValue}
          watch={watch}
        />
        <DataAdressFields
          errors={errors}
          register={register}
          watch={watch}
          setValue={setValue}
        />
        <DataAdditionalFields errors={errors} register={register} />
        <FilesFields errors={errors} register={register} reset={reset} />
        <Grid container justifyContent={'flex-end'} marginTop={'15px'}>
          <ButtonWithIcon
            type={'submit'}
            limitText
            onClick={handleSubmit(onSubmit)}
          >
            {isLoading ? (
              <CircularProgress
                size={'24px'}
                sx={{ padding: '2px', color: 'white' }}
              />
            ) : (
              ' Criar agricultor'
            )}
          </ButtonWithIcon>
        </Grid>
      </Paper>
    </Grid>
  );
}
