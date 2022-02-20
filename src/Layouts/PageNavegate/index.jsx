import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Link as RRDLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useStyles } from "./styles";

const PageNavegate = ({ name, link }) => {
  const classes = useStyles();

  return (
    <Link component={RRDLink} to={link} className={classes.link}>
      <Typography variant="body1">{name}</Typography>
      <ArrowForwardIcon fontSize="small" />
    </Link>
  );
};

export default PageNavegate;
