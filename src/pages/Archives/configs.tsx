import AddIcon from '@mui/icons-material/Add';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 } from 'uuid';

export type MenuListType = {
  id: string;
  icon?: JSX.Element;
  message: string;
  method: 'add' | 'download' | 'delete';
};

type HeadCell = {
  id: string;
  label: string | JSX.Element;
  numeric: boolean;
  props?: any;
};

export const menuPasteArchive: MenuListType[] = [
  {
    id: v4(),
    icon: <AddIcon />,
    message: 'Adicionar Arquivo',
    method: 'add',
  },
];

export const menuArchive: MenuListType[] = [
  {
    id: v4(),
    icon: <DownloadIcon />,
    message: 'Baixar',
    method: 'download',
  },
  {
    id: v4(),
    icon: <DeleteIcon />,
    message: 'Apagar',
    method: 'delete',
  },
];

export const headCellsArchive: HeadCell[] = [
  { id: v4(), label: 'Nome', numeric: false },
  {
    id: v4(),
    label: '',
    numeric: true,
    props: {
      sx: {},
    },
  },
];

