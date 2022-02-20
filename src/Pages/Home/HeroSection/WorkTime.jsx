import Box from "@mui/material/Box";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

import { useStyles } from "./WorkTime.styles";

const WorkTime = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <AccessAlarmIcon className={classes.icon} />
      we are open everyday 8:00am - 8:00pm
    </Box>
  );
};

export default WorkTime;
