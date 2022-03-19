// Details components contains:
//  1) how session run render.
//
// In this component you found ( mui)
//
//  uses ( <HowItRun product={product object}/>)

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";

const HowItRun = ({ product }) => {
  // HowItRun styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <Grid item container className={classes.listContainer}>
        <Grid item className={classes.title}>
          How the program runs
        </Grid>
        <Box component="ul" className={classes.list}>
          {product.howItRun.map((step, id) => (
            <Box component="li" key={id}>
              {step}.
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid item container className={classes.listContainer}>
        <Grid item className={classes.title}>
          How this program helps you
        </Grid>
        <Box component="ul" className={classes.list}>
          {product.howThisProgramHelpsYou.map((penfet, id) => (
            <Box component="li" key={id}>
              {penfet}.
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default HowItRun;
