import * as React from 'react';
import Box from '@mui/material/Box';
import { StyledTab, StyledTabs, StyledTabsContainer } from './tabsTable.style';
import { useTableControl } from '../../store/useTableControl';

export function TabsTable() {
  const { controls, setControls } = useTableControl();

  const handleChange = (event: React.SyntheticEvent, newValue: 0 | 1 | 2) => {
    setControls({ ...controls, filter: newValue });
  };

  return (
    <StyledTabsContainer>
      <Box
        sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: '10px' }}
      >
        <StyledTabs
          value={controls.filter}
          onChange={handleChange}
          aria-label="tabs"
          textColor={'inherit'}
        >
          <StyledTab
            label="Todos"
            aria-controls={`simple-tabpanel-0`}
            id={`tab-0`}
            sx={{ textTransform: 'none' }}
            wrapped
            disableRipple
          />
          <StyledTab
            label="Ativos"
            aria-controls={`simple-tabpanel-1`}
            id={`tab-1`}
            sx={{ textTransform: 'none' }}
            wrapped
            disableRipple
          />
          <StyledTab
            label="Inativos"
            aria-controls={`simple-tabpanel-2`}
            id={`tab-2`}
            sx={{ textTransform: 'none' }}
            wrapped
            disableRipple
          />
        </StyledTabs>
      </Box>
    </StyledTabsContainer>
  );
}
