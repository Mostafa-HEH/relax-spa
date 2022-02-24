import Grid from "@mui/material/Grid";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PhoneIcon from "@mui/icons-material/Phone";

import { useStyles } from "./styles";
import "./leaflet.css";
import SectionsTitleWithLink from "../../../Layouts/SectionsTitleWithLink";

const WhereFindUsSection = () => {
  const classes = useStyles();

  return (
    <Grid item container className={classes.container}>
      <SectionsTitleWithLink heading="Where you can find us" />
      <Grid item container>
        <Grid item container xs={12} sm={6} className={classes.adresses}>
          <Grid item container className={classes.adressContainer}>
            <Grid item className={classes.adress}>
              123ST, Mansoura, Egypt
            </Grid>
            <Grid item container className={classes.phoneContainer}>
              <Grid item component={PhoneIcon} />
              <Grid item>+20123456789</Grid>
            </Grid>
          </Grid>
          <Grid item container className={classes.adressContainer}>
            <Grid item className={classes.adress}>
              123ST, Alexandria, Egypt
            </Grid>
            <Grid item container className={classes.phoneContainer}>
              <Grid item component={PhoneIcon} />
              <Grid item>+20123456789</Grid>
            </Grid>
          </Grid>
          <Grid item container className={classes.adressContainer}>
            <Grid item className={classes.adress}>
              123ST, Cairo, Egypt
            </Grid>
            <Grid item container className={classes.phoneContainer}>
              <Grid item component={PhoneIcon} />
              <Grid item>+20123456789</Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className={classes.map}>
          <MapContainer center={[31.037933, 31.381523]} zoom={6}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[31.037933, 31.381523]}>
              <Popup>
                123ST, Mansoura, Egypt. <br /> +20123456789
              </Popup>
            </Marker>
            <Marker position={[30.033333, 31.233334]}>
              <Popup>
                123ST, Cairo, Egypt. <br /> +20123456789
              </Popup>
            </Marker>
            <Marker position={[31.205753, 29.924526]}>
              <Popup>
                123ST, Alexandria, Egypt. <br /> +20123456789
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WhereFindUsSection;
