import logo from "./assets/images/logo.PNG";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import TAdol from "./components/TRxANSITION-adolescent";
import TAdult from "./components/TRxANSITION-adult";
import Home from "./components/home";
import About from "./components/about";

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
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TRxANSITION-adolescent" element={<TAdol />}></Route>

          <Route path="/TRxANSITION-adult" element={<TAdult />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
