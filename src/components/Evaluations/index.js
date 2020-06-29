import React, { useEffect, useState } from "react";
import service from "../../services/evaluations";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import EvaluationCard from './EvaluationCard';
function Evaluations({ prospect, ...props }) {
  const [evaluations, setEvaluations] = useState([]);

  async function findAll() {
    return service.find(prospect.code);
  }

  useEffect(() => {
    findAll().then(setEvaluations);
  }, [prospect]);

  console.log("evaluations ", evaluations);

  return (
    <List>
       {evaluations.map((evaluation) => (
         <ListItem key={evaluation.code}>
            <EvaluationCard evaluation={evaluation} />
         </ListItem>
      ))}
    </List>
  )
}

export default Evaluations;
