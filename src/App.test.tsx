import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import config from "./config.module.scss";
global.app_config = { CSS_ID: config.CSS_ID };

test("Render Website Correctly", () => {
  render(<App />);

  const linkElement = screen.getAllByText(/Capsule/i);
  expect(linkElement.length).toBeGreaterThan(0);
});
