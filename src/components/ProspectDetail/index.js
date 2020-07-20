import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/prospects";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ThumbUp from "@material-ui/icons/ThumbUp";
import TabItem from "../TabItem";
import Detail from "./Detail";
import Evaluations from "../Evaluations";
import Evaluate from "../Evaluate/";
import { MenuContext } from "../../context/MenuContext";

const ProspectDetail = (props) => {
  const [prospect, setProspect] = useState({});
  const [tab, selectTab] = useState(0);
  const { code } = useParams();
  const [state, setState] = useContext(MenuContext);

  useEffect(() => {
    service.findByCode(code).then((res) => setProspect(res));
  }, []);

  return <Detail prospect={prospect} />;
};

export default ProspectDetail;
