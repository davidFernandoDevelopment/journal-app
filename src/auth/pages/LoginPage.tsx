import { FormEvent, useMemo } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout';
import { useForm } from '../../hooks';
import { Authenticate } from '../interfaces';

import { useAppDispatch, useAppSelector } from '../../store';
import { startGoogleSign, startLoginWithEmailPassword } from '../../store/auth';



export const LoginPage = () => {

  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(state => state.auth);

  const isAuthenticate = useMemo(() => status === "checking", [status]);
  const { email, password, onInputChange } = useForm<Authenticate>({
    email: '',
    password: ''
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword({
      email,
      password
    }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSign());
  };

  return (
    <AuthLayout title="Login">
      <form
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container spacing={2}>
          <Grid item xs={12} display={!!error ? '' : 'none'}>
            <Alert severity='error'>
              {error?.message}
            </Alert>
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              name="email"
              type="email"
              label="Correo"
              placeholder="Ingrese correo"
              onChange={onInputChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              name="password"
              type="password"
              label="Contraseña"
              onChange={onInputChange}
              value={password}
              placeholder="Ingrese contraseña"
            />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={isAuthenticate}
              >Login</Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                fullWidth
                variant="contained"
                onClick={onGoogleSignIn}
                disabled={isAuthenticate}
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