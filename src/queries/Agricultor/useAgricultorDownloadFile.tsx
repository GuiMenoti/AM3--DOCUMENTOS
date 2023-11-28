import { useMutation } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAlertError } from '../../store/useAlertError';
import { useAuth } from '../../store/useAuth';
import { convertBase64ToFile } from '../../utils/convertBase64ToFile';

type AgricultorDownloadFile = {
  id: string;
  access_token: string;
};

function post({ access_token, id }: AgricultorDownloadFile) {
  return backConnection.get(`/files/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

export const useAgricultorDownloadFile = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (id: any) => post({ id, access_token }),
    {
      onMutate: () => {
        handleError({
          message: 'Baixando arquivo...',
          status: 'info',
        });
      },
      onSuccess: (data) => {
        if (data?.data?.file) {
          const file = convertBase64ToFile(data?.data?.file);
          const link = document.createElement('a');
          link.href = window.URL.createObjectURL(file);
          link.download = data?.data?.name;
          link.click();
          link.remove();
        }

        handleError({
          message: 'Arquivo baixado com sucesso',
          status: 'success',
        });
      },
      onError: () => {
        handleError({
          message: 'Erro ao baixar arquivo',
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
