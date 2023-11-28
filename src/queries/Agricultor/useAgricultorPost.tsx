import { useMutation } from 'react-query';
import { backConnection } from '../../services/backConnection';
import { useAuth } from '../../store/useAuth';
import { useAlertError } from '../../store/useAlertError';
import { Agricultor } from '../../components/PaperRegisterAgricultor/schema';
import { v4 } from 'uuid';

type AgricultorPost = {
  data: Agricultor;
  access_token: string;
};

async function post({ access_token, data }: AgricultorPost) {
  const { anexoTalao, identidade, contrato, ...rest } = data;
  // await backConnection.post(`/files`, {
  //   idAgricultor: rest.id,
  //   id: v4(),
  //   name: anexoTalao.name,
  //   tipoArquivo: 'ANEXOTALAO',
  //   file: anexoTalao.file,
  // });
  // await backConnection.post(`/files`, {
  //   idAgricultor: rest.id,
  //   id: v4(),
  //   name: identidade.name,
  //   tipoArquivo: 'IDENTIDADE',
  //   file: identidade.file,
  // });
  // await backConnection.post(`/files`, {
  //   idAgricultor: rest.id,
  //   id: v4(),
  //   name: contrato.name,
  //   tipoArquivo: 'CONTRATO',
  //   file: contrato.file,
  // });

  return backConnection.post('/agricultor', rest);
}

export const useAgricultorPost = () => {
  const { access_token } = useAuth();
  const { handleError } = useAlertError();
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    (data: Agricultor) => post({ data, access_token }),
    {
      onMutate: () => {
        handleError({
          message: 'Criando Agricultor...',
          status: 'info',
        });
      },
      onSuccess: () => {
        handleError({
          message: 'Agricultor criado com sucesso',
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
    mutate,
    isLoading,
    isError,
    isSuccess,
  };
};
