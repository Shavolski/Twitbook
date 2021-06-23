import React from "react";
import Appbar from "../../Shared/Navbar/Appbar/Appbar";
import Box from "@material-ui/core/Box";
import PostList from "./Posts/PostList/PostList";
import { useStyles } from "./DashboardStyles";

const Dashboard = ({ userData, postData }) => {
  const classes = useStyles();

  return (
    <div className={classes.dashboardWidth}>
      <Appbar userData={userData} />
      <Box>
        <Box>
          <PostList userData={userData} postData={postData} />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
