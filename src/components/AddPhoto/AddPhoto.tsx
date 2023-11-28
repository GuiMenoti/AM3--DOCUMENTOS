import { Avatar, Grid, Typography, useTheme } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { ThemeOptions } from '@mui/material/styles';
import { useState } from 'react';

type AddPhotoProps = {
  defaultImage?: File | null;
  disabled?: boolean;
};

export function AddAPhoto({
  defaultImage = null,
  disabled = false,
}: AddPhotoProps) {
  const theme: ThemeOptions = useTheme();
  const [image, setImage] = useState<File | null>(defaultImage);
  const [hoverImage, setHoverImage] = useState(false);

  return (
    <label htmlFor="fileProfile">
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        sx={{
          width: '160px',
          height: '160px',
          border: `3px dashed ${theme.palette.text.span}`,
          borderRadius: '100%',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHoverImage(true)}
        onMouseLeave={() => setHoverImage(false)}
      >
        <Grid
          sx={{
            backgroundColor: 'black',
            borderRadius: '100%',
          }}
        >
          <Avatar
            sx={{
              backgroundColor: theme.palette.color.borderInput,
              width: '140px',
              height: '140px',
              display: 'flex',
              flexDirection: 'column',
              transition: '0.4s',
              opacity: hoverImage ? '0.5' : '1',
            }}
            src={image instanceof File ? URL.createObjectURL(image) : ''}
          />
        </Grid>
        <Grid
          container
          flexDirection={'column'}
          alignItems={'center'}
          maxWidth={120}
          position={'absolute'}
          sx={{
            transition: '0.5s',
            opacity: hoverImage ? '1' : '0',
          }}
        >
          <AddAPhotoIcon
            sx={{
              color: 'white',
              fontSize: '30px',
            }}
          />
          <Typography
            variant={'caption'}
            sx={{ color: 'white', marginTop: '5px' }}
          >
            Carregar foto
          </Typography>
        </Grid>
        <input
          id="fileProfile"
          accept="image/jpeg, image/jpg, image/png, image/svg"
          type="file"
          alt="imagem do usuário"
          onChange={(event) => setImage(event.target?.files?.[0] || null)}
          hidden
          disabled={disabled}
        />
      </Grid>
    </label>
  );
}
