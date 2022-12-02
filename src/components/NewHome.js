import React from "react";
import { Container, Grid } from "@mui/material";
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
          background
          style={{ minHeight: "90vh" }}
        >
          <Grid item xs={12} align="center">
            <br />
            <br />
            <img src={logo} alt="logo" width="20%" height="20%" />
            <div className="starx-program">UNC STARx Program</div>

            <br />
          </Grid>
          <Grid item xs={12} sm={6} align="center">
            <div className="survey-card">
              <h1>STARx</h1>
              <div className="survey-option">
                <a href="/STARx-parent">
                  <div className="button" href="/STARx-parent">
                    <p>
                      <i>Parent Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/STARx-adult">
                  <div className="button" href="/STARx-adult">
                    <p>
                      <i>Adult Patient Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/STARx-adolescent">
                  <div className="button" href="/STARx-adolescent">
                    <p>
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
                      <i>Parent Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/TRxANSITION-adult">
                  <div className="button" href="/STARx-adult">
                    <p>
                      <i>Adult Patient Survey</i>
                    </p>
                  </div>
                </a>
              </div>
              <div className="survey-option">
                <a href="/TRxANSITION-adolescent">
                  <div className="button" href="/STARx-adolescent">
                    <p>
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
