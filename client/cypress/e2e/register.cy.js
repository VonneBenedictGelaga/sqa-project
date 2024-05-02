describe("register page", () => {
  it("should show validation errors when leaving all fields blank,", () => {
    cy.visit("http://localhost:5173/register");

    cy.get('[type="submit"]').click();
    cy.get("input#username:invalid").should("have.length", 1);
    cy.get("#username").then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });
});
