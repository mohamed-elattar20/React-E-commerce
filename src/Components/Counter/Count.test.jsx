import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("test counter component", () => {
  render(<Counter />);
  const counterText = screen.getByText(/0/i);
  expect(counterText).toBeInTheDocument();

  const incrementBtn = screen.getByRole("button", { name: /Increment/i });
  expect(incrementBtn).toBeEnabled();
  const decrementBtn = screen.getByRole("button", { name: /Decrement/i });
  expect(decrementBtn).toBeEnabled();
});
//
test("test on Click counter component Increment", () => {
  render(<Counter />);
  const counterText = screen.getByText(/0/i);
  expect(counterText).toBeInTheDocument();

  const incrementBtn = screen.getByRole("button", { name: /Increment/i });
  fireEvent.click(incrementBtn);
  expect(counterText).toHaveTextContent("1");
});
test("test on Click counter component Decrement", () => {
  render(<Counter />);
  const counterText = screen.getByText(/0/i);
  expect(counterText).toBeInTheDocument();

  const decrementBtn = screen.getByRole("button", { name: /Decrement/i });
  fireEvent.click(decrementBtn);
  expect(counterText).toHaveTextContent("0");
});
