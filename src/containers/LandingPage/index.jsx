import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import CustomizedCarousel from "../../components/CustomizedCarousel/CustomizedCarousel";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  aboutUsImage: {
    width: "auto",
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  const overrideTheme = createTheme({
    overrides: {
      MuiTypography: {
        h5: {
          fontWeight: "bold",
        },
        h4: {
          fontWeight: "600",
        },
      },
      MuiButton: {
        outlinedSecondary: {
          color: "black",
          fontWeight: "bold",
          border: "2px solid rgba(245, 0, 87, 0.5)",
        },
      },
    },
  });

  return (
    <>
      <Navbar />
      <ThemeProvider theme={overrideTheme}>
        <CustomizedCarousel />
        <Grid
          container
          style={{
            padding: "0rem 4rem 4rem",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <Grid item sm={6} xs={12} style={{ marginTop: "3rem" }}>
            <img
              alt=""
              src="/aboutus-img.png"
              className={classes.aboutUsImage}
            />
          </Grid>
          <Grid item sm={6} xs={12} style={{ marginTop: "3rem" }}>
            <Typography variant="h4">About Us</Typography>
            <Typography
              variant="h6"
              style={{ marginTop: "3rem", textAlign: "left" }}
            >
              Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
              text used in design when creating content. It helps designers plan
              out where the content will sit
            </Typography>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
