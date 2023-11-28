import { ListItemButton, styled } from '@mui/material';
import { Menu } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

type Props = {
  theme?: ThemeOptions;
  selected?: boolean;
};

export const StyledMenu = styled(Menu)(({ theme }: Props) => ({
  '& 	.MuiMenu-paper': {
    backgroundColor: theme?.palette.color.containerBackground,
  },
}));

export const StyledListItemButtonDesktop = styled(ListItemButton)(
  ({ theme, selected }: Props) => ({
    borderRadius: '6px !important',
    backgroundColor: selected
      ? `${theme?.palette.color.primary}40 !important`
      : '',
    '&:hover': {
      backgroundColor: selected
        ? `${theme?.palette.color.primary}20 !important`
        : `${theme?.palette.text.p}20 !important`,
    },
    '& .MuiListItemText-root': {
      color: selected
        ? theme?.palette.color.primary
        : theme?.palette.text.subtitle,
    },
    '& .MuiListItemIcon-root': {
      color: selected ? theme?.palette.color.primary : theme?.palette.text.p,
    },
  })
);
