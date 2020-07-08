import React, { useState, useEffect } from "react";
import { Typography, Avatar, Container, Box, List } from "@material-ui/core";
import StarRatings from "react-star-ratings";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  skillRating: {
    fontSize: 14,
    fontWeight: "bold !important",
    [theme.breakpoints.down("xs")]: {
    },
  },
}));

const Skills = ({ position,  updateRate , skillsEvaluation,  skills, ...props }) => {
  const classes = useStyles();

  return skills.map((skill) => (
    <Box key={skill}>
      <Typography className={classes.skillRating}>{skill}</Typography>
      <Box className={classes.skillRating}>
        <StarRatings
          starRatedColor="yellow"
          rating={skillsEvaluation.find((item) => item.label === skill)?.rate || 0}
          numberOfStars={5}
          starDimension={"20px"}
          isSelectable={true}
          changeRating={(rating) => updateRate(skill, rating)}
          name="rating"
          className={classes.skillRating}
        />
      </Box>
    </Box>
  ));
};

export default Skills;
