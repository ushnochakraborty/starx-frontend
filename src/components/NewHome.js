import React from "react";
import {
  Container,
  CssBaseline,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import SAdol from "./TRxANSITION-adolescent";
import About from "./about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "../assets/images/logo.PNG";

export default function home() {
  return (
    <Container>
      <div>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "90vh" }}
        >
          <Grid item xs={12} align="center">
            <br />
            <br />
            <img src={logo} alt="logo" width="50%" height="50%" />
            <div className="starx-program">UNC STARx Program</div>
            <br />
            <br />
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <div className="survey-card">
              <h1>STARx</h1>
              <div className="survey-option">
                <a href="/STARx-parent">
                  <div className="button" href="/STARx-parent">
                    <p>
                      STARx
                      <br />
                      <i>Parent Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/STARx-adult">
                  <div className="button" href="/STARx-adult">
                    <p>
                      STARx
                      <br />
                      <i>Adult Patient Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/STARx-adolescent">
                  <div className="button" href="/STARx-adolescent">
                    <p>
                      STARx
                      <br />
                      <i>Adolescent Patient Survey</i>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <div className="survey-card">
              <h1>TRxANSITION</h1>
              <div className="survey-option">
                <a href="/TRxANSITION-parent">
                  <div className="button" href="/STARx-parent">
                    <p>
                      TRxANSITION
                      <br />
                      <i>Parent Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/TRxANSITION-adult">
                  <div className="button" href="/STARx-adult">
                    <p>
                      TRxANSITION
                      <br />
                      <i>Adult Patient Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/TRxANSITION-adolescent">
                  <div className="button" href="/STARx-adolescent">
                    <p>
                      TRxANSITION
                      <br />
                      <i>Adolescent Patient Survey</i>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <br /> <br />
    </Container>
  );
}
