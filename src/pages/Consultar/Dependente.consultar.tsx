import { usePaths } from '../../hooks/usePaths';
import { TextField } from '@mui/material';
export function DependenteConsultar() {
  return (
    <div>
      <div style={{ display: 'inline-block' }}>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </div>
      <div style={{ display: 'inline-block' }}>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </div>
      <div style={{ display: 'inline-block' }}>
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </div>
    </div>
  );
}
