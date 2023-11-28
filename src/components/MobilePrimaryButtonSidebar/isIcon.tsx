import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { GenericState } from 'generic';
import { itemsProps } from 'sidebar';

export function isIcon(item: itemsProps, open: GenericState) {
  const isOpen = open[item.path];
  if (item.subItems) {
    if (item.subItems?.length > 0) {
      return isOpen ? <ExpandLess /> : <ExpandMore />;
    }
  }
}
