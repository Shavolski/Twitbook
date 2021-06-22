import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../../../Shared/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AuthorNameButton from "../../../../Shared/AuthorButton/AuthorNameButton.js";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    maxWidth: 850,
    margin: "72px 148px 72px 148px",
  },
  titleName: {
    fontSize: "48px",
    lineHeight: "56px",
    fontWeight: "400",
  },
  titleBody: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.5px",
    fontStyle: "normal",
  },
});

function PostDetails({ post, user, index }) {
  const classes = useStyles();
  const location = useLocation({});

  //const title = props.match.params.title;
  const { title, body } = location.state;
  //const match = useRouteMatch("/post/${postData.title}");

  //console.log(location);
  return (
    <div style={{ backgroundColor: "#F2F2F7", height: "120vh" }}>
      <Navbar />
      <Container id="fullpost">
        <Box className={classes.root}>
          <Typography
            variant="h3"
            gutterBottom
            className={classes.titleName}
            display="block"
          >
            {title}
          </Typography>

          <AuthorNameButton post={post} user={user} key={index} />

          <Typography
            variant="body1"
            gutterBottom
            display="block"
            className={classes.titleBody}
          >
            {body}
          </Typography>
        </Box>
      </Container>
    </div>
  );
}
export default PostDetails;
