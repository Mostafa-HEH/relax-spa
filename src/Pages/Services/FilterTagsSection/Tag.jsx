import Grid from "@mui/material/Grid";

import { useStyles } from "./tag.syles";

const Tag = ({ name, selected, id, setSelected }) => {
  const classes = useStyles({ selected });

  return (
    <Grid item className={classes.container} onClick={() => setSelected(id)}>
      {name}
    </Grid>
  );
};

export default Tag;
