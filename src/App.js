import logo from './assets/images/logo.PNG';
import './App.css';
import { CssBaseline, Grid, Typography, Card, CardContent } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';

const theme = createTheme({
  palette: {
    background: {
      primary: '#FFF',
      secondary: '#62C6F2',
    },
    text: {
      primary: '#000',
      secondary: '#62C6F2',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Grid container spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '90vh' }}
      >
        <Grid container xs={12} rowSpacing={3} alignItems="center" justifyContent="center" height="50vh">
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Typography variant="h3" align="center" padding="10px">Welcome to the STARx Survey Tool</Typography>
            <Typography variant="h3" align="center" padding="10px">Bienvenida a la STARx Encuesta</Typography>
          </Grid>
          <Grid item xs={1} />
        </Grid>
        <Grid item xs={6} align="center">
          <Card sx={{ minWidth: "75%", maxWidth: "75%", minHeight: "90%", maxHeight: "90%", bgcolor: "background.secondary", boxShadow: 10}}>
            <CardContent>
              <Typography variant="h5" align="center" paddingBottom="10px">English</Typography>
              <Typography a>Create a new account</Typography>
              <Typography a>Log into an existing account</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} align="center">
          <Card sx={{ minWidth: "75%", maxWidth: "75%", minHeight: "90%", maxHeight: "90%", bgcolor: "background.secondary", boxShadow: 10}}>
            <CardContent>
              <Typography variant="h5" align="center" paddingBottom="10px">Español</Typography>
              <Typography a>Crea una cuenta nueva</Typography>
              <Typography a>Iniciar sesión en una cuenta existente</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
