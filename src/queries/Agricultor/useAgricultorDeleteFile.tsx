import { useMutation, useQueryClient } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';
import { useAlertError } from '../../store/useAlertError';

type Data = {
  idAgricultor: string;
  nomePasta: string;
  nomeDocumento: string;
  agricultorId: string;
};

type AgricultorDeleteFile = {
  id: string;
  access_token: string;
};

function deleteFile({ access_token, id }: AgricultorDeleteFile) {
  return backConnection.delete(`/files/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export const useAgricultorDeleteFile = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (id: string) => deleteFile({ id, access_token }),
    {
      onMutate: () => {
        handleError({
          message: 'Deletando arquivo...',
          status: 'info',
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries('agricultorGetListFiles');
        handleError({
          message: 'Arquivo deletado com sucesso',
          status: 'success',
        });
      },
      onError: () => {
        handleError({
          message: 'Erro ao deletar arquivo',
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
