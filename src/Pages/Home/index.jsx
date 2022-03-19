// Home page component contains:
//  1) Home page sections.
//
// In this component you found ( mui)
//
//  uses ( <Home/>)
//
//                                                       <Home/>
// <HeroSection /> | <AboutSection /> | <OffersSection /> | <ServicesReviewSection /> | <MakeAppointmentSection />
//  <WorkTime/>     <DepartmentsCard/>      <Slide/>

import Grid from "@mui/material/Grid";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OffersSection from "./OffersSection";
import ServicesReviewSection from "./ServicesReviewSection";
import MakeAppointmentSection from "./MakeAppointmentSection";

import { useStyles } from "./styles";

const Home = () => {
  // Home styles from './styles.js'.
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <ServicesReviewSection />
      <MakeAppointmentSection />
    </Grid>
  );
};

export default Home;
