import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import PageNavegate from "../PageNavegate";

const SectionsTitleWithLink = ({ heading, linkName, link }) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.headContainer}>
      <Grid item xs={12} sm={4}></Grid>
      <Grid item xs={12} sm={4}>
        <Typography component="h3" className={classes.heading}>
          {heading}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.aboutLink}>
        <PageNavegate name={linkName} link={link} />
      </Grid>
    </Grid>
  );
};

export default SectionsTitleWithLink;
