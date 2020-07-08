import React, { useState, useEffect } from "react";
import { TextField, Box } from "@material-ui/core";
import Skills from "./Skills";
import { useFormik } from "formik";

const allClassesSkills = ["Athlecism", "Football IQ"];
const OL = ["Gap Blocking", "Zone Blocking", "Pass Pro", "Anchor", "Hands"];
const DL = ["Explosion", "Bend", "Run Game", "Pass Rush Moves", "Hands"];
const DB = ["Ball Skills", "Man Coverage", "Zone Coverage", "Run Game Support"];
const skillsPerPosition = {
  QB: ["Pockett Awareness", "Mechanics", "Arm Talent", "Ball Placement"],
  WR: ["Route Running", "Top Speed", "Ball Skills", "Body Control", "YAC"],
  RB: ["Open Field", "Top Speed", "Short yardage", "Receiving", "Pass Pro"],
  TE: ["Blocking", "Ball Skills", "YAC", "Body Control", "Route Running"],
  IOL: OL,
  OT: OL,
  EDGE: DL,
  DT: DL,
  CB: DB,
  S: DB,
  LB: ["Run Game", "Pass Game", "Ball Skills", "Play Recognition"],
};

const Evaluate = ({ prospect }) => {
  const [skills, setSkills] = useState([]);
  const formik = useFormik({
    initialValues: {
      id: null,
      summary: "",
      skills: [],
      overal: 0,
      hasRedFlag: false,
      redFlag: "",
    },
    onSubmit: async (values) => {},
  });

  useEffect(() => {
    let startSkills = [
      ...allClassesSkills,
      ...skillsPerPosition[prospect?.position.toUpperCase()],
    ].map((item) => ({ rate: 0, label: item }));

    setSkills(startSkills);
  }, []);

  useEffect(() => {
    updateSkills(skills);
  }, [skills]);

  function updateRate(skill, rate) {
    setSkills([
      ...skills.filter((item) => item.label !== skill),
      { label: skill, rate },
    ]);
  }

  function updateSkills(skills) {
    formik.setValues({ ...formik.values, skills });
  }

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <TextField
        label="Summary"
        multiline
        rows={4}
        name="summary"
        id="summary"
        onChange={formik.handleChange}
        value={formik.values.summary}
        placeholder="Summary"
        variant="outlined"
        fullWidth
      />
      <Box style={{marginTop: 10}}>
        <Skills
          skills={[...allClassesSkills, ...skillsPerPosition[prospect.position]]}
          updateRate={updateRate}
          skillsEvaluation={formik.values.skills}
        />
      </Box>
    </form>
  );
};

export default Evaluate;
