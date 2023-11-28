import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';
import { useCep } from '../../store/useCep';
import { useAlertError } from '../../store/useAlertError';

interface GetCep {
  cep: string;
  access_token: string;
}

function get({ cep, access_token }: GetCep) {
  if (cep.length === 8) {
    return backConnection.get(`/CepGet?cep=${cep}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  }
}

export const useCepGet = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { cep } = useCep();
  const { isLoading, isError, isSuccess, data, refetch, isFetching } = useQuery(
    'cepGet',
    () => get({ cep, access_token }),
    {
      staleTime: Infinity,
      onError: () => {
        handleError({
          message: 'Ocorreu um erro ao carregar o cep',
          status: 'error',
          open: true,
        });
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [cep]);

  return {
    isLoading,
    isError,
    isSuccess,
    isFetching,
    data: isFetching ? [] : data?.data.value,
    refetch,
  };
};

