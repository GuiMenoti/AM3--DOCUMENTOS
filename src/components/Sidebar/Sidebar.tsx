import { useState, useEffect } from 'react';
import { usePaths } from '../../hooks/usePaths';
import { useWindowDimension } from '../../hooks/useWindowDimension';
import { SidebarDesktop } from '../DesktopSidebar/SidebarDesktop';
import { SidebarMobile } from '../MobileSidebar/SidebarMobile';
import { useSidebarStates } from '../../store/useSidebarStates';

export type Sidebar = {
  children: JSX.Element;
};

export function Sidebar({ children }: Sidebar) {
  const { width } = useWindowDimension();
  const [isMobile, setIsMobile] = useState(false);
  const { previous, current } = usePaths();
  const isSelectedButtonSidebar = useSidebarStates(
    (state) => state.isSelectedButtonSidebar
  );

  useEffect(() => {
    isSelectedButtonSidebar({ previous, current });
  }, [previous, current]);

  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);

  return (
    <div>
      {!isMobile ? (
        <SidebarDesktop>{children}</SidebarDesktop>
      ) : (
        <SidebarMobile>{children}</SidebarMobile>
      )}
    </div>
  );
}
