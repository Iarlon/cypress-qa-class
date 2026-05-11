Feature: I want to login into the site with valid data

Background: Navigate to the Website
  Given I navigate to the Website

Scenario: Login as new sign up user with valid data
  When I entered valid credential email and validpassword 
    | email                  | validpassword |
    | standard_user | secret_sauce    |
  And User click on sign in button