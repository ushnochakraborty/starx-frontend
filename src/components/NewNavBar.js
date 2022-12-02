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
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import React from "react";
import "./NewNavBar.css";

export default function NewNavBar() {
  const pages = [
    ["About", "/About"],
    ["Resources", "/Resources"],
    ["Support", "/Support"],
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
      <AppBar position="static" sx={{ bgcolor: "background.primary" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                sx={{ color: "white" }}
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
            <div className="school-of-medicine">
              <a target="_top" href="https://www.med.unc.edu/">
                UNC SCHOOL
                <span sx={{ padding: "0 epx 0 1px" }}>
                  <i> of </i>
                </span>
                Medicine
              </a>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
