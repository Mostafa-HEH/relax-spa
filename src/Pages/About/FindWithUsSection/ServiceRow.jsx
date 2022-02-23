import Grid from "@mui/material/Grid";
import { useStyles } from "./serviceRow.styles";
import PageNavegate from "../../../Layouts/PageNavegate";

const ServiceRow = ({ image, title, describtion, link, direction }) => {
  const classes = useStyles({ direction });

  return (
    <Grid item container className={classes.container}>
      <Grid item component="img" src={image} alt={title} md={4} />
      <Grid item container className={classes.textContainer} md={7}>
        <Grid item component="h2">
          {title}
        </Grid>
        <Grid item component="p">
          {describtion}
        </Grid>
        {link ? (
          <Grid item>
            <PageNavegate name={link.name} link={link.url} />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ServiceRow;
