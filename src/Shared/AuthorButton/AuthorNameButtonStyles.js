import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  userNameButton: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "10px",
    lineHeight: "16px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#007AFF",
  },
  userNameLink: {
    textDecoration: "none",
    color: "#007AFF",
  },
}));
