import { useQuery } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';

export function getAllIds(access_token: string) {
  return backConnection.get(`/RetornaTodosIdsAgricultor`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export const useGetAllIds = () => {
  const { access_token } = useAuth();
  const { isLoading, isError, isSuccess, data } = useQuery('getAllIds', () =>
    getAllIds(access_token)
  );

  return {
    isLoading,
    isError,
    isSuccess,
    ids: data?.data,
  };
};

