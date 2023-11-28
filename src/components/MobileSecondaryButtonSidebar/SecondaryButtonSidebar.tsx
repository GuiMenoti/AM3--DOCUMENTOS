import { Collapse, ListItemText, ListItemIcon, List } from '@mui/material';
import { GenericState } from 'generic';
import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { itemsProps } from 'sidebar';
import { StyledListItemButton } from './secondaryButtonSidebar.style';
import { useSidebarOpen } from '../../store/useSidebarOpen';
import { useOpenMenuSidebar } from '../../store/useOpenMenuSidebar';

type SecondaryButtonSidebar = {
  open: GenericState;
  item: itemsProps;
};

type SecondaryButtonSidebarHandleClick = {
  item: object | any;
  value: object | any;
};

export function SecondaryButtonSidebar({
  open = {},
  item,
}: SecondaryButtonSidebar) {
  const { closedSidebar } = useSidebarOpen();
  const { closedAllSidebarMenu } = useOpenMenuSidebar();
  const navigate = useNavigate();

  function handleClickButton({
    item,
    value,
  }: SecondaryButtonSidebarHandleClick) {
    navigate(`${item.path}${value.path}`);
    closedSidebar();
    closedAllSidebarMenu();
  }

  return (
    <Collapse in={open[item.path]} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {item.subItems?.map((value) => {
          return (
            <Fragment key={value.path}>
              <StyledListItemButton
                dense
                sx={{ pl: 4 }}
                onClick={() => handleClickButton({ item, value })}
                selected={value.selected}
              >
                <ListItemIcon>•</ListItemIcon>
                <ListItemText primary={value.name} />
              </StyledListItemButton>
            </Fragment>
          );
        })}
      </List>
    </Collapse>
  );
}
