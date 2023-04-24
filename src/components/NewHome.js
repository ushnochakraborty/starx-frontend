import React from "react";
import { Button, Container, Grid, Box, Link, Grow, FormControlLabel } from "@mui/material";
import placeholder from "../assets/images/placeholder.jpg"
import { useTranslation } from "react-i18next";
import { ListAlt, VolunteerActivism, Poll, PermPhoneMsg } from "@mui/icons-material"
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles'

export default function Home() {
  const { t, i18n } = useTranslation('home')
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const [checkedS, setCheckedS] = React.useState(false);
  const handleChangeS = () => {
    setCheckedS((prev) => !prev);
  };
  const [checkedT, setCheckedT] = React.useState(false);
  const handleChangeT = () => {
    setCheckedT((prev) => !prev);
  };
  const [checkedD, setCheckedD] = React.useState(false);
  const handleChangeD = () => {
    setCheckedD((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
    <Container disableGutters>

        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="center"
          background
          style={{ minHeight: "90vh" }}
        >
          <Grid container xs={12} align="center">
            <Grid item xs={false} lg={1}/>
            <Grid container xs={12} lg={10}>
              <Grid item xs={12} sm={6} height={360} 
                style={{backgroundImage: `url(${placeholder})`, backgroundSize: "cover", objectFit: "cover"}}/>
              <Grid container xs={12} sm={6}>
                <Grid item xs={12} sm={6} height={180} padding="5%" backgroundColor="#1F78B7">
                  <div className="starx-survey">
                  <FormControlLabel 
                      control={
                        <Box onClick={handleChangeS}>
                          <ListAlt fontSize="large" style={{color: "white"}}/>
                          <h3 align="center" style={{margin: 0, color: "white"}}>{t("title-starx")}</h3>
                        </Box>
                      }
                      style={{margin: 0, marginTop: checkedS? 0 : "10%", transition: "0.2s"}}
                    />
                    <Grow in={checkedS} timeout= {checkedS? 500 : 200}>
                      <Box>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/STARx-adolescent" underline="hover" color="white">{t("adolescent")}</Link>
                        </h5>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/STARx-adult" underline="hover" color="white">{t("adult")}</Link>
                        </h5>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/STARx-parent" underline="hover" color="white">{t("parent")}</Link>
                        </h5>
                      </Box>
                    </Grow>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} height={180} padding="5%" backgroundColor="#3085C0">
                  <div className="transition-index" >
                    <FormControlLabel 
                      control={
                        <Box onClick={handleChangeD}>
                          <VolunteerActivism fontSize="large" style={{color: "white"}}/>
                          <h3 align="center" style={{margin: 0, color: "white"}}>{t("title-transition")}</h3>
                        </Box>
                      }
                      style={{margin: 0, marginTop: checkedD? 0 : "10%", transition: "0.2s"}}
                    />
                    <Grow in={checkedD} timeout= {checkedD? 500 : 200}>
                      <Box>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/TRxANSITION-adolescent" underline="hover" color="white">{t("adolescent")}</Link>
                        </h5>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/TRxANSITION-adult" underline="hover" color="white">{t("adult")}</Link>
                        </h5>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/TRxANSITION-parent" underline="hover" color="white">{t("parent")}</Link>
                        </h5>
                      </Box>
                    </Grow>
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} height={180} padding="5%" backgroundColor="#519BD0">
                  <div className="request-data">
                  <FormControlLabel 
                      control={
                        <Box onClick={handleChangeT}>
                          <VolunteerActivism fontSize="large" style={{color: "white"}}/>
                          <h3 align="center" style={{margin: 0, color: "white"}}>Request Data</h3>
                        </Box>
                      }
                      style={{margin: 0, marginTop: checkedT? 0 : "10%", transition: "0.2s"}}
                    />
                    <Grow in={checkedT} timeout= {checkedT? 500 : 200}>
                      <Box>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/Data-portal" underline="hover" color="white">Admin Portal</Link>
                        </h5>
                        <h5 align="center" style={{margin: 0}}>
                          <Link href="/Request-portal" underline="hover" color="white">User Portal</Link>
                        </h5>
                      </Box>
                    </Grow>
                  
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} height="50%" padding="10%" backgroundColor="#6AABDA">
                  <div className="contact-us">
                    <PermPhoneMsg fontSize="large" style={{color: "white"}}/>
                    <h3 align="center" style={{margin: 0, color: "white"}}>{t("contact-us")}</h3>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={false} lg={1}/>
          </Grid>
        </Grid>
  
      <br /> <br />
    </Container>
    </ThemeProvider>
  );
}
