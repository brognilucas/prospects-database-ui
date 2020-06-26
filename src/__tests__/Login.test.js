import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  waitFor,
  act,
} from "@testing-library/react";

import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Content from "../components/Content";
import SignInForm from "../components/SignIn/SignInForm";

const history = createMemoryHistory();
let container, asFragment, getByText;
beforeEach(() => {
  history.push("/sign-in");

  let res = render(
    <Router history={history}>
      <Content history={history}></Content>
    </Router>
  );

  container = res.container;
  getByText = res.getByText;
  asFragment = res.asFragment;
});

jest.mock("../services/user", () => {
  return {
    login: jest.fn(() => Promise.resolve(false)),
  };
});

test("Should render the right value on input change", async () => {
  let emailValue = "email@email.com";
  const email = container.querySelector('[id="email"]');
  const password = container.querySelector('[id="password"]');

  act(() => {
    user.type(email, emailValue);
    user.type(password, "123");
  });
  expect(email.value).toBe(emailValue);
  expect(password.value).toBe("123");
});

test("Should render a submit button ", async () => {
  const button = container.querySelector('[type="submit"]');
  expect(button).toBeDefined();
});

test("Should redirect to sign-up route when click to create one ", async () => {
  const signUpBtn = getByText("Don't have an account? Sign Up", {
    exact: false,
  });
  expect(signUpBtn).toBeDefined();

  user.click(signUpBtn);

  expect(history.location.pathname).toBe("/sign-up");
});

test("Should go away from /sign-in when its a successful login ", async () => {
  let handleLogin = jest
    .fn(() => Promise.resolve(true))
    .mockName("handleLogin");

  const email = container.querySelector('[id="email"]');
  const password = container.querySelector('[id="password"]');
  user.type(email, "test@test.com");
  user.type(password, "123");

  const button = container.querySelector('[type="submit"]');
  act(() => {
    user.click(button);
  });
  await waitForElementToBeRemoved(() => screen.getAllByText(/Sign In/i));
});
