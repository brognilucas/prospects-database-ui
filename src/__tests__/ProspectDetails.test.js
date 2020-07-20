import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Detail from "../components/ProspectDetail/Detail";
import Container from "../components/ProspectDetail/index";
import { createMemoryHistory } from "history";
import { Router } from 'react-router-dom'
let mockValue = {
  code: '01-02-03',
  name: "Prospect 01",
  position: "qb",
  weight: 220,
  height: "6'3",
  college: "Wisconsin",
  birth: new Date(1996, 7, 7).toDateString(),
  class: 2021,
};

jest.mock("../services/prospects", () => {
  return {
    findByCode: jest.fn((code) => Promise.resolve(mockValue)),
  };
});

jest.mock("../services/evaluations", () => {
  return {
    find: jest.fn(() => Promise.resolve([])),
  };
});


let history; 
beforeAll(() => { 
  history = createMemoryHistory();
  history.push(`/prospect/${mockValue.code}`)
})

test("Should show the prospect name", async () => {
  
    render(
        <Router history={history}>
          <Container history={history} />
        </Router>
      );
  
      expect(
    await screen.findByText(mockValue.name, { exact: false })
  ).toBeInTheDocument();

});


