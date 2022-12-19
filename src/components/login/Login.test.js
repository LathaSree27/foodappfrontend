import { render } from "@testing-library/react";
import Login from "./Login";

test("should render login form", () => {
  const { getByRole, getAllByRole } = render(<Login />);
  const inputElement = getAllByRole("textbox");
  const buttonElement = getByRole("button");

  expect(inputElement).toHaveLength(2);
  expect(buttonElement).toBeInTheDocument();
});
