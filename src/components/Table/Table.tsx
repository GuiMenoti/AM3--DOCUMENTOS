import { CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useSelectedTableStore } from '../../store/useSelectedTableStore';
import { useTableControl } from '../../store/useTableControl';
import { EmptyData } from '../EmptyData/EmptyData';
import { Data } from './dataCell';
import {
  Box,
  EnhancedTableToolbar,
  InputSearchTable,
  StyledContainerTable,
  StyledPaperTable,
  StyledTablePagination,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TabsTable,
} from './importsTable';

type TableDataProps = {
  data: Data[];
  isLoading: boolean;
  countItems: number;
};

export default function TableData({
  data = [],
  isLoading,
  countItems,
}: TableDataProps) {
  const { getSelectedIsTrueLenght, selectedTable } = useSelectedTableStore();
  const { controls, setControls, resetState } = useTableControl();

  useEffect(() => {
    resetState();
  }, []);

  return (
    <StyledContainerTable>
      <StyledPaperTable>
        <Grid>
          <TabsTable />
          <InputSearchTable />
          {getSelectedIsTrueLenght() > 0 && <EnhancedTableToolbar />}
          <TableContainer sx={{ maxHeight: data?.length === 0 ? 0 : 380 }}>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <TableHead />
              <TableBody>
                {data?.map((row) => {
                  return <TableRow row={row} key={row?.id} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        {isLoading && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 0',
            }}
          >
            <CircularProgress />
          </Box>
        )}
        {data?.length === 0 && !isLoading ? <EmptyData /> : ''}
        <StyledTablePagination
          rowsPerPageOptions={[5, 10, 25]}
          // @ts-ignore
          component="div"
          count={countItems ? countItems : 0}
          rowsPerPage={controls?.rows}
          page={controls?.page}
          onPageChange={(event, page) => setControls({ ...controls, page })}
          onRowsPerPageChange={(event) => {
            setControls({
              ...controls,
              page: 0,
              rows: parseInt(event.target.value, 10),
            });
          }}
          labelRowsPerPage={'Linhas'}
        />
      </StyledPaperTable>
    </StyledContainerTable>
  );
}
