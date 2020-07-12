import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  FormControlLabel,
  Checkbox,
  Container,
  Button
} from "@material-ui/core";
import Skills from "./Skills";
import { useFormik } from "formik";
import ProspectDetail from '../ProspectDetail/Detail';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

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

const EvaluateForm = ({ prospect , sendEvaluation }) => {
  const [skills, setSkills] = useState([]);
  const [errors, setErrors] = useState("");
  
  const formik = useFormik({
    initialValues: {
      id: null,
      summary: "",
      skills: [],
      overall: 0,
      hasRedFlag: false,
      redFlag: "",
    },
    onSubmit: async (values) => {

      if(!values.overall || !values.summary) { 
        return setErrors('You must fill in at least the summary and an Overall Grade')
      } 

      sendEvaluation(values); 
    },
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
    <Container component="main" maxWidth="xs">
      <ProspectDetail onlyBasic={true}  prospect={prospect} />
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
        <Box style={{ marginTop: 10 }}>
          <Skills
            skills={[
              ...allClassesSkills,
              ...skillsPerPosition[prospect?.position.toUpperCase()],
            ]}
            updateRate={updateRate}
            skillsEvaluation={formik.values.skills}
          />
        </Box>
        <TextField
          style={{ marginTop: 10 }}
          label="Overall Rating"
          name="overall"
          id="overall"
          type="number"
          onChange={formik.handleChange}
          placeholder="Overall Rating"
          variant="outlined"
          fullWidth
        />

        <FormControlLabel
          control={
            <Checkbox
              onChange={formik.handleChange}
              name="hasRedFlag"
              id="hasRedFlag"
              color="primary"
            />
          }
          label="Has Red Flag?"
        />

        {formik.values.hasRedFlag && (
          <TextField
            style={{ marginTop: 10 }}
            label="Red Flag"
            name="redFlag"
            id="redFlag"
            onChange={formik.handleChange}
            placeholder="Red Flag"
            variant="outlined"
            fullWidth
          />
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Save Evaluation
        </Button>
      </form>


      <Snackbar open={errors.length} autoHideDuration={6000} onClose={() => setErrors("")}>
        <Alert severity="error" onClose={() => setErrors("")}>
          { errors }
        </Alert>
      </Snackbar>

    </Container>
  );
};

export default EvaluateForm;
