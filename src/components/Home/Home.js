import React from "react";
import Navbar from "./Navbar";
import Box from "@material-ui/core/Box";
import ListPost from "../Posts/ListPost";

function Home(props) {
  return (
    <div style={{ background: "#F2F2F7", width: "100%" }}>
      <Navbar allData={props.userData} />
      <Box>
        <Box>
          {/* The list of posts */}
          <ListPost allData={props.userData} postData={props.postData} />
        </Box>
      </Box>
    </div>
  );
}
export default Home;
