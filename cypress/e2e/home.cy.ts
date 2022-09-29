/// <reference types="cypress" />

describe("HOME", () => {
  it("Open app", () => {
    cy.visit("/");
  });
  it("Header", () => {
    const header = cy.get("h1");
    header.contains("Next App");
  });
  it("Content", () => {
    const movieItems = cy.get(".col-span-1");
    movieItems.should("have.length", 34);
  });
});
