import Button from "@mui/material/Button";

import { useStyles } from "./styles";

const SeeMoreButton = () => {
  const classes = useStyles();

  return (
    <Button variant="text" className={classes.container}>
      See more
    </Button>
  );
};

export default SeeMoreButton;
