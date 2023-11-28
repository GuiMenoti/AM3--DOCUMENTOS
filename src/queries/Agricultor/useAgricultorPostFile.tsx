import { useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAlertError } from '../../store/useAlertError';
import { useAuth } from '../../store/useAuth';
import { v4 } from 'uuid';

type Data = {
  idAgricultor: string;
  tipoArquivo: string;
  name: string;
  file: string | unknown;
};

type AgricultorPost = {
  data: Data;
  access_token: string;
};

function post({ access_token, data }: AgricultorPost) {
  return backConnection.post(
    `/files`,
    {
      idAgricultor: data.idAgricultor,
      id: v4(),
      name: data.name,
      tipoArquivo: data.tipoArquivo,
      file: data.file,
    },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
}

export const useAgricultorPostFile = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (data: Data) => post({ data, access_token }),
    {
      onMutate: () => {
        handleError({
          message: 'Adicionando arquivo...',
          status: 'info',
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries('agricultorGetListFiles');
        handleError({
          message: 'Arquivo adicionado com sucesso',
          status: 'success',
        });
      },
      onError: () => {
        handleError({
          message: 'Erro ao adicionar arquivo',
          status: 'error',
        });
      },
    }
  );

  return {
    mutate,
    isLoading,
    isError,
    isSuccess,
  };
};
