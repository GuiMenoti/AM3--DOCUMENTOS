import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import { styled, Tooltip } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const StyledIconProfile = styled(IconButton)(({ theme }: Theme) => ({
  color: `${theme.palette.text.button} !important`,
  svg: {
    color: `${theme.palette.text.button}`,
  },
}));

export const StyledTooltipProfile = styled(Tooltip)(() => ({
  div: {
    paddingRight: '0 !important',
  },
}));

export const StyledMenuProfile = styled(Menu)(({ theme }: Theme) => ({
  '& .MuiMenu-paper': {
    backgroundColor: theme.palette.color.containerBackground,
  },
  '& .MuiMenu-list': {
    color: theme.palette.text.h1,
  },
}));
