import logo from "./assets/images/logo.PNG";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import Survey from "./components/Survey";
import SAdol from "./componenets/s-adol";

const theme = createTheme({
  palette: {
    background: {
      primary: "#FFF",
      secondary: "#62C6F2",
    },
    text: {
      primary: "#000",
      secondary: "#62C6F2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route path="/manatee">
            <Manatee />
          </Route>
          <Route path="/narwhal">
            <Narwhal />
          </Route>
          <Route path="/whale">
            <Whale />
          </Route>
        </Switch>
      </BrowserRouter>
      <Grid
        container
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "90vh" }}
      >
        <Grid
          container
          xs={12}
          rowSpacing={3}
          alignItems="center"
          justifyContent="center"
          height="50vh"
        >
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Typography variant="h3" align="center" padding="10px">
              Welcome to the STARx Survey
            </Typography>
            <Typography variant="h3" align="center" padding="10px">
              Bienvenida a la STARx Encuesta
            </Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid item xs={6} align="center">
          <Card
            sx={{
              minWidth: "75%",
              maxWidth: "75%",
              minHeight: "90%",
              maxHeight: "90%",
              bgcolor: "background.secondary",
              boxShadow: 10,
              //find new content to replace language requirements for the adii
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" paddingBottom="10px">
                English
              </Typography>
              <Typography a>STARx Parent Survey</Typography>
              <Typography a>STARx Adult Patient Survey</Typography>
              <Typography a>STARx Pediatric Patient Survey</Typography>
              <br></br>
              <Typography a>TRxANSITION Parent Survey</Typography>
              <Typography a>TRxANSITION Adolescent Patient Survey</Typography>
              <Typography a>TRxANSITION Adult Patient Survey</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} align="center">
          <Card
            sx={{
              minWidth: "75%",
              maxWidth: "75%",
              minHeight: "90%",
              maxHeight: "90%",
              bgcolor: "background.secondary",
              boxShadow: 10,
            }}
          >
            <CardContent>
              <Typography variant="h5" align="center" paddingBottom="10px">
                Español
              </Typography>
              <Typography a>STARx Encuesta de Padres</Typography>
              <Typography a>STARx Encuesta de Pacientes Adultos</Typography>
              <Typography a>
                STARx Encuesta de Pacientes Adolescentes
              </Typography>
              <br></br>
              <Typography a>TRxANSITION Encuesta de Padres</Typography>
              <Typography a>
                TRxANSITION Encuesta de Pacientes Adultos
              </Typography>
              <Typography a>
                TRxANSITION Encuesta de Pacientes Adolescentes
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Survey />
    </ThemeProvider>
  );
}

export default App;
