import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  dashboardWidth: {
    background: "#F2F2F7",
    width: "100%",
  },
  mainGrid: {
    marginTop: "100px",
  },
  title: {
    fontWeight: "600",
    marginBottom: "10px",
  },
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
}));
