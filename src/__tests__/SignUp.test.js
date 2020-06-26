import React from "react";
import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import SignUpForm from "../components/SignUp/SignUpForm";

jest.mock("../services/user", () => {
  return {
    createAccount: jest.fn(() => Promise.resolve(true)),
  };
});

test("Should render the right value on input change", async () => {
  const promise = Promise.resolve();
  let handleSignup = jest.fn(() => Promise.resolve(true));

  const { container } = render(<SignUpForm handleSignup={handleSignup} />);
  let emailValue = "email@email.com";
  const name = container.querySelector('[id="name"]');
  const email = container.querySelector('[id="email"]');
  const password = container.querySelector('[id="password"]');
  await Promise.all([
    user.type(name, "test"),
    user.type(email, emailValue),
    user.type(password, "123"),
  ]);
  expect(name.value).toBe("test");
  expect(email.value).toBe(emailValue);
  expect(password.value).toBe("123");

  await act(() => promise);
});

test("Should find error message Missing required fields when one or more fields wasnt typed", async () => {
  const promise = Promise.resolve();
  let handleSignup = jest.fn(() => Promise.resolve(true));

  const { container } = render(<SignUpForm handleSignup={handleSignup} />);
  const name = container.querySelector('[id="name"]');
  const password = container.querySelector('[id="password"]');
  const confirmPassword = container.querySelector('[id="confirmPassword"]');
  await Promise.all([
    user.type(name, "test"),
    user.type(password, "123"),
    user.type(confirmPassword, "232"),
  ]);

  user.click(container.querySelector('[type="submit"]'));

  const message = await screen.findByText("Missing required fields", {
    exact: false,
  });

  expect(message).toBeDefined();

  await act(() => promise);
});

test("Should find error messsage Passwords don't match ", async () => {
  const promise = Promise.resolve();
  let handleSignup = jest.fn(() => Promise.resolve(true));

  const { container } = render(<SignUpForm handleSignup={handleSignup} />);
  let emailValue = "email@email.com";
  const name = container.querySelector('[id="name"]');
  const email = container.querySelector('[id="email"]');
  const password = container.querySelector('[id="password"]');
  const confirmPassword = container.querySelector('[id="confirmPassword"]');
  await Promise.all([
    user.type(name, "test"),
    user.type(email, emailValue),
    user.type(password, "123"),
    user.type(confirmPassword, "232"),
  ]);

  user.click(container.querySelector('[type="submit"]'));

  const message = await screen.findByText("Passwords don't match", {
    exact: false,
  });

  expect(message).toBeDefined();

  await act(() => promise);
});
