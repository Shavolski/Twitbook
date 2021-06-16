import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//import CircularProgress from "@material-ui/core/CircularProgress";

//This is for the menu list when searching for usernames
const useStyles = makeStyles((theme) => ({
  root: {},
  mainGrid: {
    marginTop: "100px",
  },
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
  },
}));

//This let's the user search for usernames available.
const ListPost = (props) => {
  const classes = useStyles();
  // let userNames = props.userData;
  // let postData = props.postData;
  //
  // userNames = userNames
  //   .filter((user) => user.id === postData.userId)
  //   .map((data) => (
  //     <Link style={{ textDecoration: "none", color: "#007AFF" }} key={data.id}>
  //       {data.username}
  //     </Link>
  //   ));

  //console.log("aaaaah WORK" + userNames);
  return (
    <Container>
      <Grid container spacing={4} align="left" className={classes.mainGrid}>
        {props.postData.map((postData, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mx={6} key={index}>
              <Card className={classes.root}>
                <CardContent>
                  <Link
                    to={{
                      pathname: `/post/${postData.title}`,
                      state: {
                        title: postData.title,
                        body: postData.body,
                      },
                    }}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography
                      variant="h5"
                      component="h2"
                      className={classes.title}
                    >
                      {postData.title}
                    </Typography>
                  </Link>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    {postData.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.userNameButton}
                  ></Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
export default ListPost;
