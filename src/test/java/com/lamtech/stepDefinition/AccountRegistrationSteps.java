package com.lamtech.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountRegistrationSteps {
    WebDriver driver;

    @Given("^user on create an account page$")
    public void userOnCreateAnAccountPage() {
        //To define chrome driver
        WebDriverManager.chromedriver().setup();

        //To open chrome driver
        driver = new ChromeDriver();

        //To maximize browser
        driver.manage().window().maximize();
        // Lunch Luma Website
        driver.get("http://demo-magento2.vuestorefront.io/");
        //click create an account
        driver.findElement(By.linkText("Create an Account")).click();

    }

    @When("^user enter first name$")
    public void userEnterFirstName() {

        driver.findElement(By.id("firstname")).sendKeys("babat");

        
    }

    @And("^user enter last name$")
    public void userEnterLastName() {
        driver.findElement(By.id("lastname")).sendKeys("owonikoko");
    }

    @And("^user enter email address$")
    public void userEnterEmailAddress() {
      driver.findElement(By.name("email")).sendKeys("babat1@yahoo.com");
    }

    @And("^user enter password$")
    public void userEnterPassword() {

        driver.findElement(By.id("password")).sendKeys("Babatunde1");
    }

    @And("^user enter confirm password$")
    public void userEnterConfirmPassword() {
        driver.findElement(By.id("password-confirmation")).sendKeys("Babatunde1");

    }

    @And("^user click on create account$")
    public void userClickOnCreateAccount() {
        driver.findElement(By.cssSelector("#form-validate > div > div.primary > button")).click();
        
    }

    @Then("^account should be create successfully$")
    public void accountShouldBeCreateSuccessfully() {
        driver.close();
    }


}














