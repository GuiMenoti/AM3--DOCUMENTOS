import { TableCell, TableHead, TableRow } from '@mui/material';
import { Fragment } from 'react';
import { HeadCell } from '../Table/headCell';

type FileManagerTableHeadProps = {
  children: any;
};

export function FileManagerTableHead({ children }: FileManagerTableHeadProps) {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox"></TableCell>
        {children?.map((headCell: HeadCell) => (
          <Fragment key={headCell.id}>
            <TableCell
              align={headCell.numeric ? 'right' : 'left'}
              sx={{ padding: '15px 0 !important' }}
              {...headCell.props}
            >
              {headCell.label}
            </TableCell>
          </Fragment>
        ))}
      </TableRow>
    </TableHead>
  );
}
