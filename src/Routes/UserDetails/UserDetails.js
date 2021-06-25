import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Appbar from "shared/Appbar/Appbar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MailIcon from "@material-ui/icons/Mail";
import Divider from "@material-ui/core/Divider";
import { useParams } from "react-router-dom";
import { fetchSingleUser } from "shared/Utils/Api";
import PropTypes from "prop-types";
import { useStyles } from "./UserDetailsStyles";

const Users = () => {
  const classes = useStyles();

  const params = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      let user = await fetchSingleUser(params.id);

      setUser(user.data);
    };
    fetchUser();
  }, []);

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
      </Container>
    </div>
  );
};

Users.propTypes = {
  user: PropTypes.string,
};

export default Users;
