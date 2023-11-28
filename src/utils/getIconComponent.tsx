import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AutoAwesomeMotionOutlinedIcon from '@mui/icons-material/AutoAwesomeMotionOutlined';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

export function getIconComponent(iconName: string) {
  switch (iconName) {
    case 'consultar':
      return <ManageSearchIcon />;
    case 'registrar':
      return <AddToPhotosIcon />;
    case 'ajuda':
      return <QuizOutlinedIcon />;
    default:
      return <AutoAwesomeMotionOutlinedIcon />;
  }
}
