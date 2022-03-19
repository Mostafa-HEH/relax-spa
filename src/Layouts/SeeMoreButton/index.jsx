// SeeMoreButton components contains:
//  1) SeeMoreButton render.
//
// In this component you found ( mui)
//
//  uses ( <SeeMoreButton />)

import Button from "@mui/material/Button";

import { useStyles } from "./styles";

const SeeMoreButton = () => {
  // SeeMoreButton styles from './styles.js'.
  const classes = useStyles();

  return (
    <Button variant="text" className={classes.container}>
      See more
    </Button>
  );
};

export default SeeMoreButton;
