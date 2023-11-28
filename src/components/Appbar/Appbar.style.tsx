import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';

export const StyledIconMenu = styled(IconButton)(({ theme }: Theme) => ({
  color: `${theme.palette.text.button} !important`,
  svg: {
    color: `${theme.palette.text.button}`,
  },
}));

export const StyledContainerIconsAppBar = styled(Box)`
  display: flex,
  flex-direction: row,
  align-items: center,
`;
