import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Appbar from "shared/Appbar/Appbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import { useParams } from "react-router-dom";
import {
  fetchSingleUser,
  fetchPostData,
  fetchUserPosts,
} from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./UserDetailsStyles";

const Users = () => {
  const classes = useStyles();

  const params = useParams();

  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      let user = await fetchSingleUser(params.id);
      let posts = await fetchUserPosts(params.id);

      setUser(user.data);
      setUserPosts(posts.data);
    };
    fetchUserData();
  }, []);

  console.log(user);
  return (
    <div className={classes.userDetailsBC}>
      <Appbar />
      <Container>
        <Box className={classes.root}>
          <Typography
            variant="h3"
            gutterBottom
            className={classes.titleName}
            display="block"
          >
            {user.name}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            display="block"
            className={classes.titleUserName}
          >
            @{user.username}
          </Typography>

          <Box display="inline">
            <MailIcon className={classes.titleIcon} />
            <Typography
              variant="subtitle2"
              gutterBottom
              display="inline"
              className={classes.titleUserDetails}
            >
              {user.website}
            </Typography>
          </Box>
          <Box
            component="span"
            display="inline"
            className={classes.emailDisplay}
          >
            <MailIcon className={classes.titleIcon} />
            <Typography
              variant="subtitle2"
              gutterBottom
              display="inline"
              className={classes.titleUserDetails}
            >
              {user.email}
            </Typography>
          </Box>
        </Box>
        <Container>
          <Divider className={classes.bottomDivider} />
        </Container>
        <Container maxWidth="md">
          <Grid container spacing={4} align="left" className={classes.mainGrid}>
            {userPosts.map((posts, index) => {
              return (
                <Grid item xs={12} key={index}>
                  <Card className={classes.userPosts} boxShadow={0}>
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="h2"
                        className={classes.title}
                      >
                        {posts.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        color="textSecondary"
                      >
                        {posts.body}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Container>
    </div>
  );
};

Users.propTypes = {
  user: PropTypes.string,
};

export default Users;
