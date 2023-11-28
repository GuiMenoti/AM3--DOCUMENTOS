import { TableBody } from '@mui/material';

type FileManagerTableBodyProps = {
  children: any;
};

export function FileManagerTableBody({ children }: FileManagerTableBodyProps) {
  return <TableBody>{children}</TableBody>;
}
