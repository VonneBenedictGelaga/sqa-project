import React from 'react';
import { mount } from 'cypress/react18';
import AddTaskForm from '../../client/src/components/AddTaskForm';
import Tasklist from '../../client/src/components/Tasklist';

describe('AddTaskForm', () => {
  beforeEach(() => {
    // Visit the page or mount your component as needed
    cy.visit('http://localhost:5173/login');

    //Log in using a tester account
    cy.get("#username").type('tester');
    cy.get("#password").type('1qaz2wsx');
    cy.get('[type="submit"]').click();
  });

  it('should show error message when all fields are empty', () => {
    // Click 'Add' button
    cy.get('[data-cy=add-button]').click();

    // Check if the error message is displayed on the title-input 
    cy.get('[data-cy=title-input]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  //TST_No_03_01
  it('should show error message when "Title" field is empty', () => {
    // Fill up the description field
    cy.get('[data-cy=description-input]').type('Test Description');
    
    // Click 'Add' button
    cy.get('[data-cy=add-button]').click();
    
    // Check if the error message is displayed on the title-input 
    cy.get('[data-cy=title-input]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  //TST_No_03_02
  it('should show error message when "Description" field is empty', () => {
    // Fill up the 'title' field
    cy.get('[data-cy=title-input]').type('Test Title');

    // Click 'Add' button
    cy.get('[data-cy=add-button]').click();

    // Check if the error message is not displayed
    cy.get('[data-cy=description-input]').then(($input) => {
      expect($input[0].validationMessage).to.eq("Please fill out this field.");
    });
  });

  //TST_No_03_03
  it('should NOT show error message when all fields are NOT empty', () => {
    // Fill up the 'title' field
    cy.get('[data-cy=title-input]').type('Test Title');
    
    // Fill up the description field
    cy.get('[data-cy=description-input]').type('Test Description');
    
    // Check if the inputs are valid
    cy.get('[data-cy=title-input]').should("have.length", 1);
    cy.get('[data-cy=description-input]').should("have.length", 1);
    
    // Click 'Add' button
    cy.get('[data-cy=add-button]').click();
    
    // Check if the task has been created and printed successfully
    cy.get('[data-cy="task-list"]').contains('Test Title').should('exist');
    cy.get('[data-cy="task-list"]').contains('Test Description').should('exist');
  });

  //TST_No_03_04
  it('should show error message when Title field already exists', () => {
    // Create the first task with a specific title  
    cy.get('[data-cy=title-input]').type('taskTitle');
    cy.get('[data-cy=description-input]').type('taskDescription');
    cy.get('[data-cy=add-button]').click();
  
    // Ensure the task is created successfully
    cy.get('[data-cy="task-list"]').contains('taskTitle').should('exist');
    cy.get('[data-cy="task-list"]').contains('taskDescription').should('exist');
  
    // Attempt to create another task with the same title
    cy.get('[data-cy=title-input]').type('taskTitle');
    cy.get('[data-cy=description-input]').type('Another Description');
    cy.get('[data-cy=add-button]').click();
  
    // Check if the SweetAlert error message is displayed
    cy.get('.swal2-container').should('be.visible');
    cy.get('.swal2-title').should('have.text', 'Error Adding Task');
    cy.get('.swal2-html-container').should('have.text', 'Title Already Exists');
  
    // Close the SweetAlert modal
    cy.get('button.swal2-confirm').click({force: true});
  
    // Ensure the SweetAlert modal is closed
    cy.get('.swal2-container').should('not.exist');
  
    // Now you can create another task with the same title again or perform other actions
  });
});
