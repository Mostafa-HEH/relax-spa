import React from "react";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

import { useStyles } from "./massageSlide.styles";
import Buttons from "./Buttons";

const massageTypes = [
  { id: 1, name: "Deep full body" },
  { id: 2, name: "Deep back nick" },
  { id: 3, name: "Full back" },
];

const MassageSlide = ({ step, handleNext, handleBack }) => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      age: "",
      geneder: "",
      massiergender: "",
    },
    onSubmit: (values) => {
      handleNext(values);
    },
  });

  return (
    <Grid
      item
      container
      component="form"
      variant="outlined"
      className={classes.container}
      onSubmit={formik.handleSubmit}
    >
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <TextField
            label="Age"
            variant="filled"
            type="text"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <InputLabel id="geneder">Geneder</InputLabel>
          <Select
            labelId="geneder"
            name="geneder"
            variant="filled"
            label="Gender"
            value={formik.values.geneder}
            onChange={formik.handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <InputLabel id="massiergender">Massier geneder</InputLabel>
          <Select
            labelId="massiergender"
            name="massiergender"
            variant="filled"
            label="Massier Gender"
            value={formik.values.massiergender}
            onChange={formik.handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <Autocomplete
            multiple
            options={massageTypes.map((option) => option.name)}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="outlined"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                variant="filled"
                label="Massage type"
                placeholder="Select massage type"
              />
            )}
          />
        </FormControl>
      </Grid>
      <Buttons step={step} handleBack={handleBack} data={formik.values} />
    </Grid>
  );
};

export default MassageSlide;
