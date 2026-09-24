import React from "react";
import { render, screen } from "@testing-library/react";
import SubNavBar from "../Components/SubNavbar";

describe("SubNavBar", () => {
  test("renders the farm information navigation", () => {
    render(<SubNavBar />);

    expect(screen.getByRole("navigation", { name: "Farm Information navigation" })).toBeInTheDocument();
  });

  test("renders all navigation links", () => {
    render(<SubNavBar />);

    expect(screen.getByRole("link", { name: "Farm Conditions" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "CropInfo" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Crop Calendar" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Soil Prep" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Crop Care" })).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Treatment Steps" })).toBeInTheDocument();
  });

    test("navigation links point to the correct sections", () => {
      render(<SubNavBar />);

      expect(screen.getByRole("link", { name: "Farm Conditions" })).toHaveAttribute("href", "#farm-condition");

      expect(screen.getByRole("link", { name: "CropInfo" })).toHaveAttribute("href", "#crop-info");

      expect(screen.getByRole("link", { name: "Crop Calendar" })).toHaveAttribute("href", "#crop-calendar");

      expect(screen.getByRole("link", { name: "Soil Prep" })).toHaveAttribute("href", "#soil-prep");

      expect(screen.getByRole("link", { name: "Crop Care" })).toHaveAttribute("href", "#crop-treatment-info");

      expect(screen.getByRole("link", { name: "Treatment Steps" })).toHaveAttribute("href", "#treatment-steps");
    });
  });