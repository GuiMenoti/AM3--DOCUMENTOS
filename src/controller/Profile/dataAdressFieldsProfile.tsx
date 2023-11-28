import { v4 } from 'uuid';

type Inputs = {
  id: string;
  label: string;
  value: string;
  loading?: boolean;
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

export const dataAdressFieldsProfile: DataController = {
  id: v4(),
  title: 'Endereço',
  inputs: [
    {
      id: v4(),
      label: 'Cep',
      value: 'cep',
      loading: true,
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
      label: 'Número da Casa',
      value: 'numCasa',
      loading: true,
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
      gridProps: {},
      textFieldProps: {},
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
      gridProps: { md: 6, lg: 6 },
    },
    {
      id: v4(),
      label: 'Ponto de Referência',
      value: 'pontoReferencia',
      gridProps: { md: 6, lg: 6 },
    },
  ],
};

