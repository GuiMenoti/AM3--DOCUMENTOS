import { useMutation, useQueryClient } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';
import { useAlertError } from '../../store/useAlertError';

type Put = {
  data: any;
  id: string | undefined;
  access_token: string;
};

function putAgricultor({ data, id, access_token }: Put) {
  return backConnection.put(`/agricultor/${id}`, data, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  });
}

export const useAgricultorPut = (id: string | undefined) => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const queryClient = useQueryClient();
  const { isLoading, isError, isSuccess, mutate } = useMutation(
    (data: any) => putAgricultor({ data, id, access_token }),
    {
      onMutate: () => {
        handleError({
          message: 'Alterando agricultor...',
          status: 'info',
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries('agricultorGetId');
        handleError({
          message: 'Agricultor alterado com sucesso',
          status: 'success',
        });
      },
      onError: (error: any) => {
        handleError({
          message: error.response.data[0].message,
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
