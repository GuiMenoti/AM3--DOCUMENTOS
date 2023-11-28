import FolderIcon from '@mui/icons-material/Folder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, TableCell, TableRow } from '@mui/material';
import { orange } from '@mui/material/colors';
import { HTMLAttributes } from 'react';
import { v4 } from 'uuid';
import { useFileManagerColapse } from '../../store/useFileManagerColapse';

type FileManagerTableRowProps = {
  children?: React.ReactNode;
  id: string;
  nome: string;
  endCell?: JSX.Element;
  colapse?: boolean;
  tableRowProps?: HTMLAttributes<HTMLTableRowElement>;
  tableCellProps?: HTMLAttributes<HTMLTableCellElement>;
};

export function FileManagerTableRow({
  children,
  id,
  nome,
  endCell,
  colapse = false,
  tableRowProps,
  tableCellProps,
}: FileManagerTableRowProps) {
  const { openFile } = useFileManagerColapse();

  return (
    <>
      <TableRow
        key={v4()}
        hover
        tabIndex={-1}
        {...tableRowProps}
        sx={{ cursor: 'pointer' }}
      >
        <TableCell padding="normal">
          <FolderIcon sx={{ color: orange['A100'] }} />
        </TableCell>
        <TableCell
          onClick={() => openFile(id)}
          component="th"
          id={`${v4()}${nome}`}
          scope="row"
          padding="none"
          {...tableCellProps}
        >
          {nome}
        </TableCell>
        {colapse && (
          <TableCell align="right" sx={{ width: '60px' }}>
            {endCell}
          </TableCell>
        )}
      </TableRow>
      {children}
    </>
  );
}
