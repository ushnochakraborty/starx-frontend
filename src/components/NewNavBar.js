import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
  Select,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React, {useState} from "react";
import "./NewNavBar.css";
import { fontStyle } from "@mui/system";
import { useTranslation } from "react-i18next";
import i18next from "i18next"
import { useEffect } from "react"
import { Link } from "react-router-dom";
import { changeLang } from "../langSlice"
import { useDispatch } from "react-redux";

export default function NewNavBar() {
  const { i18n, t } = useTranslation(["navbar"])
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem("i18nextLng")?.length>2){
      i18next.changeLanguage("en")
    }
  },[])

  const pages = [
    [t("about"), "https://www.med.unc.edu/transition/about-us-1/"],
    [
      t("resources"),
      "https://www.med.unc.edu/transition/transition-tools/copy_of_educational-handouts-for-trxansition-indextm/",
    ],
    [t("support"), "/Support"],
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChangeLang = (event) => {
    i18n.changeLanguage(event.target.value)
    dispatch(changeLang(event.target.value))
  }

  const theme = createTheme({
    palette: {
      background: {
        primary: "#027FAE",
        secondary: "#FFF",
      },
      text: {
        primary: "#000",
        secondary: "#62C6F2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{justifyContent: "space-between"}}>
            <Box>
              <div className="school-of-medicine" justifyContent="right">
                <a target="_top" href="https://www.med.unc.edu/" style={{color: "black"}}>
                  UNC SCHOOL
                  <span sx={{ padding: "0 epx 0 1px" }}>
                    <i> of </i>
                  </span>
                  Medicine
                </a>
              </div>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                sx={{ color: "black" }}
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    a
                    href={page[1]}
                  >
                    <Typography textAlign="center">{page[0]}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              justifyContent="right"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                key={page}
                onClick={handleCloseNavMenu}
                a
                href={page[1]}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  paddingLeft: "3%",
                  paddingRight: "3%"
                }}
                >
                {page[0]}  
                </Button>
              ))}
              <Select
                id="demo-simple-select"
                value={localStorage.getItem("i18nextLng")}
                onChange={handleChangeLang}
                variant="standard"
                IconComponent={0}
                style={{paddingLeft: "2%"}}
              >
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'es'}>Español</MenuItem>
              </Select>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
