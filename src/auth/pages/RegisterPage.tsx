import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField } from '@mui/material';

import { AuthLayout } from '../layout';
import { useForm, FormValidation } from '../../hooks';

import { FormEvent, useMemo } from 'react';
import { Authenticate } from '../interfaces';
import { useAppDispatch, useAppSelector } from '../../store';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';


const formValidation: FormValidation<Authenticate> = {
  email: [(value: string) => value.includes('@'), 'El correo debe tener un @'],
  password: [(value: string) => value.length >= 6, 'La contraseña debe tener como minimo 6 caracteres'],
  displayName: [(value: string) => value.length >= 1, 'EL nombre es obligatorio']
};


export const RegisterPage = () => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === "checking", [status]);
  const {
    email,
    password,
    displayName,
    formState: user,
    onInputChange,
    onBlur,
    touched,
    checkAllTouched,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid
  } = useForm<Authenticate>({
    email: '',
    password: '',
    displayName: '',
  }, formValidation);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkAllTouched();
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(user));

  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              name="displayName"
              onBlur={onBlur}
              onChange={onInputChange}
              value={displayName}
              label="Nombre"
              error={!!displayNameValid && touched.displayName}
              helperText={touched.displayName && displayNameValid}
              placeholder="Ingrese nombre"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="email"
              name="email"
              onBlur={onBlur}
              onChange={onInputChange}
              value={email}
              label="Correo"
              error={touched.email && !!emailValid}
              helperText={touched.email && emailValid}
              placeholder="Ingrese correo"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="password"
              name="password"
              onBlur={onBlur}
              onChange={onInputChange}
              value={password}
              label="Contraseña"
              error={touched.password && !!passwordValid}
              helperText={touched.password && passwordValid}
              placeholder="Ingrese contraseña"
            />
          </Grid>
          <Grid item container spacing={2}>

            <Grid item xs={12} display={!!error ? '' : 'none'}>
              <Alert severity='error'>
                {error?.message}
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                disabled={isCheckingAuthentication}
              >
                Login
              </Button>
            </Grid>
          </Grid>
          <Grid item container direction="row" justifyContent="end">
            <Link component={RouterLink} to="/auth/login">
              Ya tienes cuenta ?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;