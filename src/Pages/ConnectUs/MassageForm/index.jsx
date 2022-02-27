import React from "react";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useStyles } from "./styles";

const SendMassage = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      massage: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Grid item container className={classes.container}>
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
              label="Email"
              variant="filled"
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="filled" fullWidth>
            <TextField
              label="Massage"
              variant="filled"
              type="text"
              name="massage"
              value={formik.values.massage}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} className={classes.button}>
          <Button variant="contained" size="large" type="submit">
            Send
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SendMassage;
