import React from "react";
import { useLocation } from "react-router-dom";
import Appbar from "shared/Appbar/Appbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./UserDetailsStyles";

const Users = ({ userData, match }) => {
  const classes = useStyles();
  const location = useLocation({});

  const username = match.params.username;
  const { name, website, email } = location.state;

  return (
    <div className={classes.userDetailsBC}>
      <Appbar userData={userData} />
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
              {email}
            </Typography>
          </Box>
        </Box>
        <Container>
          <Divider className={classes.bottomDivider} />
        </Container>
      </Container>
    </div>
  );
};

export default Users;
