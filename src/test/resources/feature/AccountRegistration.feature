@accountManagement
Feature: Account Management
  @createAccount
  Scenario: create an account with a valid email address.
    Given user on create an account page
    When user enter first name
    And user enter last name
    And user enter email address
    And user enter password
    And user enter confirm password
    And user click on create account
    Then account should be create successfully








