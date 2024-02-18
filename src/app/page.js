import { Grid } from "@mui/material";


const HomePage = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Leatest news</h1>
        </Grid>

        <Grid item xs={4}>
          <h1>side bar</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;