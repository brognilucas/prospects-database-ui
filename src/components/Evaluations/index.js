import React, { useEffect, useState } from "react";
import evaluationService from "../../services/evaluations";
import prospectService  from '../../services/prospects';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import EvaluationCard from "./EvaluationCard";
import { useParams } from "react-router-dom";
import ProspectDetail from '../ProspectDetail/Detail';

function Evaluations(props) {
  const [evaluations, setEvaluations] = useState([]);
  const [prospect, setProspect] = useState({});
  const { code } = useParams();

  async function findAll() {
    return evaluationService.find(code);
  }

  useEffect(() => {
    findAll().then(setEvaluations);
  }, [prospect]);


  useEffect(() => {
    prospectService.findByCode(code).then((res) => setProspect(res));
  }, []);


  return (
    <>
      <ProspectDetail prospect={prospect} onlyBasic={true} />
      <List>
        {evaluations.map((evaluation) => (
          <ListItem key={evaluation.code}>
            <EvaluationCard evaluation={evaluation} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default Evaluations;
