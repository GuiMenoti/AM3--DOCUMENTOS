import { Typography, useTheme } from '@mui/material';
import { ThemeOptions } from '@mui/material/styles';

export function AtivoStatus({ ativo = true }) {
  const theme: ThemeOptions = useTheme();
  const status = ativo
    ? `${theme.palette.color.primary}`
    : `${theme.palette.color.danger}`;

  return (
    <Typography
      variant={'button'}
      sx={{
        background: `${status}50`,
        color: status,
        padding: '4px 10px',
        borderRadius: 2,
      }}
    >
      {ativo ? 'ativo' : 'inativo'}
    </Typography>
  );
}
