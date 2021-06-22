import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Box from "@material-ui/core/Box";
import PostList from "./Posts/PostList/PostList";

const Dashboard = ({ userData, postData }) => {
  return (
    <div style={{ background: "#F2F2F7", width: "100%" }}>
      <Navbar userData={userData} />
      <Box>
        <Box>
          <PostList userData={userData} postData={postData} />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
