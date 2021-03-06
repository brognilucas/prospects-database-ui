import React, { useEffect, useState } from "react";
import service from "../../services/prospects";
import List from "./List";

const ProspectListContainer = () => {
  const [state, setState] = useState([]);

  async function findProspects() {
    let prospects = await service.find();
    setState(prospects);
  }

  useEffect(() => {
    findProspects();
  }, []);

  return <List prospects={state} />;
};

export default ProspectListContainer;
