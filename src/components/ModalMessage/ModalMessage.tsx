import CloseIcon from '@mui/icons-material/Close';
import { Theme, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { version } from '../../../package.json';
import Smag from '../../assets/imgs/arte.png';
import { useModalMessage } from '../../store/useModalMessage';
import { useNavigate } from 'react-router-dom';

 export function ModalMessage() {
 const { initialState, handleClose } = useModalMessage();
  const theme: Theme = useTheme();
 const navigate = useNavigate();
 }

//   return (
//     <>
//       <Dialog
//         open={initialState.open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         sx={{
//           '& .MuiDialog-paper': {
//             minWidth: {
//               xs: 305,
//               sm: 450,
//               md: 450,
//             },
//             minHeight: {
//               xs: 450,
//               sm: 610,
//               md: 610,
//             },
//           },
//         }}
//       >
//         <DialogTitle
//           id="alert-dialog-title"
//           // @ts-ignore
//           sx={{ backgroundColor: theme.palette.color.secondaryBold }}
//         >
//           <Grid container alignItems="center" justifyContent="space-between">
//             <Typography
//               variant={'h6'}
//             >{`Nova atualização ${version}`}</Typography>
//             <IconButton
//               // @ts-ignore
//               sx={{ color: theme.palette.color.danger }}
//               onClick={handleClose}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Grid>
//         </DialogTitle>
//         <DialogContent
//           sx={{
//             backgroundImage: `url(${Smag})`,
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: {
//               xs: 'contain',
//               sm: 'cover',
//               md: 'cover',
//             },
//           }}
//         />
//         <DialogActions
//           // @ts-ignore
//           sx={{ backgroundColor: theme.palette.color.paper }}
//         >
//           <Button
//             sx={{
//               backgroundColor: '#2e7d32',
//               // @ts-ignore
//               color: 'white',
//               paddingLeft: '13px',
//               paddingRight: '13px',
//               // textShadow: `-0.5px 0.5px 0px ${theme.palette.color.backgroundColor}`,
//               '&:hover': {
//                 backgroundColor: '#1b5e20',
//               },
//             }}
//             onClick={() => {
//               navigate('/dashboard/ajuda');
//               handleClose();
//             }}
//           >
//             Ver mais
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// }
