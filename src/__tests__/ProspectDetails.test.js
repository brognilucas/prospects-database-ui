import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  act,
} from "@testing-library/react";
import user from "@testing-library/user-event";
import Detail from "../components/ProspectDetail/Detail";
import Container from "../components/ProspectDetail/index";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
const history = createMemoryHistory();
let mockValue = {
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


test("Should have the tabs 'Prospect Info' and Evaluations of prospects", async () => {
    render(
        <Router history={history}>
          <Container history={history} />
        </Router>
      );
  expect(
    await screen.findByText("Prospect Info", { exact: false })
  ).toBeInTheDocument();

  expect(
    await screen.findByText("Evaluations", { exact: false })
  ).toBeInTheDocument();
});


test("Should render prospect Info when clicking on Prospect Info", async () => {
    const { container } = render(
        <Router history={history}>
          <Container history={history} />
        </Router>
      );
      
    user.click(container.querySelector('[aria-label="phone"]'));

    expect(await screen.findByText("Prospect 01", { exact: false })).toBeInTheDocument();
});

test("Should not render info from the prospec prospect infos when click on Evaluations", async () => {
    const { container } = render(
        <Router history={history}>
          <Container history={history} />
        </Router>
      );
      
    user.click(container.querySelector('[aria-label="favorite"]'));

    waitForElementToBeRemoved(() => screen.findByText("Prospect 01", { exact: false }))
});
