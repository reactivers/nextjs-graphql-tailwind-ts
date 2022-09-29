describe("HOME", () => {
  it("Open app", () => {
    cy.visit("/");
  });
  it("Header", () => {
    const header = cy.get("h1");
    header.contains("Next App");
  });
  it("Content", () => {
    const header = cy.get("#home-page-title");
    header.contains("HOME PAGE");
  });
  it("Env Content", () => {
    const envContent = cy.get("#home-page-env-text");
    console.log("process.env.NODE_ENV", process.env.NODE_ENV);
    envContent.contains("This is test environment");
  });
});
