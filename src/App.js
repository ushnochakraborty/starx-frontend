//import logo from "./assets/images/logo.PNG";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import NavBar from "./components/NavBar";
import NewNavBar from "./components/NewNavBar";
import SAdolESP from "./components/ESP-STARx-adolescent";
import SAdol from "./components/STARx-adolescent";
import SAdult from "./components/STARx-adult";
import SAdultESP from "./components/ESP-STARx-adult";
import SParent from "./components/STARx-parent";
import SParentESP from "./components/ESP-STARx-parent";
import TAdol from "./components/TRxANSITION-adolescent";
import TAdult from "./components/TRxANSITION-adult";
import TParent from "./components/TRxANSITION-parent";
import Home from "./components/NewHome";
import Support from "./components/Support";
import { Suspense } from "react";

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
    <Suspense fallback={null}>
      <div>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NewNavBar />
        </ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Support" element={<Support />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/TRxANSITION-adolescent" element={<TAdol />}></Route>
            <Route path="/TRxANSITION-adult" element={<TAdult />}></Route>
            <Route path="/TRxANSITION-parent" element={<TParent />}></Route>
            <Route path="/ESP-STARx-adult" element={<SAdultESP />}></Route>
            <Route path="/STARx-adult" element={<SAdult />}></Route>
            <Route path="/ESP-STARx-adolescent" element={<SAdolESP />}></Route>
            <Route path="/STARx-adolescent" element={<SAdol />}></Route>
            <Route path="/STARx-parent" element={<SParent />}></Route>
            <Route path="/ESP-STARx-parent" element={<SParentESP />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
