import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Surface } from "./surface";

describe("Surface", () => {
  it("renders children", () => {
    const { getByText } = render(<Surface>Hello</Surface>);
    expect(getByText("Hello")).toBeTruthy();
  });

  it("applies variant classes", () => {
    const { container } = render(<Surface variant="solid">x</Surface>);
    expect(container.firstChild).toHaveProperty("className");
  });
});
