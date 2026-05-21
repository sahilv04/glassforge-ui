import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LoginPanel } from "./login-panel";

describe("LoginPanel", () => {
  it("renders default title and description", () => {
    render(<LoginPanel>form</LoginPanel>);
    expect(screen.getByText("Welcome back")).toBeTruthy();
    expect(screen.getByText("form")).toBeTruthy();
  });
});
