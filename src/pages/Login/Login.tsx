import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Button,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { ThemeOptions } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Logo from '../../../public/perfilam3-_1_-removebg-preview.png';
import Background from '../../assets/imgs/gradient_2.jpg';
import { usePostToken } from '../../queries/Token/usePostToken';
import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';
import { version } from '../../../package.json';

const schemaLogin = yup.object({
  email: yup.string().email('Email inválido!').required('Campo obrigatório!'),
  password: yup.string().required('Campo obrigatório!'),
});

export function Login() {
  const theme: ThemeOptions = useTheme();
  const { mutate, isLoading } = usePostToken();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { access_token } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  localStorage.removeItem('modalMessage');

  useEffect(() => {
    if (access_token) {
      navigate('/dashboard');
    }
  }, [access_token]);

  const onSubmit = async (data: any) => {
    if (data) {
      mutate(data);
    }
  };

  return (
    <>
      {' '}
      {!access_token && (
        <Grid
          container
          alignItems={'center'}
          justifyContent={'center'}
          height={'100vh'}
          sx={{
            paddingBottom: '0 !important',
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            overflow: 'hidden !important',
          }}
        >
          <Grid
            container
            item
            alignItems={'center'}
            justifyContent={'center'}
            sm={10}
            md={6}
            lg={4}
            marginLeft={{ sm: 0, md: 50, lg: 80 }}
            p={4}
            height={'100%'}
          >
            <Paper
              variant="elevation"
              sx={{
                padding: 5,
                borderRadius: '15px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Grid container item justifyContent={'center'}>
                <figure
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginTop: '0',
                    width: '90%',
                  }}
                >
                  <img
                    loading={'lazy'}
                    src={Logo}
                    alt="logo"
                    style={{
                      width: '80px',
                      filter: 'hue-rotate(180deg) brightness(100%%) saturate(120%)',
                     
                    }}
                    
                  />
                </figure>
                <Typography
                  textAlign={'center'}
                  variant="h5"
                  fontWeight={'bold'}
                  marginBottom={2}
                  sx={{ color: theme.palette.color.secondaryBold }}
                >
                  Olá, Bem vindo de volta
                </Typography>
              </Grid>
              <Typography
                variant="subtitle1"
                textAlign={'start'}
                width={'100%'}
                marginTop={2}
                marginBottom={2}
                fontWeight={'bold'}
                sx={{ color: theme.palette.color.secondaryBold }}
              >
                LOGIN
              </Typography>
              <Grid
                container
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
              >
                <form style={{ width: '100%' }}>
                  <Grid item width={'100%'} p={'10px 0'}>
                    <TextField
                      fullWidth
                      size="small"
                      color="primary"
                      variant="outlined"
                      label={'Email'}
                      {...register('email')}
                      helperText={
                        errors?.email ? errors?.email?.message?.toString() : ''
                      }
                      error={errors?.email ? true : false}
                    />
                  </Grid>
                  <Grid item width={'100%'} p={'10px 0'}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        size="small"
                        htmlFor="outlined-adornment-password"
                        error={errors?.password ? true : false}
                        color="primary"
                      >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        size="small"
                        color="primary"
                        {...register('password')}
                        error={errors?.password ? true : false}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={() => setShowPassword(!showPassword)}
                              onMouseDown={(event) => event.preventDefault()}
                              edge="end"
                              color={errors?.password ? 'error' : 'default'}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                      <FormHelperText error>
                        {errors?.password
                          ? errors?.password?.message?.toString()
                          : ''}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ margin: '20px 0', color: 'white' }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    {isLoading ? (
                      <CircularProgress
                        size={'24px'}
                        sx={{ padding: '2px', color: 'white' }}
                      />
                    ) : (
                      'Login'
                    )}
                  </Button>
                </form>
              </Grid>
              
            </Paper>
          </Grid>
        </Grid>
      )}
    </>
  );
}
