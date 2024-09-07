import React from "react";
import { describe, beforeEach, expect, it, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

import Expanded from "./Expanded";

const ChildComp = () => <p>Test node</p>;

describe("Test func of Expanded Component", () => {
  beforeEach(() => {
    render(
      <Expanded>
        <ChildComp />
      </Expanded>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should show the show more btn when rendered", () => {
    const showPara = screen.getByText(/Show more/i);

    expect(showPara).toBeVisible();
  });

  it("should hide show more text when its clicked", () => {
    const showPara = screen.getByText(/Show more/i);

    fireEvent.click(showPara);

    expect(showPara).not.toBeVisible();
  });

  it("should show the child comp when show more is clicked", () => {
    const showPara = screen.getByText(/Show more/i);

    fireEvent.click(showPara);

    const childComp = screen.getByText(/Test node/i);
    expect(childComp).toBeVisible();
  });
});
