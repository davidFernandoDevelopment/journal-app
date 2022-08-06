import { StarOutlined } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';

export const NothingSelectedView = () => {


  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        padding: 4,
        height: "100%",
        borderRadius: 3,
        backgroundColor: "primary.main",
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <StarOutlined sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item>
        <Typography color="white" variant="h5">
          Selecciona o crea una nota
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NothingSelectedView;