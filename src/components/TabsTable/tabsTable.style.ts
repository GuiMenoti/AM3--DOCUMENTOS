import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/material';

export const StyledTabsContainer = styled(Box)(({ theme }: Theme) => ({
  width: '100%',
  backgroundColor: `${theme.palette.color.borderInput}30`,
  borderTopRightRadius: '10px',
  borderTopLeftRadius: '10px',
}));

export const StyledTabs = styled(Tabs)(({ theme }: Theme) => ({
  span: {
    backgroundColor: `${theme.palette.color.primary} !important`,
  },
  color: theme.palette.text.button,
  '& .Mui-selected': {
    color: theme.palette.text.h1,
    fontWeight: 'bold',
  },
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: '16px !important',
  padding: '0 15px !important',
  minWidth: '60px !important',
}));
