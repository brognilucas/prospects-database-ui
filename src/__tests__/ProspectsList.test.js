import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  act,
} from "@testing-library/react";
import List from "../components/ProspectsList/List";
import {Router} from 'react-router-dom';
import { createMemoryHistory } from "history";
const history = createMemoryHistory();
let mockValue = [
  {
    name: "Prospect 01",
    position: "qb",
    weight: 220,
    height: "6'3",
    college: "Wisconsin",
    birth: new Date(1996, 7, 7).toDateString(),
    class: 2021,
  },
];

jest.mock("../services/prospects", () => {
  return {
    find: jest.fn(() => Promise.resolve(mockValue)),
  };
});

test("Should have a list of prospects", async () => {
  const {container} = render(
    <Router history={history}>
      <List prospects={mockValue} history={history}/>
    </Router>
  );

  expect(
    await screen.findByText("Prospect 01", { exact: false })
  ).toBeInTheDocument();

  expect(
    container.querySelector(('[aria-label="prospect-list"]'))
  ).toBeInTheDocument()
});
