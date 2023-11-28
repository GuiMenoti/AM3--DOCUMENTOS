import { useMutation, useQueryClient } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';
import { useAlertError } from '../../store/useAlertError';

type DeleteIds = {
  data: string[];
  access_token: string;
};

const deleteIds = async ({ data, access_token }: DeleteIds) => {
  data.map(async (id) => {
    await backConnection.delete(`/agricultor/${id}`, {
      data,
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  });
};

export const useAgricultorDelete = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const queryClient = useQueryClient();
  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (data: string[]) => deleteIds({ data, access_token }),
    {
      onMutate: () => {
        handleError({
          message: 'Deletando agricultor...',
          status: 'info',
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries('agricultorGetAll');
        handleError({
          message: 'Agricultor deletado com sucesso',
          status: 'success',
        });
      },
      onError: () => {
        handleError({
          message: 'Erro ao apagar agricultor',
          status: 'error',
        });
      },
    }
  );

  return {
    isLoading,
    isError,
    isSuccess,
    mutate,
  };
};
