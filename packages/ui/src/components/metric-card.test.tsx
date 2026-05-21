import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MetricCard } from "./metric-card";

describe("MetricCard", () => {
  it("renders label, value, and trend", () => {
    render(
      <MetricCard
        label="Revenue"
        value="$12,430"
        trend={{ direction: "up", label: "+12%" }}
      />,
    );
    expect(screen.getByText("Revenue")).toBeTruthy();
    expect(screen.getByText("$12,430")).toBeTruthy();
    expect(screen.getByText("+12%")).toBeTruthy();
  });
});
