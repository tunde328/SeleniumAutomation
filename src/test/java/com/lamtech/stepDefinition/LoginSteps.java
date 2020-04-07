package com.lamtech.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginSteps {
    WebDriver driver;

    @Given("^user on login page$")
    public void userOnLoginPage() {
        WebDriverManager.chromedriver().setup();

        //To open chrome driver
        driver = new ChromeDriver();

        //To maximize browser
        driver.manage().window().maximize();
        // Lunch Luma Website
        driver.get("http://demo-magento2.vuestorefront.io/");
        driver.findElement(By.linkText("Sign In")).click();

    }

    @When("^user enters their email address$")
    public void userEntersTheirEmailAddress() {
        driver.findElement(By.id("email")).sendKeys("babat1@yahoo.com");
    }

    @And("^user enters their password$")
    public void userEntersTheirPassword() {
        driver.findElement(By.id("pass")).sendKeys("Babatunde1");
    }

    @And("^user click on login$")
    public void userClickOnLogin() {
        driver.findElement(By.xpath("//*[@id=\"send2\"]/span")).click();
    }

    @Then("^homepage should be displayed$")
    public void homepageShouldBeDisplayed() {
        driver.close();
    }
}
