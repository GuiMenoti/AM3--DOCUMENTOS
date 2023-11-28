import { useQuery } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAlertError } from '../../store/useAlertError';
import { useAuth } from '../../store/useAuth';
import { convertDataToFront } from '../../utils/convertDataToFront';
import { useEffect } from 'react';

type getId = {
  id: string;
  access_token: string;
};

export function getId({ id, access_token }: getId) {
  return backConnection.get(`/agricultor/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export const useAgricultorGetId = (id: string = '') => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { isLoading, isError, isSuccess, data, refetch } = useQuery(
    'agricultorGetId',
    () => getId({ id, access_token }),
    {
      staleTime: Infinity,
      onError: () => {
        handleError({
          message: 'Erro ao carregar agricultor',
          status: 'error',
        });
      },
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  return {
    isLoading,
    isError,
    isSuccess,
    data: convertDataToFront(data?.data),
  };
};
