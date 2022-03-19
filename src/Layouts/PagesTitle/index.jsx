// Navbar components contains:
//  1) component render page title
//
// In this component you found (react route dom )
//
//  uses ( <PagesTitle="title of page here"/> )

import Grid from "@mui/material/Grid";

import { useStyles } from "./styles";

const PagesTitle = ({ title }) => {
  // PagesTitle styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      {title}
    </Grid>
  );
};

export default PagesTitle;
