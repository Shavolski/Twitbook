import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import Box from "@material-ui/core/Box";
import ListPost from "./../Posts/ListPost/ListPost";

function Home({ userData, postData }) {
  return (
    <div style={{ background: "#F2F2F7", width: "100%" }}>
      <Navbar userData={userData} />
      <Box>
        <Box>
          {/* The list of posts */}
          <ListPost userData={userData} postData={postData} />
        </Box>
      </Box>
    </div>
  );
}
export default Home;
