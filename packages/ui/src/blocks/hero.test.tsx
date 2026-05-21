import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "./hero";

describe("Hero", () => {
  it("renders title and description", () => {
    render(<Hero title="GlassForge" description="UI blocks." />);
    expect(screen.getByRole("heading", { name: "GlassForge" })).toBeTruthy();
    expect(screen.getByText("UI blocks.")).toBeTruthy();
  });
});
