import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from "../Features/SignUp";

describe("SignUp", () => {
  test("renders all the sign-up form fields", () => {
    render(<SignUp />);

    expect(screen.getByLabelText("Username:")).toBeInTheDocument();

    expect(screen.getByLabelText("Email:")).toBeInTheDocument();

    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
  });

  test("all sign-up fields are required", () => {
    render(<SignUp />);

    expect(screen.getByLabelText("Username:")).toBeRequired();

    expect(screen.getByLabelText("Email:")).toBeRequired();

    expect(screen.getByLabelText("Password:")).toBeRequired();
  });

  test("renders the register button", () => {
    render(<SignUp />);

    expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
  });

  test("updates the username, email, and password when the user types", () => {
    render(<SignUp />);

    const usernameInput = screen.getByLabelText("Username:");
    const emailInput = screen.getByLabelText("Email:");
    const passwordInput = screen.getByLabelText("Password:");

    fireEvent.change(usernameInput, { target: { name: "username", value: "testuser" } });
    fireEvent.change(emailInput, { target: { name: "email", value: "testuser@example.com" } });
    fireEvent.change(passwordInput, { target: { name: "password", value: "TestPassword123" } });

    expect(usernameInput).toHaveValue("testuser");
    expect(emailInput).toHaveValue("testuser@example.com");
    expect(passwordInput).toHaveValue("TestPassword123");
  });

  test("renders the correct input types", () => {
    render(<SignUp />);

    expect(screen.getByLabelText("Username:")).toHaveAttribute("type", "text");

    expect(screen.getByLabelText("Email:")).toHaveAttribute("type", "email");

    expect(screen.getByLabelText("Password:")).toHaveAttribute("type", "password");
  });
});