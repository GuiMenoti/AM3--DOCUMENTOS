import { Table } from '@mui/material';

export function FileManagerTable({ children }: { children: JSX.Element[] }) {
  return <Table aria-labelledby="tableTitle">{children}</Table>;
}
