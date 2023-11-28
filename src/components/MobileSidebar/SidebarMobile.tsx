import PrimaryButtonSidebar from '../MobilePrimaryButtonSidebar/PrimaryButtonSidebar';
import { StyledDrawer } from './SidebarMobile.style';
import Box from '@mui/material/Box';
import { HeaderSidebar } from '../HeaderSidebar/HeaderSidebar';
import { Sidebar } from '../Sidebar/Sidebar';
import { useSidebarOpen } from '../../store/useSidebarOpen';
import { useSidebarStates } from '../../store/useSidebarStates';
import { useOpenMenuSidebar } from '../../store/useOpenMenuSidebar';
import { useEffect } from 'react';

export function SidebarMobile({ children }: Sidebar) {
  const { closedSidebar, isOpen } = useSidebarOpen();
  const { closedAllSidebarMenu } = useOpenMenuSidebar();
  const { states } = useSidebarStates();

  useEffect(() => {
    closedSidebar();
  }, []);

  return (
    <Box>
      <StyledDrawer
        open={isOpen}
        onClose={() => {
          closedSidebar();
          closedAllSidebarMenu();
        }}
      >
        <HeaderSidebar />
        <Box role={'presentation'}>
          {states?.map((value) => (
            <PrimaryButtonSidebar key={value.title} sidebarController={value} />
          ))}
        </Box>
      </StyledDrawer>
      {children}
    </Box>
  );
}
