import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {
  Button,
  Grid,
  IconButton,
  InputLabel,
  Typography,
} from '@mui/material';
import { useCallback, useRef, useState } from 'react';
import { dataFilesFieldRegister } from '../../controller/Register/dataFilesFieldRegister';

type FilesFields = {
  errors: any;
  register: any;
  reset: any;
};

type FilesLength = {
  anexoTalao: number;
  contrato: number;
  identidade: number;
};

export function FilesFields({ errors, register, reset }: FilesFields) {
  // State para a mensagem de quantidade de arquivos
  const [filesLength, setFileLength] = useState<FilesLength>({
    anexoTalao: 0,
    contrato: 0,
    identidade: 0,
  });

  // Usado para linkar o onClick do input ao Button
  const refFiles: any = {
    anexoTalao: useRef(null),
    contrato: useRef(null),
    identidade: useRef(null),
  };

  // Controlador do React-Hook-Form
  const registerFiles: any = {
    anexoTalao: register('anexoTalao'),
    contrato: register('contrato'),
    identidade: register('identidade'),
  };

  const fileCount = useCallback(
    (fileLength: number) => {
      if (fileLength) {
        if (fileLength > 1) {
          return `${fileLength} arquivos`;
        } else if (fileLength === 1) {
          return `${fileLength} arquivo`;
        }
        return `Adicionar arquivo`;
      }
      return `Adicionar arquivo`;
    },
    [filesLength]
  );

  return (
    <>
      <Typography variant="overline" sx={{ fontSize: '14px' }}>
        Arquivos
      </Typography>
      <Grid container rowGap={2} rowSpacing={0.5} mt={0.5}>
        {dataFilesFieldRegister.map((value) => {
          const { ref, onChange, ...rest } = registerFiles[value.field];

          return (
            <Grid item md={12} sm={12} xs={12} lg={12} key={value.id}>
              <InputLabel variant="standard" sx={{ width: '100%' }}>
                <Typography
                  variant="body2"
                  color={!!errors[value.field] ? 'error' : 'primary'}
                  mb={1}
                >
                  {value.label}
                </Typography>
                <Grid container columnSpacing={1}>
                  <Grid item xs={9.6} sm={11} md={11.2} lg={11.5}>
                    <Button
                      fullWidth
                      variant="outlined"
                      size="large"
                      color={!!errors[value.field] ? 'error' : 'primary'}
                      onClick={() => refFiles[value.field].current?.click()}
                    >
                      {fileCount(filesLength[value.field as keyof FilesLength])}
                    </Button>
                  </Grid>
                  <Grid item xs={1.4} sm={1} md={0.8} lg={0.5}>
                    <IconButton
                      aria-label={value.label}
                      onClick={() => {
                        const inputElement = refFiles[value.field].current;
                        if (inputElement) {
                          const emptyFileList = new DataTransfer().files;
                          inputElement.files = emptyFileList;
                          setFileLength((prev) => ({
                            ...prev,
                            [value.field]: 0,
                          }));
                          reset({ [value.field]: emptyFileList });
                        }
                      }}
                      color="error"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </InputLabel>
              <input
                type="file"
                ref={(e) => {
                  refFiles[value.field].current = e;
                  ref(e);
                }}
                accept="application/pdf, image/jpeg, image/jpg, image/png"
                onChange={(e) => {
                  const inputElement = e.target as HTMLInputElement;
                  if (inputElement.files && inputElement.files.length > 0) {
                    setFileLength((prev) => ({
                      ...prev,
                      // @ts-ignore
                      [value.field]: e.target.files.length,
                    }));
                  } else {
                    setFileLength((prev) => ({
                      ...prev,
                      // @ts-ignore
                      [value.field]: 0,
                    }));
                  }
                  onChange(e);
                }}
                multiple
                hidden
                {...rest}
              />
              {!!errors[value.field] && (
                <Typography pl={2} variant="caption" color={'error'}>
                  {errors[value.field]?.message?.toString()}
                </Typography>
              )}
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
