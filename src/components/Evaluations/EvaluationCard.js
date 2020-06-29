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
    flexDirection: "row",
    justifyContent: "center",
  },
  analisys: {
    flexDirection: "column",
  },
  overall: {
    textAlign: "center",
  },
}));

function EvaluationCard({ evaluation }) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

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
          <Typography> {evaluation._user.name}</Typography>
        </Box>
        <Box className={classes.analisys}>
          <Typography variant="subtitle1" className={classes.summary}>
            {" "}
            {evaluation.summary}
          </Typography>
          <List>
            {evaluation.bestSkills.map((skill) => (
              <Typography>
                {" "}
                {skill}
                <StarRatings
                  rating={getRandomInt(4,6)}
                  starRatedColor="yellow"
                  numberOfStars={5}
                  starDimension={"20px"}
                  isSelectable={false}
                  name="rating"
                />
              </Typography>
            ))}
          </List>
          {evaluation.hasRedFlag && (
            <Typography> {evaluation.redFlag} </Typography>
          )}

          <Typography>
            <Typography className={classes.overall}>Overall</Typography>
            <Typography className={classes.overall}>
              <StarRatings
                rating={evaluation.overall}
                starRatedColor="yellow"
                numberOfStars={5}
                starDimension={"20px"}
                isSelectable={false}
                name="rating"
              />
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default EvaluationCard;
