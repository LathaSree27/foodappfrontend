import { render } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";

jest.mock("../header/Header", () => () => {
  return <div data-testid="header"></div>;
});

test("should render header and container", () => {
  const childElement = <div data-testid="child"></div>;
  const { getByTestId } = render(<Layout>{childElement}</Layout>);

  const headerComponent = getByTestId("header");
  const childComponent = getByTestId("child");

  expect(headerComponent).toBeInTheDocument();
  expect(childComponent).toBeInTheDocument();
});
