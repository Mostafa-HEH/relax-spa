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
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

import Buttons from "./Buttons";

import { useStyles } from "./massageSlide.styles";

import { servicesProducts } from "../../Services/Utils/fakeData";

const MassageSlide = ({ step, handleNext, handleBack, initialData }) => {
  // MassageSlide styles from './styles.js'.
  const classes = useStyles();

  // Formik hock from frormik
  const formik = useFormik({
    initialValues: initialData,
    onSubmit: (values) => {
      handleNext(values, true);
    },
  });

  // generate form for each person pased on person numbers from personal slide
  const personRenderHelper = (personsNumber) => {
    const personsForms = [];

    for (let i = 1; i <= personsNumber; i++) {
      personsForms.push(
        <Grid item container className={classes.personContainer}>
          <Grid item xs={12} className={classes.title}>
            Person {i} info
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
              <TextField
                label="Age"
                variant="filled"
                type="text"
                name={`age${i}`}
                value={formik.values[`age${i}`] ? formik.values[`age${i}`] : ""}
                onChange={formik.handleChange}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="geneder">Geneder</InputLabel>
              <Select
                labelId="geneder"
                name={`geneder${i}`}
                variant="filled"
                label="Gender"
                value={
                  formik.values[`geneder${i}`]
                    ? formik.values[`geneder${i}`]
                    : ""
                }
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
                name={`massiergender${i}`}
                variant="filled"
                label="Massier Gender"
                value={
                  formik.values[`massiergender${i}`]
                    ? formik.values[`massiergender${i}`]
                    : ""
                }
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
                name={`massageType${i}`}
                defaultValue={
                  formik.values[`massageType${i}`]
                    ? formik.values[`massageType${i}`]
                    : []
                }
                value={
                  formik.values[`massageType${i}`]
                    ? formik.values[`massageType${i}`]
                    : []
                }
                onChange={(event, value) => {
                  formik.setFieldValue(`massageType${i}`, value);
                }}
                multiple
                options={servicesProducts.map((option) => option.title)}
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
        </Grid>
      );
    }

    return personsForms.map((person, id) => (
      <React.Fragment key={id}>{person}</React.Fragment>
    ));
  };

  return (
    <Grid
      item
      container
      component="form"
      variant="outlined"
      className={classes.container}
      onSubmit={formik.handleSubmit}
    >
      {personRenderHelper(initialData.numberofperson)}
      <Buttons step={step} handleBack={handleBack} data={formik.values} />
    </Grid>
  );
};

export default MassageSlide;
