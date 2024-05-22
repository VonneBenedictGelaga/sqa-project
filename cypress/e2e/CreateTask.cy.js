import React from 'react';
import { mount } from 'cypress/react18';
import AddTaskForm from '../../client/src/components/AddTaskForm';

describe('AddTaskForm', () => {
  beforeEach(() => {
    // Visit the page or mount your component as needed
    cy.visit('http://localhost:5173/login');
    cy.get("#username").type('tester');
    cy.get("#password").type('1qaz2wsx');
    cy.get('[type="submit"]').click();
  });

  //TST_No_03_01
  it('should show error message when leaving "title" field empty', () => {
    // Click 'Add' button without filling the 'title' field
    cy.get('[data-cy=add-button]').click();

    // Check if the error message is displayed
    cy.get('[data-cy=title-input]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  //TST_No_03_02
  it('should show error message when leaving "description" field empty', () => {
    // Fill up the 'title' field and click add button
    cy.get('[data-cy=title-input]').type('Test Title');

    // Click 'Add' button
    cy.get('[data-cy=add-button]').click();

    // Check if the error message is not displayed
    cy.get('[data-cy=description-input]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  //TST_No_03_03
  it('should not show error message when clicking "Add" button after filling up the "title" and "description" field', () => {
    // Fill up the 'title' field
    cy.get('[data-cy=title-input]').type('Test Title');
    // Fill up the description field
    cy.get('[data-cy=description-input]').type('Test Description');
    // Click 'Add' button
    cy.get('[data-cy=add-button]').click();

    // Check if the inputs are valid
    cy.get('[data-cy=title-input]').should("have.length", 1);
    cy.get('[data-cy=description-input]').should("have.length", 1);
    // Check if the task has been created
  });
});
