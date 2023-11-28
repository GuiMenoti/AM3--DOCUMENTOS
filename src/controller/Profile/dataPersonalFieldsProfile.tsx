import { v4 } from 'uuid';

type Inputs = {
  id: string;
  label: string;
  value: string;
  gridProps?: {
    [key: string]: string | number | boolean;
  };
  textFieldProps?: {
    [key: string]: any;
  };
};

type DataController = {
  id: string;
  title: string;
  inputs: Inputs[];
};

export const dataPersonalFieldsProfile: DataController = {
  id: v4(),
  title: 'Dados Pessoais',
  inputs: [
    {
      id: v4(),
      label: 'Nome',
      value: 'nome',
      textFieldProps: { disabled: true },
    },
    {
      id: v4(),
      label: 'Sobrenome',
      value: 'sobrenome',
      textFieldProps: { disabled: true },
    },
    {
      id: v4(),
      label: 'Apelido',
      value: 'apelido',
    },
    {
      id: v4(),
      label: 'CPF',
      value: 'cpf',
      textFieldProps: {
        disabled: true,
      },
    },
    {
      id: v4(),
      label: 'Data de Nascimento',
      value: 'dataNascimento',
      textFieldProps: { disabled: true },
    },
    {
      id: v4(),
      label: 'Celular',
      value: 'numCelular',
    },
    {
      id: v4(),
      label: 'Telefone Fixo',
      value: 'numTelFixo',
    },
    {
      id: v4(),
      label: 'Email',
      value: 'email',
    },
  ],
};

