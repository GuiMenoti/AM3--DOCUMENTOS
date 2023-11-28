import { TableCellProps } from '@mui/material';
import { Data } from './dataCell';

export interface HeadCell {
  id: keyof Data;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
  props?: TableCellProps;
}

export const headCells: readonly HeadCell[] = [
  {
    id: 'nome',
    numeric: false,
    disablePadding: true,
    label: 'Nome',
  },
  {
    id: 'apelido',
    numeric: false,
    disablePadding: false,
    label: 'apelido',
  },
  {
    id: 'cpf',
    numeric: false,
    disablePadding: false,
    label: 'CPF',
  },
  {
    id: 'ativoPrograma',
    numeric: false,
    disablePadding: false,
    label: 'Ativo',
  },
];

