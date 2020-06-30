import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Container, Box, List } from "@material-ui/core";
import StarRatings from "react-star-ratings";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(3),
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  info: {
    display: "flex",
    position: "relative",
  },
  background: {
    backgroundColor: "#FFF",
    borderWidth: "1 em",
    marginVertical: "5 em",
  },
  scouter: {
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  scouterName: {
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  analisys: {
    display: "flex",
    flexDirection: "column",
  },
  overall: {
    textAlign: "center",
  },
  skillRating: {},
  summary: {
    textAlign: "justify",
    fontSize: 14,
  },
  skillLabel: {
    fontSize: 14,
    fontWeight: "1000",
  },
}));

function EvaluationCard({ evaluation }) {
  const classes = useStyles();
  return (
    <Container className={classes.background}>
      <Box className={classes.root}>
        <Box className={classes.scouter}>
          <Avatar
            className={classes.large}
            alt={evaluation._user.name}
            src={evaluation._user.photo}
          />
          <Typography className={classes.scouterName}>
            {evaluation._user.name}
          </Typography>
        </Box>
        <Box className={classes.analisys}>
          <Typography variant="subtitle1" className={classes.summary}>
            {" "}
            {evaluation.summary}
          </Typography>
          <List>
            {evaluation.skills.map((skill) => (
              <Box key={skill.label} styles={classes.skillRating}>
                <Typography className={classes.skillLabel}>
                  {skill.label}
                </Typography>
                <StarRatings
                  rating={skill.rate}
                  starRatedColor="yellow"
                  numberOfStars={5}
                  starDimension={"20px"}
                  isSelectable={false}
                  name="rating"
                />
              </Box>
            ))}
          </List>
          {evaluation.hasRedFlag && (
            <Typography> {evaluation.redFlag} </Typography>
          )}

          <Typography className={classes.overall}>
            Overall: {evaluation.overall}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default EvaluationCard;
