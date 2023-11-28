import { Box, Collapse, TableCell, TableRow } from '@mui/material';
import { useFileManagerColapse } from '../../store/useFileManagerColapse';

type FileManagerColapseProps = {
  children: any;
  nome: string;
};

export function FileManagerColapse({
  nome,
  children,
}: FileManagerColapseProps) {
  const { colapseFiles } = useFileManagerColapse();

  return (
    <TableRow>
      <TableCell
        style={{ paddingBottom: 0, paddingTop: 0, padding: 0 }}
        colSpan={6}
      >
        <Collapse in={colapseFiles[nome]} timeout="auto" unmountOnExit>
          <Box>{children}</Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
