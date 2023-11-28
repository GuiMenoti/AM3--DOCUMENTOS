import { v4 } from 'uuid';

type Inputs = {
  id: string;
  label: string;
  value: string;
  loading: boolean;
  gridProps?: {
    [key: string]: any;
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

export const dataAdressFieldsRegister: DataController = {
  id: v4(),
  title: 'Endereço',
  inputs: [
    {
      id: v4(),
      label: 'Cep',
      value: 'cep',
      loading: false,
      textFieldProps: {
        type: 'number',
        sx: {
          "& input[type='number']::-webkit-inner-spin-button": {
            WebkitAppearance: 'none',
          },
        },
      },
    },
    {
      id: v4(),
      label: 'Rua',
      value: 'nomeRua',
      loading: true,
    },
    {
      id: v4(),
      label: 'Bairro',
      value: 'nomeBairro',
      loading: true,
    },
    {
      id: v4(),
      label: 'Número',
      value: 'numCasa',
      loading: false,
      textFieldProps: {
        type: 'number',
        sx: {
          "& input[type='number']::-webkit-inner-spin-button": {
            WebkitAppearance: 'none',
          },
        },
      },
    },
    {
      id: v4(),
      label: 'Cidade',
      value: 'nomeCidade',
      loading: true,
    },
    {
      id: v4(),
      label: 'Estado',
      value: 'uf',
      loading: true,
    },
    {
      id: v4(),
      label: 'Coordenadas',
      value: 'coordenadas',
      loading: false,
      gridProps: {
        lg: 6,
      },
    },
    {
      id: v4(),
      label: 'Ponto de Referência',
      value: 'pontoReferencia',
      loading: false,
      gridProps: {
        lg: 6,
      },
    },
  ],
};
