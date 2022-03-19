// PopupSubscription components contains:
//  1) popup subscribtion give client discount.
//
// In this component you found (react route dom , Formik, sessionStorage api)
//
//  uses ( <PopupSubscription/> )

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";

import { useStyles } from "./styles";

// TODO - Handle submition to user data to show to cashier when client arrive.
//      - Or send client email with discount code.
const PopupSubscription = () => {
  // control popup form to show only once for first one that client open site
  const [show, setShow] = useState(false);

  // PopupSubscription styles from './styles.js'.
  const classes = useStyles({ show });

  // formik hock
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
    // create new session on sessionStorage api to record client first open.
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
