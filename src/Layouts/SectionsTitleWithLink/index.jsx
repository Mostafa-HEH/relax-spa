import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useStyles } from "./styles";
import PageNavegate from "../PageNavegate";

const SectionsTitleWithLink = ({ heading, linkName, link }) => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item></Grid>
      <Grid item>
        <Typography component="h3" className={classes.heading}>
          {heading}
        </Typography>
      </Grid>
      <Grid item className={classes.aboutLink}>
        {link ? <PageNavegate name={linkName} link={link} /> : null}
      </Grid>
    </Grid>
  );
};

export default SectionsTitleWithLink;
