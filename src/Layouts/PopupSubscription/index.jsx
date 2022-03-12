import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";

import { useStyles } from "./styles";

const PopupSubscription = () => {
  const [show, setShow] = useState(false);
  const classes = useStyles({ show });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    switch (sessionStorage.getItem("new_client_off")) {
      case null:
        setShow(true);
        break;
      case false:
        setShow(false);
        break;

      default:
        setShow(false);
        break;
    }
  }, []);

  console.log(sessionStorage.getItem("new_client_off"));

  return (
    <Grid container className={classes.container} show={show.toString()}>
      <CloseIcon
        className={classes.closeIcon}
        onClick={() => {
          setShow(false);
          sessionStorage.setItem("new_client_off", false);
        }}
      />
      <Grid item className={classes.title}>
        New client offer $20 off*
      </Grid>
      <Grid
        item
        container
        component="form"
        variant="outlined"
        className={classes.form}
        onSubmit={formik.handleSubmit}
      >
        <Grid item xs={5} sm={3}>
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
        <Grid item xs={5} sm={3}>
          <FormControl variant="filled" fullWidth>
            <TextField
              label="Email"
              variant="filled"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </FormControl>
        </Grid>
        <Grid item className={classes.button}>
          <Button variant="contained" size="large" type="submit">
            Get $20 off
          </Button>
        </Grid>
      </Grid>
      <Grid item className={classes.worning}>
        *for treatments 60 mins and over. By entering your email address you are
        subscribing to our periodic emails.
      </Grid>
    </Grid>
  );
};

export default PopupSubscription;
