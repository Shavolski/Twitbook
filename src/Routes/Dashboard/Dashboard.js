import React, { useState, useEffect } from "react";
import Appbar from "shared/Appbar/Appbar";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Post from "./Post/Post";
import { fetchPostData, fetchUserData } from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./DashboardStyles";

const Dashboard = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let users = await fetchUserData();
      let posts = await fetchPostData();

      setUserData(users.data);
      setPostData(posts.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className={classes.dashboardWidth}>
      <Appbar userData={userData} postData={postData} />
      <Box>
        <Container>
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="100vh"
            >
              <CircularProgress />
            </Box>
          ) : (
            <Grid
              container
              spacing={4}
              align="left"
              className={classes.mainGrid}
            >
              {postData.map((post, index) => {
                const user = userData.find((user) => user.id === post.userId);
                return <Post post={post} user={user} key={index} />;
              })}
            </Grid>
          )}
        </Container>
      </Box>
    </div>
  );
};

Dashboard.propTypes = {
  user: PropTypes.string,
  post: PropTypes.string,
};

export default Dashboard;
