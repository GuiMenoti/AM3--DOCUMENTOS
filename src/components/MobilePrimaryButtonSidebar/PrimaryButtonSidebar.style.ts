import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import { styled } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

type Props = {
  theme?: ThemeOptions;
  selected?: boolean;
};

export const StyledPrimaryButtonSidebar = styled(ListItemButton)(
  ({ theme, selected }: Props) => ({
    backgroundColor: !selected
      ? ``
      : `${theme?.palette.color.primary}40 !important`,
    margin: '3px 0 !important',
    borderRadius: '6px !important',
    color: selected
      ? `${theme?.palette.color.primary} !important`
      : `${theme?.palette.text.p} !important`,
    svg: {
      color: selected
        ? `${theme?.palette.color.primary} !important`
        : `${theme?.palette.text.p} !important`,
    },
    '&:hover': {
      backgroundColor: selected
        ? `${theme?.palette.color.primary}20 !important`
        : `${theme?.palette.text.p}40 !important`,
    },
  })
);

export const StyledList = styled(List)(({ theme }: Props) => ({
  width: '100%',
  maxWidth: 360,
  backgroundColor: 'transparent !important',
  '& .MuiListSubheader-root': {
    backgroundColor: 'transparent',
    color: theme?.palette.text.p,
    fontWeight: 'bold !important',
  },
}));
