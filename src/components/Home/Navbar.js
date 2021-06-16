import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Search from "./Search";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleName: {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
  },
  title: {
    flexGrow: 1,
  },

  toolBar: {
    flexGrow: 1,
    padding: "0px",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "white" }}>
        <Container>
          <Toolbar className={classes.toolBar}>
            <Typography edge="start" variant="h6" className={classes.title}>
              {/* It will lead you back to homepage */}
              <Link to="/" className={classes.titleName}>
                TwitBook
              </Link>
            </Typography>
            {/* Search input goes here */}
            <Search allData={props.userData} />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
export default Navbar;
