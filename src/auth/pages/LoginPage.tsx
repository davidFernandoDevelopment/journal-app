import { FormEvent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import { Authenticate } from '../interfaces';

import { useAppDispatch } from '../../store';
import { checkingAuthentication, startGoogleSign } from '../../store/auth';


export const LoginPage = () => {

  const dispatch = useAppDispatch();
  const { email, password, onInputChange } = useForm<Authenticate>({
    email: 'David@gmail.com',
    password: '123456'
  });


  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(checkingAuthentication({
      email,
      password
    }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSign());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              name="email"
              type="email"
              label="Correo"
              placeholder="Ingrese correo"
              onChange={onInputChange}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              name="password"
              type="password"
              label="Contraseña"
              onChange={onInputChange}
              placeholder="Ingrese contraseña"
            />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                onClick={onGoogleSignIn}
              >
                <Google />
                <Typography sx={{ marginLeft: 1 }}>
                  Google
                </Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid item container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default LoginPage;