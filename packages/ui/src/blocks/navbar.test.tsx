import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "./navbar";

describe("Navbar", () => {
  it("renders brand, links and cta slots", () => {
    render(
      <Navbar
        brand={<span>Brand</span>}
        links={<a href="#">Docs</a>}
        cta={<button>Sign in</button>}
      />,
    );
    expect(screen.getByText("Brand")).toBeTruthy();
    expect(screen.getByText("Docs")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeTruthy();
  });
});
