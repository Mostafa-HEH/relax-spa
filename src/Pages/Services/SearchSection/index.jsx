import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

import { useStyles } from "./styles";

const SearchSection = () => {
  const [search, setSearch] = useState("");
  const classes = useStyles();


  return (
    <Grid item container className={classes.container}>
      <FormControl variant="filled">
        <TextField
          label="search service..."
          variant="filled"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormControl>
    </Grid>
  );
};

export default SearchSection;
