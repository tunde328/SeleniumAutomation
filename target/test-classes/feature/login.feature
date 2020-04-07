@accountManagement
Feature: login
  @login
  Scenario: Account login-Registered customer
    Given user on login page
    When user enters their email address
    And user enters their password
    And user click on login
    Then homepage should be displayed