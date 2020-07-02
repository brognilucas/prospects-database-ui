import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Container, Box, List } from "@material-ui/core";
import StarRatings from "react-star-ratings";
import CircularProgress from "@material-ui/core/CircularProgress";
import OverallGrade from '../OverallGrade'
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
    alignSelf: "center",
  },
  skillRating: {
    fontSize: 14,
    fontWeight: "bold !important",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  summary: {
    textAlign: "justify",
    fontSize: 14,
  },
  overallBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  overallRound: {
    color: "#F2F230",
  },
  overallText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
}));

function EvaluationCard({ evaluation }) {
  const classes = useStyles();
  const [color, setColor] = useState("");

  function findOverallColor() {
    if (evaluation.overall > 9) {
      return "#1098F7";
    } else if (evaluation.overall > 8) {
      return "#57A773";
    } else if (evaluation.overall > 7) {
      return "#F2F230";
    } else if (evaluation.overall > 6) {
      return "#E4572E";
    } else {
      return "#FF3C38";
    }
  }

  useEffect(() => {
    setColor(findOverallColor());
  }, []);

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
          <Box className={classes.overallBox}>
            <Box>
              <List>
                {evaluation.skills.map((skill) => (
                  <Box key={skill.label}>
                    <Typography className={classes.skillRating}>
                      {skill.label}
                    </Typography>
                    <Box className={classes.skillRating}>
                      <StarRatings
                        rating={skill.rate}
                        starRatedColor="yellow"
                        numberOfStars={5}
                        starDimension={"20px"}
                        isSelectable={false}
                        name="rating"
                        className={classes.skillRating}
                      />
                    </Box>
                  </Box>
                ))}
              </List>
            </Box>
            <Box className={classes.overall}>
              <OverallGrade overall={evaluation.overall} color={color} />
              {/* <CircularProgress
                variant="static"
                size={150}
                value={evaluation.overall * 10}
              >
                <Typography className={classes.overallText}>
                  {evaluation.overall}
                </Typography>
              </CircularProgress> */}
              {/* <Avatar
                style={{ backgroundColor: color }}
                className={classes.overallRound}
              >
                <Typography className={classes.overallText}>
                  {evaluation.overall}
                </Typography>
              </Avatar> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default EvaluationCard;
