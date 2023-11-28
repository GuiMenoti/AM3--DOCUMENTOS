import { yupResolver } from '@hookform/resolvers/yup';
import { Grid, Paper, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import { useAgricultorGetId } from '../../queries/Agricultor/useAgricultorGetId';
import { useAgricultorPut } from '../../queries/Agricultor/useAgricultorPut';
import { convertDataToBackJson } from '../../utils/convertDataToBackJson';
import { ButtonWithIcon } from '../ButtonWithIcon/ButtonWithIcon';
import { PaperProfilePhoto } from '../PaperProfilePhoto/PaperProfilePhoto';
import { DataAdditionalFieldsEdit } from './DataAdditionalFields-edit';
import { DataAdressFieldsEdit } from './DataAdressFields-edit';
import { DataPersonalFieldsEdit } from './DataPersonalFields-edit';
import { schemaAgricultorGetFields } from './schema';

export function PaperProfileAgricultorEdit() {
  const theme: ThemeOptions = useTheme();
  const { id } = useParams();
  const paramsId = id?.replace(':', '');
  const { data, isLoading } = useAgricultorGetId(paramsId);
  const { mutate } = useAgricultorPut(paramsId);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(yup.object(schemaAgricultorGetFields).required()),
  });

  const onSubmit = (dataForm: any) => {
    const dataJson = convertDataToBackJson(dataForm);
    if (dataJson) {
      mutate(dataJson);
    }
  };

  return (
    <>
      {!isLoading && (
        <Grid item container spacing={{ xs: 3, lg: 3 }}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <PaperProfilePhoto
              register={register}
              ativo={
                watch('ativoPrograma') === undefined
                  ? data?.ativoPrograma
                  : watch('ativoPrograma')
              }
              ativoData={data?.ativoPrograma}
              edit
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={8}>
            <Paper
              variant="elevation"
              sx={{
                p: '24px',
                maxHeight: '100%',
                backgroundColor: theme.palette.color.backgroundColor,
                borderRadius: '16px',
              }}
            >
              <DataPersonalFieldsEdit
                data={data}
                errors={errors}
                register={register}
              />
              <DataAdressFieldsEdit
                errors={errors}
                register={register}
                data={data}
              />
              <DataAdditionalFieldsEdit
                errors={errors}
                register={register}
                data={data}
              />
              <Grid container justifyContent={'flex-end'} marginTop={'15px'}>
                <ButtonWithIcon
                  type={'submit'}
                  limitText
                  onClick={handleSubmit(onSubmit)}
                  disabled={!isDirty}
                >
                  alterar
                </ButtonWithIcon>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
}
