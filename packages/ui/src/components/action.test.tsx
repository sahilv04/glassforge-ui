import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Action } from "./action";

describe("Action", () => {
  it("renders as a button by default", () => {
    render(<Action>Click</Action>);
    expect(screen.getByRole("button", { name: "Click" })).toBeTruthy();
  });

  it("respects disabled state", () => {
    render(<Action disabled>Disabled</Action>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("renders icons", () => {
    render(
      <Action leftIcon={<span data-testid="left" />} rightIcon={<span data-testid="right" />}>
        Save
      </Action>,
    );
    expect(screen.getByTestId("left")).toBeTruthy();
    expect(screen.getByTestId("right")).toBeTruthy();
  });

  it("supports asChild", () => {
    render(
      <Action asChild>
        <a href="/x">link</a>
      </Action>,
    );
    expect(screen.getByRole("link", { name: "link" })).toBeTruthy();
  });

  it("merges custom className", () => {
    const { container } = render(<Action className="custom-x">x</Action>);
    expect(container.querySelector(".custom-x")).toBeTruthy();
  });
});
