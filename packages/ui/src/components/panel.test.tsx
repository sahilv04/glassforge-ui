import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Panel } from "./panel";

describe("Panel", () => {
  it("renders title and description", () => {
    render(<Panel title="Hello" description="World">body</Panel>);
    expect(screen.getByText("Hello")).toBeTruthy();
    expect(screen.getByText("World")).toBeTruthy();
    expect(screen.getByText("body")).toBeTruthy();
  });

  it("renders custom header and footer slots", () => {
    render(
      <Panel header={<span>H</span>} footer={<span>F</span>}>
        body
      </Panel>,
    );
    expect(screen.getByText("H")).toBeTruthy();
    expect(screen.getByText("F")).toBeTruthy();
  });
});
