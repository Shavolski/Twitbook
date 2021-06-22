import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

//This is for the menu list when searching for usernames
const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "600",
    marginBottom: "10px",
  },
  userNameButton: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#007AFF",
    textDecoration: "none",
  },
  cardSize: {
    padding: "20px",
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "#F2F2F7" }}>
      <Container>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Box className={classes.cardSize}>
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Oops, we couldn’t find the user you were looking for.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <Link to="/" className={classes.userNameButton}>
                    Back home
                  </Link>
                </Button>
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Error;
