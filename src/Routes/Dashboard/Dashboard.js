import React from "react";
import Appbar from "shared/Appbar/Appbar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Post from "./Post/Post";
import { useStyles } from "./DashboardStyles";

const Dashboard = ({ userData, postData }) => {
  const classes = useStyles();

  return (
    <div className={classes.dashboardWidth}>
      <Appbar userData={userData} />
      <Box>
        <Box>
          <Container>
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
          </Container>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
