// LoginForm.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

describe("LoginForm component", () => {
  it("submits form with correct email and password", async () => {
    const mockLogin = jest.fn();
    const { getByLabelText, getByText } = render(
      <LoginForm login={mockLogin} />
    );

    const emailInput = getByLabelText(/Email address/i);
    const passwordInput = getByLabelText(/Password/i);
    const loginButton = getByText(/Log in/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith(
      { email: "test@example.com", password: "password123" },
      expect.any(Object)
    );

    // Ensure form fields are cleared after submission
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  it("does not submit form with empty email or password", async () => {
    const mockLogin = jest.fn();
    const { getByText } = render(<LoginForm login={mockLogin} />);

    const loginButton = getByText(/Log in/i);

    fireEvent.click(loginButton);

    expect(mockLogin).not.toHaveBeenCalled();
  });
});
