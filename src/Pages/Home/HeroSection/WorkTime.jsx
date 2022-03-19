// WorkTime section component contains:
//  1) WorkTime section.
//
// In this component you found ( mui)
//
//  uses ( <WorkTime/>)

import Box from "@mui/material/Box";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import { useStyles } from "./WorkTime.styles";

const WorkTime = () => {
  // WorkTime styles from './styles.js'.
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <AccessAlarmIcon className={classes.icon} />
      <Box component="span" className={classes.textTime}>
        we are open everyday 8:00am - 8:00pm
      </Box>
    </Box>
  );
};

export default WorkTime;
