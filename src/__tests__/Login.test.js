import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent, find } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Content from "../components/Content";

const history = createMemoryHistory();
history.push("/sign-in");
let container, asFragment , getByText;
beforeEach(() => {
  let res = render(
    <Router history={history}>
      <Content history={history}></Content>
    </Router>
  );

  container = res.container;
  getByText = res.getByText;
  asFragment = res.asFragment;
});

test("Should render the right value on input change", async () => {
  let emailValue = "email@email.com";
  const email = container.querySelector('[id="email"]');
  const password = container.querySelector('[id="password"]');

  fireEvent.change(email, { target: { value: emailValue } });
  fireEvent.change(password, { target: { value: '123'} })
  expect(email.value).toBe(emailValue);
  expect(password.value).toBe('123')
});

test("Should render a submit button ", async () => {
    const button = container.querySelector('[type="submit"]')
    expect(button).toBeDefined()
});


test("Should render a sign-up button ", async () => {
    const signUpBtn = getByText("Don't have an account? Sign Up", { exact: false })
    expect(signUpBtn).toBeDefined()

    fireEvent.click(signUpBtn)

    expect(history.location.pathname).toBe('/sign-up');
});
