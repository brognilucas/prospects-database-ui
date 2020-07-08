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
import Evaluate from '../Evaluate';
import { MenuContext } from "../../context/MenuContext";
const ProspectDetail = (props) => {
  const [prospect, setProspect] = useState({});
  const [tab, selectTab] = useState(0);
  const { code } = useParams();
  const [state, setState] = useContext(MenuContext);
  useEffect(() => {
    service.findByCode(code).then((res) => setProspect(res));
  }, []);

  return (
    <React.Fragment>
      <Tabs
        value={tab}
        onChange={(e, index) => selectTab(index)}
        variant="scrollable"
        scrollButtons="off"
        aria-label="scrollable prevent tabs"
      >
        <Tab icon={<PersonIcon />} label="Prospect Info" aria-label="phone" />
        <Tab
          icon={<FavoriteIcon />}
          label={`Evaluations`}
          aria-label="favorite"
        />
       { state?.user?.code && ( <Tab icon={<ThumbUp />} label="Evaluate" aria-label="" /> )}
      </Tabs>

      <TabItem index={0} tab={tab}>
        <Detail prospect={prospect} />
      </TabItem>
      <TabItem index={1} tab={tab}>
        <Evaluations prospect={prospect} />
      </TabItem>
      <TabItem index={2} tab={tab}>
        <Evaluate prospect={prospect} />
      </TabItem>
    </React.Fragment>
  );
};

export default ProspectDetail;
