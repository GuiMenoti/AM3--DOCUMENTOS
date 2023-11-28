import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SecondaryButtonSidebar } from '../MobileSecondaryButtonSidebar/SecondaryButtonSidebar';
import { useNavigate } from 'react-router-dom';
import { itemsProps, sidebarControllerModelProps } from 'sidebar';
import { isIcon } from './isIcon';
import { GenericState } from 'generic';
import {
  StyledList,
  StyledPrimaryButtonSidebar,
} from './PrimaryButtonSidebar.style';
import { getIconComponent } from '../../utils/getIconComponent';
import { useSidebarOpen } from '../../store/useSidebarOpen';
import { useOpenMenuSidebar } from '../../store/useOpenMenuSidebar';

type PrimaryButtonSidebar = {
  sidebarController: sidebarControllerModelProps;
};

export default function PrimaryButtonSidebar({
  sidebarController,
}: PrimaryButtonSidebar) {
  const { menuSidebar, openSidebarMenu, closedAllSidebarMenu } =
    useOpenMenuSidebar();
  const { closedSidebar } = useSidebarOpen();
  const navigate = useNavigate();

  const handleClick = (item: itemsProps) => {
    if (item.subItems?.length === 0) {
      navigate(`/dashboard/${item?.path}`);
      closedSidebar();
      closedAllSidebarMenu();
    }
    openSidebarMenu(item.path);
  };

  return (
    <StyledList
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {sidebarController?.title.toUpperCase()}
        </ListSubheader>
      }
    >
      {sidebarController.items?.map((item) => {
        return (
          <React.Fragment key={item.path}>
            <StyledPrimaryButtonSidebar
              onClick={() => handleClick(item)}
              // @ts-ignore
              open={open[item.path]}
              selected={item.selected}
            >
              <ListItemIcon>{getIconComponent(item?.icon)}</ListItemIcon>
              <ListItemText primary={item.name} />
              {isIcon(item, menuSidebar)}
            </StyledPrimaryButtonSidebar>
            <SecondaryButtonSidebar open={menuSidebar} item={item} />
          </React.Fragment>
        );
      })}
    </StyledList>
  );
}
