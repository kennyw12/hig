import * as types from "./types";

describe("text-link/types", () => {
  it("has an array of available types", () => {
    expect(types).toHavePropertyOfConstants("AVAILABLE_TYPES");
  });

  it("has constants for types", () => {
    expect(types).toHavePropertyOfConstants("types");
  });
});
