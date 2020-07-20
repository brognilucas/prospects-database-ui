import React, { useEffect, useState } from "react";
import evaluationService from "../../services/evaluations";
import prospectService from "../../services/prospects";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EvaluationCard from "./EvaluationCard";
import { useParams } from "react-router-dom";

function Evaluations({ prospectCode }) {
  const [evaluations, setEvaluations] = useState([]);

  async function findAll() {
    console.log('prospectCode  ' , prospectCode)
    return evaluationService.find(prospectCode);
  }

  useEffect(() => {
    findAll().then(setEvaluations);
  }, [prospectCode]);

  return (
    <List>
      {evaluations.map((evaluation) => (
        <ListItem key={evaluation.code}>
          <EvaluationCard evaluation={evaluation} />
        </ListItem>
      ))}
    </List>
  );
}

export default Evaluations;
