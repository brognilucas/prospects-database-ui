import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  act,
} from "@testing-library/react";

import EvaluationCard from "../components/Evaluations/EvaluationCard";
const mockValue = {
  summary:
    "Has the perfect physic to play as quarterback in the NFL. Has an incredible arm talent, and good atleticism as well. Has a good ball placement in all levels of the field and keep his eyes always looking down the field. Sometimes hold a long time to move from his first read.",
  skills: [
    { label: "Ball Placement", rate: 4 },
    { label: "Arm Talent", rate: 5 },
    { label: "Football IQ", rate: 4 },
    { label: "Mechanics", rate: 5 },
    { label: "Athlecism", rate: 4 },
    { label: "Pocket Awareness", rate: 5 },
  ],
  overall: 9.25,
  hasRedFlag: false,
  prospectCode: "25428cd1-b923-46f2-9e77-a21a885b5f69",
  _user: { 
    name: 'José',
    photo: ''
  },

};

test('Should render correctly' , async () => { 
    render(
        <EvaluationCard evaluation={mockValue} />
    )

    expect(
        await screen.findByText(mockValue.summary, { exact: false})
    ).toBeInTheDocument()

    expect(
        await screen.findByText(mockValue._user.name, { exact: false})
    ).toBeInTheDocument()
})
