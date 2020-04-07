$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountRegistration.feature");
formatter.feature({
  "line": 2,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "create an account with a valid email address.",
  "description": "",
  "id": "account-management;create-an-account-with-a-valid-email-address.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@createAccount"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user on create an account page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter email address",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user enter password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on create account",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "account should be create successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountRegistrationSteps.userOnCreateAnAccountPage()"
});
formatter.result({
  "duration": 15294992800,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegistrationSteps.userEnterFirstName()"
});
formatter.result({
  "duration": 571228100,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegistrationSteps.userEnterLastName()"
});
formatter.result({
  "duration": 220554600,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegistrationSteps.userEnterEmailAddress()"
});
formatter.result({
  "duration": 187708000,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegistrationSteps.userEnterPassword()"
});
formatter.result({
  "duration": 196903300,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegistrationSteps.userEnterConfirmPassword()"
});
formatter.result({
  "duration": 117093100,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegistrationSteps.userClickOnCreateAccount()"
});
formatter.result({
  "duration": 881760800,
  "status": "passed"
});
formatter.match({
  "location": "AccountRegistrationSteps.accountShouldBeCreateSuccessfully()"
});
formatter.result({
  "duration": 4165942000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@accountManagement"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Account login-Registered customer",
  "description": "",
  "id": "login;account-login-registered-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters their email address",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters their password",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "homepage should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnLoginPage()"
});
formatter.result({
  "duration": 12052639500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userEntersTheirEmailAddress()"
});
formatter.result({
  "duration": 261367300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userEntersTheirPassword()"
});
formatter.result({
  "duration": 122726300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickOnLogin()"
});
formatter.result({
  "duration": 1858214400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.homepageShouldBeDisplayed()"
});
formatter.result({
  "duration": 4155464200,
  "status": "passed"
});
});