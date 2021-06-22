import React from "react";
import { useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
//import Navbar from "../Shared/Navbar/Navbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    height: "100%",
    width: "100%",
    maxWidth: 500,
    margin: "72px 148px 32px 148px",
  },
  titleName: {
    fontSize: "48px",
    lineHeight: "56px",
    fontWeight: "400",
  },
  titleUserName: {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: "500",
    letterSpacing: "0.15px",
    marginBottom: "13px",
  },
  titleUserDetails: {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "500",
    letterSpacing: "0.1px",
    color: "#007AFF",
    padding: "4px",
  },
  titleIcon: {
    color: "#007AFF",
    fontSize: "13px",
    lineHeight: "18px",
    width: "18px",
    height: "18px",
    marginBottom: "-4px",
  },
});

const Users = (props) => {
  const classes = useStyles();
  const location = useLocation({});

  const username = props.match.params.username;
  const { name, website, email } = location.state;

  console.log(location);
  return (
    <div style={{ backgroundColor: "#F2F2F7" }}>
      <Container>
        <Box className={classes.root}>
          <Typography
            variant="h3"
            gutterBottom
            className={classes.titleName}
            display="block"
          >
            {name}
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            display="block"
            className={classes.titleUserName}
          >
            @{username}
          </Typography>

          <Box display="inline">
            <MailIcon className={classes.titleIcon} />
            <Typography
              variant="subtitle2"
              gutterBottom
              display="inline"
              className={classes.titleUserDetails}
            >
              {website}
            </Typography>
          </Box>
          <Box component="span" display="inline" style={{ marginLeft: "32px" }}>
            <MailIcon className={classes.titleIcon} />
            <Typography
              variant="subtitle2"
              gutterBottom
              display="inline"
              className={classes.titleUserDetails}
            >
              {email}
            </Typography>
          </Box>
        </Box>
        <Container>
          <Divider style={{ margin: "0em 2.5em" }} />
        </Container>
      </Container>
    </div>
  );
};

export default Users;
