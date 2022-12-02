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
import sAdol from "./components/STARx-adolescent";
import sAdult from "./components/STARx-adult";
import sPar from "./components/STARx-parent";
import TAdol from "./components/TRxANSITION-adolescent";
import TAdult from "./components/TRxANSITION-adult";
import TParent from "./components/TRxANSITION-parent";
import Home from "./components/home";
import About from "./components/about";

const theme = createTheme({
  palette: {
    background: {
      primary: "#FFF",
      secondary: "#027FAE",
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
          <Route path="/TRxANSITION-parent" element={<TParent />}></Route>

          <Route path="/STARx-adult" element={<sAdult />}></Route>
          <Route path="/STARx-adolescent" element={<sAdol />}></Route>
          <Route path="/STARx-parent" element={<sPar />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
