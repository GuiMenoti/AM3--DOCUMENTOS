import { v4 } from 'uuid';

type DataFilesFieldRegister = {
  id: string;
  label: string;
  field: string;
};

export const dataFilesFieldRegister: DataFilesFieldRegister[] = [
  {
    id: v4(),
    label: 'Anexo do Talão',
    field: 'anexoTalao',
  },
  {
    id: v4(),
    label: 'Anexo do Contrato',
    field: 'contrato',
  },
  {
    id: v4(),
    label: 'Anexo da Identidade',
    field: 'identidade',
  },
];
