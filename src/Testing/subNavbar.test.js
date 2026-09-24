import React from "react";
import { render, screen } from "@testing-library/react";
import SubNavbar from "../Subcomponents/SubNavbar";

describe("SubNavbar", () => {
  test("renders the farm information navigation", () => {
    render(<SubNavbar />);

    expect(screen.getByRole("navigation", { name: "Farm information navigation" })).toBeInTheDocument();
  });

  test("renders all navigation links", () => {
    render(<SubNavbar />);

    expect(screen.getByRole("link", { name: "Farm Conditions" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Crop Info" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Crop Calendar" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Soil Prep" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Crop Care" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Treatment Steps" })).toBeInTheDocument();
  });

    test("navigation links point to the correct sections", () => {
      render(<SubNavbar />);

      expect(screen.getByRole("link", { name: "Farm Conditions" })).toHaveAttribute("href", "#farm-condition");

      expect(screen.getByRole("link", { name: "Crop Info" })).toHaveAttribute("href", "#crop-info");

      expect(screen.getByRole("link", { name: "Crop Calendar" })).toHaveAttribute("href", "#crop-calender");

      expect(screen.getByRole("link", { name: "Soil Prep" })).toHaveAttribute("href", "#soil-prep");

      expect(screen.getByRole("link", { name: "Crop Care" })).toHaveAttribute("href", "#crop-treatment-info");

      expect(screen.getByRole("link", { name: "Treatment Steps" })).toHaveAttribute("href", "#crop-treatment-steps");
    });
  });