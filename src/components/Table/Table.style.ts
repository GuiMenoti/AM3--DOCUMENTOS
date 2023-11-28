import { styled } from '@mui/material';
import Paper from '@mui/material/Paper';
import { Theme } from '@mui/material/styles';
import TablePagination from '@mui/material/TablePagination';

export const StyledPaperTable = styled(Paper)(({ theme }: Theme) => ({
  width: '100%',
  minHeight: 600,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

export const StyledContainerTable = styled('div')(({ theme }: Theme) => ({
  width: '100%',
  '& > div:first-of-type': {
    borderRadius: '10px !important',
    backgroundColor: `${theme.palette.color.containerBackground} !important`,
  },
  '& thead tr th, tr td': {
    borderBottom: 'none !important',
  },
  '& tbody tr th, tr td': {
    borderBottom: 'none !important',
  },
}));

export const StyledTablePagination = styled(TablePagination)(
  ({ theme }: Theme) => ({
    display: 'flex',
    justifyContent: 'center',
    color: `${theme.palette.text.h1} !important`,
    svg: {
      color: `${theme.palette.text.h1} !important`,
    },
  })
);
