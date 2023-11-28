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

export const dataAdditionalFieldsProfile: DataController = {
  id: v4(),
  title: 'Dados Adicionais',
  inputs: [
    {
      id: v4(),
      label: 'Número do Talão',
      value: 'numTalao',
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
      label: 'Número do Contrato',
      value: 'numContrato',
      textFieldProps: {
        disabled: true,
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
      label: 'Observações Gerais',
      value: 'obsGeral',
      gridProps: { md: 12, lg: 12 },
      textFieldProps: {
        multiline: true,
        minRows: 10,
        maxRows: 10,
      },
    },
  ],
};

