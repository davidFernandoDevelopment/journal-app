import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField } from '@mui/material';
import { AuthLayout } from '../layout';

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="email"
              label="Nombre"
              placeholder="Ingrese nombre"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="email"
              label="Correo"
              placeholder="Ingrese correo"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              type="password"
              label="Contraseña"
              placeholder="Ingrese contraseña"
            />
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>Login</Button>
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