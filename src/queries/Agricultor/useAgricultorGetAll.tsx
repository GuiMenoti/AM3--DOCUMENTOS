import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAlertError } from '../../store/useAlertError';
import { useAuth } from '../../store/useAuth';
import { Controls, useTableControl } from '../../store/useTableControl';

interface AddingToken extends Controls {
  access_token: string;
}

export function getAll({
  filter,
  search,
  page,
  rows,
  orderByField,
  orderByDirection,
  access_token,
}: AddingToken) {
  const path = [null, true, false];

  return backConnection.get(
    `/agricultor?_page=${page + 1}&_limit=${rows}&${
      path[filter] !== null && `ativoPrograma=${path[filter]}`
    }&_sort=${orderByField}&_order=${orderByDirection}&q=${search}
    `,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
}

export const useAgricultorGetAll = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { controls } = useTableControl();
  const { isLoading, isError, isSuccess, data, refetch, isFetching } = useQuery(
    'agricultorGetAll',
    () => getAll({ ...controls, access_token: access_token }),
    {
      onError: () => {
        handleError({
          message: 'Erro ao carregar agricultores',
          status: 'error',
        });
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [controls]);

  return {
    isLoading,
    isError,
    isSuccess,
    isFetching,
    data: data?.data,
    countItems: parseInt(data?.headers['x-total-count']),
  };
};
