// Search Section component contains:
//  1) Search Section .
//
// In this component you found ( mui )
//
//  uses                    ( <SearchSection/>)

import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import { useStyles } from "./styles";

// TODO handle  search section
const SearchSection = () => {
  // search keyword state
  const [search, setSearch] = useState("");

  // SearchSection styles from './styles.js'.
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </Grid>
  );
};

export default SearchSection;
