import { Backdrop, Box, LinearProgress } from '@mui/material';
import { useState } from 'react';

export function LoadingSwitchPage({ children }: any) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {loading ? (
        <Backdrop
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            alignItems: 'flex-start',
          }}
          open={true}
        >
          <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={40} />
          </Box>
        </Backdrop>
      ) : (
        // <div ref={ref}>{children}</div>
        <></>
      )}
    </>
  );
}
