import { styled, TableHead } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';
import TableSortLabel from '@mui/material/TableSortLabel';

type Props = {
  theme?: ThemeOptions;
};

export const StyledHead = styled(TableHead)(({ theme }: Props) => ({
  backgroundColor: `${theme?.palette.color.borderInput}`,
  position: 'sticky',
  top: 0,
  zIndex: 1,
}));

export const StyledArrowSortTable = styled(TableSortLabel)(
  ({ theme }: Props) => ({
    '& svg': {
      color: `${theme?.palette.text.h1} !important`,
    },
  })
);
