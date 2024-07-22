import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LoginForm } from "./LoginForm";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(),
    ok: true,
    status: 200,
    headers: [],
  } as unknown as Response);
});

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe("Login Form", () => {
  it("should render email input field", () => {
    render(<LoginForm />);

    const email = screen.getAllByPlaceholderText("Enter email")[0];
    expect(email).toBeInTheDocument();
  });
  it("should render password input field", () => {
    render(<LoginForm />);

    const pass = screen.getByTestId("password");
    expect(pass).toBeInTheDocument();
  });
  it("should render button and submit on clicking", async () => {
    render(<LoginForm />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    const email = screen.getAllByPlaceholderText("Enter email")[0];
    fireEvent.change(email, { target: { value: "email@email.com" } });

    const pass = screen.getByTestId("password");
    fireEvent.change(pass, { target: { value: "test" } });

    button.click();
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
  });
});
