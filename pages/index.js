import React from "react";

// core components
import BodyView from "../components/BodyView";
import Nav from "../components/Nav";

// context
import { InitializedProvider } from "../contexts/casecontroller";

// mui
import {
  makeStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { red, lightBlue } from "@material-ui/core/colors";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Toolbar } from "@material-ui/core";
import { Fragment } from "react";

const theme = createMuiTheme({
  palette: {
    primary: lightBlue,
    accent: red,
    type: "light"
  },
  direction: "rtl"
});

const useStyles = makeStyles(() => ({
  root: {
    color: "#320570",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: "100",
    display: "flex",
    flexDirection: "row"
  }
}));

//DB: if you want text to show up at bottom of screen, put in "" in b/n <p>'s
function Home() {
  const classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <div>
          <InitializedProvider>
            <Nav></Nav>
            <Toolbar />
            <Container fixed>
              <Box my={2}>
                <BodyView />
              </Box>
            </Container>
            <Container fixed>
              <p></p>
            </Container>
          </InitializedProvider>
        </div>
      </MuiThemeProvider>
    </Fragment>
  );
}

export default Home;
