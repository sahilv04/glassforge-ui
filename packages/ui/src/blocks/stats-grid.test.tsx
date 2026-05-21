import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatsGrid } from "./stats-grid";

describe("StatsGrid", () => {
  it("renders items via array API", () => {
    render(
      <StatsGrid
        items={[
          { label: "A", value: "1" },
          { label: "B", value: "2" },
        ]}
      />,
    );
    expect(screen.getByText("A")).toBeTruthy();
    expect(screen.getByText("B")).toBeTruthy();
  });
});
