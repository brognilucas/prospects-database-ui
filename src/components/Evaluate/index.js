import React, { useEffect, useState } from "react";
import EvaluateForm from "./EvaluateForm";
import prospectService from "../../services/prospects";
import { useParams, useHistory } from "react-router-dom";
import evaluationService from "../../services/evaluations";

const Evaluate = (props) => {
  const [prospect, setProspect] = useState(null);
  const { code } = useParams();
  const history = useHistory();

  useEffect(() => {
    prospectService.findByCode(code).then((res) => setProspect(res));
  }, []);

  function sendEvaluation(evaluation) {


    evaluationService.create({ 
      ...evaluation, 
      prospectCode: code
    }).then((res) => {
      history.push(`/prospects/${code}/`);
    })
    .catch(error => console.log('error ', error))
  }

  if (!prospect) {
    return null;
  }

  return <EvaluateForm prospect={prospect} sendEvaluation={sendEvaluation} />;
};

export default Evaluate;
