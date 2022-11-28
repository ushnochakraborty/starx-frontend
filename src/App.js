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
import Home from "./components/home";

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
      <div className="wrapper">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
