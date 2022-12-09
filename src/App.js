//import logo from "./assets/images/logo.PNG";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import SAdol from "./components/STARx-adolescent";
import SAdult from "./components/STARx-adult";
import SParent from "./components/STARx-parent";
import TAdol from "./components/TRxANSITION-adolescent";
import TAdult from "./components/TRxANSITION-adult";
import TParent from "./components/TRxANSITION-parent";
import Home from "./components/NewHome";
import About from "./components/about";
import Resources from "./components/Resources";
import Support from "./components/Support";

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
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/Support" element={<Support />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/TRxANSITION-adolescent" element={<TAdol />}></Route>
          <Route path="/TRxANSITION-adult" element={<TAdult />}></Route>
          <Route path="/TRxANSITION-parent" element={<TParent />}></Route>
          <Route path="/STARx-adult" element={<SAdult />}></Route>
          <Route path="/STARx-adolescent" element={<SAdol />}></Route>
          <Route path="/STARx-parent" element={<SParent />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
