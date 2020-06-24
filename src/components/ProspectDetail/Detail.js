import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  info: {
    display: "flex",
    position: "relative",
  },
}));

function Detail({ prospect }) {
  const classes = useStyles();
  return (
    <Container>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Avatar className={classes.large} src={prospect.photo} />
      </Box>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Typography color="textSecondary" variant="h4">
          {prospect.name}
        </Typography>
      </Box>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Typography color="textSecondary" variant="h6">
          {prospect?.position?.toUpperCase()},
        </Typography>
        <Typography color="textSecondary" variant="h6">
          {prospect.college}
        </Typography>
      </Box>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Typography color="textSecondary" variant="body1">
          Height: {prospect.height}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          Weight: {prospect.weight}
        </Typography>
      </Box>
      <Box className={classes.root} display="flex" justifyContent="center">
        <Typography color="textSecondary" variant="body1">
          Birth: {new Date(prospect.dateOfBirth).toLocaleDateString()}
        </Typography>
        <Typography color="textSecondary" variant="body1">
          Draft Year: {prospect.year}
        </Typography>
      </Box>
    </Container>
  );
}

export default Detail;
