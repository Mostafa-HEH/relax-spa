// PageNavegate components contains:
//  1) spcial lik to other page
//
// In this component you found (react route dom , mui)
//
//  uses ( <PageNavegate name="link name here" link="link url here"/> )

import { Link as RRDLink } from "react-router-dom";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useStyles } from "./styles";

const PageNavegate = ({ name, link }) => {
  // PageNavegate styles from './styles.js'.
  const classes = useStyles();

  return (
    <Link component={RRDLink} to={link} className={classes.link}>
      <Typography variant="body1">{name}</Typography>
      <ArrowForwardIcon fontSize="small" />
    </Link>
  );
};

export default PageNavegate;
