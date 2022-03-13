import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { connect } from "react-redux";

import { useStyles } from "./styles";
import SectionsTitle from "../../../Layouts/SectionsTitle";
import { homePageBookData } from "../../../Services/Actions";

const MakeAppointmentSection = (props) => {
  const classes = useStyles();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      location: "",
      name: "",
      phonenumber: "",
      date: "",
      time: "",
      numberofperson: "",
    },
    onSubmit: (values) => {
      props.homePageBookData(values);
      navigate("/reservation");
    },
  });

  return (
    <Grid item container className={classes.container}>
      <Box className={classes.bg} />
      <SectionsTitle color="secondary" title="Make appointment" />
      <Grid
        item
        container
        component="form"
        variant="outlined"
        className={classes.form}
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
        <Grid item xs={12} className={classes.button}>
          <Button variant="contained" size="large" type="submit">
            Next
          </Button>
        </Grid>
      </Grid>
      <Grid item className={classes.frame} />
    </Grid>
  );
};

export default connect(null, {
  homePageBookData,
})(MakeAppointmentSection);
