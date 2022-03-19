// Personal Slide component contains:
//  1) Personal Slide .
//
// In this component you found ( mui, formik)
//
//  uses ( <PersonalSlide step={current step} handleNext={handle next function } initialData={initialData for slide}/>)

import React from "react";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import Buttons from "./Buttons";

import { useStyles } from "./personalSlide.styles";

const PersonalSlide = ({ step, handleNext, initialData }) => {
  // PersonalSlide styles from './styles.js'.
  const classes = useStyles();

  // Formik hock from frormik
  const formik = useFormik({
    initialValues: initialData,
    onSubmit: (values) => {
      handleNext(values, false);
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
          <InputLabel id="location">Location</InputLabel>
          <Select
            labelId="location"
            name="location"
            variant="filled"
            label="Location"
            value={formik.values.location}
            onChange={formik.handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="mansoura">Mansoura</MenuItem>
            <MenuItem value="cairo">Cairo</MenuItem>
            <MenuItem value="alexandria">Alexandria</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <TextField
            label="Name"
            variant="filled"
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <TextField
            label="Phone number"
            variant="filled"
            type="text"
            name="phonenumber"
            value={formik.values.phonenumber}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <TextField
            label="Date"
            variant="filled"
            type="date"
            name="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <TextField
            label="Time"
            variant="filled"
            type="time"
            name="time"
            value={formik.values.time}
            onChange={formik.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl variant="filled" fullWidth>
          <TextField
            label="Number of persons"
            variant="filled"
            type="number"
            name="numberofperson"
            value={formik.values.numberofperson}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Grid>
      <Buttons step={step} />
    </Grid>
  );
};

export default PersonalSlide;
