Feature: Post autentication 

  Background: 
    Given User navigates to the application
  Scenario: Post must be created
    And User enter the username as "eg.soto@uniandes.edu.co"
    And User enter the password as "Supermean_1"
    And User click the login button 
    And User goes to create a new post
    And User fills the title as "test_1"
    And User fills the description as "test_1"
    Then User publishes the post
    And User goes to published posts
    And User confirms published to have title as "test_1"
  Scenario: Post draft must be created
    And User enter the username as "eg.soto@uniandes.edu.co"
    And User enter the password as "Supermean_1"
    And User click the login button 
    And User goes to create a new post
    And User fills the title as "test_2"
    And User fills the description as "test_2"
    And User goes to draft posts
    And User confirms draft to have title as "test_2"
    
  







  