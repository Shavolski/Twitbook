import React, { useState, useEffect } from "react";
import axios from "axios";
import Appbar from "shared/Appbar/Appbar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Post from "./Post/Post";
import {
  fetchPostData,
  fetchUserData,
  fetchSinglePost,
} from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./DashboardStyles";

const Dashboard = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let users = await fetchUserData();
      let posts = await fetchPostData();

      setUserData(users.data);
      setPostData(posts.data);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.dashboardWidth}>
      <Appbar userData={userData} />
      <Box>
        <Container>
          <Grid container spacing={4} align="left" className={classes.mainGrid}>
            {postData.map((post, index) => {
              const user = userData.find((user) => user.id === post.userId);
              return <Post post={post} user={user} key={index} />;
            })}
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

Dashboard.propTypes = {
  userData: PropTypes.string,
  postData: PropTypes.string,
};

export default Dashboard;
