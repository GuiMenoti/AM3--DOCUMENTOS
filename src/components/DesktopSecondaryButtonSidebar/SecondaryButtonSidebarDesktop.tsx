import { ListItemText, ListItemIcon, List, ListItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { itemsProps } from 'sidebar';
import {
  StyledListItemButtonDesktop,
  StyledMenu,
} from './secondaryButtonSidebar.style';
import { useSidebarOpen } from '../../store/useSidebarOpen';

type SecondaryButtonSidebarDesktop = {
  item: itemsProps;
  anchorEl: any;
};

type SecondaryButtonSidebarHandleClick = {
  item: object | any;
  value: object | any;
};

export function SecondaryButtonSidebarDesktop({
  item,
  anchorEl = {},
}: SecondaryButtonSidebarDesktop) {
  const navigate = useNavigate();
  const openAnchor = Boolean(anchorEl.anchorEl[item.path]?.target);
  const { isOpen } = useSidebarOpen();

  function handleClickButton({
    item,
    value,
  }: SecondaryButtonSidebarHandleClick) {
    navigate(`${item.path}${value.path}`);
    anchorEl.setAnchorEl((prev: any) => ({ ...prev, [item.path]: null }));
  }

  return (
    <>
      {/* @ts-ignore */}
      {item?.subItems?.length > 0 && (
        <StyledMenu
          id={`menu${item.path}`}
          open={openAnchor}
          anchorEl={anchorEl.anchorEl[item.path]?.target}
          onClose={() =>
            anchorEl.setAnchorEl((prev: any) => ({
              ...prev,
              [item.path]: null,
            }))
          }
          MenuListProps={{
            'aria-labelledby': `menu${item.path}`,
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
        >
          <List component="div" sx={{ padding: '5px !important' }}>
            {item.subItems?.map((value) => {
              return (
                <ListItem key={`${item.path}${value.path}`} disablePadding>
                  <StyledListItemButtonDesktop
                    dense
                    sx={{ pl: 4 }}
                    onClick={() => handleClickButton({ item, value })}
                    selected={value.selected}
                  >
                    {isOpen ? <ListItemIcon>•</ListItemIcon> : ''}
                    <ListItemText primary={value.name} />
                  </StyledListItemButtonDesktop>
                </ListItem>
              );
            })}
          </List>
        </StyledMenu>
      )}
    </>
  );
}
