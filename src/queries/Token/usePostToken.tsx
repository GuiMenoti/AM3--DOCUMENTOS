import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { backConnection } from '../../services/backConnection';
import { useAlertError } from '../../store/useAlertError';
import { useAuth } from '../../store/useAuth';

type DataToken = {
  email: string;
  password: string;
};

const usersMock: DataToken[] = [
  {
    email: 'admin@admin',
    password: 'Admin@1234',
  },
];

function postToken(data: DataToken) {
  return backConnection.post('/TokenPost', data);
}

export const usePostToken = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useAlertError();
  const navigate = useNavigate();
  const { login } = useAuth();
  // const { mutate, isLoading } = useMutation(postToken, {
  //   onSuccess: (data) => {
  //     if (data?.data.statusCode === 400) {
  //       handleError({
  //         message: 'Erro ao fazer login',
  //         status: 'error',
  //         open: true,
  //       });
  //       return;
  //     }
  //     login(data?.data?.value?.token);
  //     handleError({
  //       message: 'Logado com sucesso!',
  //       status: 'success',
  //       open: true,
  //     });
  //     navigate('/dashboard');
  //   },
  //   onError: () => {
  //     handleError({
  //       message: 'Erro ao fazer login',
  //       status: 'error',
  //       open: true,
  //     });
  //   },
  // });

  const mutate = (data: DataToken) => {
    setIsLoading(true);

    const dataString = JSON.stringify(data);
    const usersMockStrings = usersMock.map((user) => JSON.stringify(user));

    if (usersMockStrings.includes(dataString)) {
      handleError({
        message: 'Logado com sucesso',
        status: 'success',
        open: true,
      });
      setTimeout(() => {
        setIsLoading(false);
        login('teste');
      }, 2000);
    } else {
      handleError({
        message: 'Erro ao fazer login',
        status: 'error',
        open: true,
      });
    }
  };

  return {
    mutate,
    isLoading,
  };
};
