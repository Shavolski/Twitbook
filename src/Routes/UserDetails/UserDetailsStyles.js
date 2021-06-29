import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    maxWidth: 500,
    margin: "72px 148px 32px 148px",
  },
  userDetailsBC: {
    backgroundColor: "#F2F2F7",
  },
  emailDisplay: {
    marginLeft: "32px",
  },
  bottomDivider: {
    margin: "0em 2.5em",
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
  mainGrid: {
    marginTop: "60px",
  },
  title: {
    fontWeight: "normal",
    marginBottom: "10px",
  },
  userPosts: {
    backgroundColor: "transparent",
    boxShadow: "10px 10px 5px transparent",
  },
  cardLink: {
    textDecoration: "none",
    color: "black",
  },
}));
