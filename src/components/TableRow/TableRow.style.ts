import { styled, TableRow } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';

type Props = {
  theme?: ThemeOptions;
  selected?: boolean;
};

export const StyledTableRow = styled(TableRow)(
  ({ theme, selected }: Props) => ({
    cursor: 'pointer',
    backgroundColor: selected
      ? `${theme?.palette.color.borderInput}50 !important`
      : 'transparent',
  })
);

export const StyledTableRowCell = styled(TableCell)(({ theme }: Props) => ({
  color: `${theme?.palette.text.h1} !important`,
  height: '20px',
}));
