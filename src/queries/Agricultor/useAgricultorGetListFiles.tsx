import { useQuery } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAlertError } from '../../store/useAlertError';

interface Get {
  id: string | undefined;
  access_token: string;
}

function getAll({ id, access_token }: Get) {
  if (id) {
    return backConnection.get(`/files?idAgricultor=${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
}

export const useAgricultorGetListFiles = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { id } = useParams();
  const { isLoading, isError, isSuccess, data, isFetching } = useQuery(
    'agricultorGetListFiles',
    () =>
      getAll({
        id: id?.replace(':', ''),
        access_token: access_token,
      }),
    {
      staleTime: Infinity,
      onError: () => {
        handleError({
          message: 'Erro ao carregar arquivos',
          status: 'error',
        });
      },
    }
  );

  return {
    isLoading,
    isError,
    isSuccess,
    isFetching,
    data: {
      anexoTalao:
        data?.data &&
        data?.data?.filter((file: any) => file.tipoArquivo === 'ANEXOTALAO'),
      contrato:
        data?.data &&
        data?.data?.filter((file: any) => file.tipoArquivo === 'CONTRATO'),
      identidade:
        data?.data &&
        data?.data?.filter((file: any) => file.tipoArquivo === 'IDENTIDADE'),
    },
  };
};
