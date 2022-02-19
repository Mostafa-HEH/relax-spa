import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";

const Logo = ({ type, color }) => {
  const classes = useStyles({ color });

  if (type === "link")
    return (
      <Typography
        variant="h1"
        component="h1"
        className={classes.logo}
        color={color}
      >
        <Link to="/">
          <Box className={classes.logoColor} component="span">
            Relax
          </Box>{" "}
          spa
        </Link>
      </Typography>
    );
  return (
    <Typography variant="h1" component="h1" className={classes.logo}>
      <Box className={classes.logoColor} component="span">
        Relax
      </Box>{" "}
      spa
    </Typography>
  );
};

export default Logo;
