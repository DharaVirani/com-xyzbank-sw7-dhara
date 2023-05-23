$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("banktest.feature");
formatter.feature({
  "line": 1,
  "name": "Bank Test functionality",
  "description": "As a user I want to check the acceptance criteria of the bank",
  "id": "bank-test-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5708950600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "Bank Manager should be able to add Customer successfully",
  "description": "",
  "id": "bank-test-functionality;bank-manager-should-be-able-to-add-customer-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@sanity"
    },
    {
      "line": 7,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I click on \u0027Bank Manager\u0027 login button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \u0027Add Customer\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter first name \"Hermoine\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter last name \"Granger\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter postcode \"NW7\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on \u0027Add To Customer\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I verify the message displayed as \"Customer added successfully with customer id :6\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on accept",
  "keyword": "And "
});
formatter.match({
  "location": "BankTestSteps.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 331294200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnAddCustomerTab()"
});
formatter.result({
  "duration": 316931600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine",
      "offset": 20
    }
  ],
  "location": "BankTestSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 303807600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Granger",
      "offset": 19
    }
  ],
  "location": "BankTestSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 83595100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NW7",
      "offset": 18
    }
  ],
  "location": "BankTestSteps.iEnterPostcode(String)"
});
formatter.result({
  "duration": 86230000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnAddToCustomerButton()"
});
formatter.result({
  "duration": 83275300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Customer added successfully with customer id :6",
      "offset": 35
    }
  ],
  "location": "BankTestSteps.iVerifyTheMessageDisplayedAs(String)"
});
formatter.result({
  "duration": 10577000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnAccept()"
});
formatter.result({
  "duration": 11772400,
  "status": "passed"
});
formatter.before({
  "duration": 2913172000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Bank Manager should be able to open account successfully",
  "description": "",
  "id": "bank-test-functionality;bank-manager-should-be-able-to-open-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@smoke"
    },
    {
      "line": 18,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I click on \u0027Bank Manager\u0027 login button",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on \u0027Open Account\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select customer that created I created which is \"Hermoine Granger\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select currency dropdown as \"Pound\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on \u0027Process\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify the message for account creation as \"Account created successfully with account Number :1016\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I click on accept",
  "keyword": "And "
});
formatter.match({
  "location": "BankTestSteps.iClickOnBankManagerLoginButton()"
});
formatter.result({
  "duration": 259187500,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnOpenAccountTab()"
});
formatter.result({
  "duration": 226661100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 51
    }
  ],
  "location": "BankTestSteps.iSelectCustomerThatCreatedICreatedWhichIs(String)"
});
formatter.result({
  "duration": 353901900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pound",
      "offset": 31
    }
  ],
  "location": "BankTestSteps.iSelectCurrencyDropdownAs(String)"
});
formatter.result({
  "duration": 209213800,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnProcessButton()"
});
formatter.result({
  "duration": 127550600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account created successfully with account Number :1016",
      "offset": 46
    }
  ],
  "location": "BankTestSteps.iVerifyTheMessageForAccountCreationAs(String)"
});
formatter.result({
  "duration": 12751000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnAccept()"
});
formatter.result({
  "duration": 11662100,
  "status": "passed"
});
formatter.before({
  "duration": 3563275400,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 29,
  "name": "Customer should login and logout successfully",
  "description": "",
  "id": "bank-test-functionality;customer-should-login-and-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I click on \u0027Customer\u0027 login button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I select name \"Hermoine Granger\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on \u0027Logout\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I verify \"Your Name :\" text displayed",
  "keyword": "And "
});
formatter.match({
  "location": "BankTestSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 410901100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 15
    }
  ],
  "location": "BankTestSteps.iSelectName(String)"
});
formatter.result({
  "duration": 579100600,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 246035900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 197542900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your Name :",
      "offset": 10
    }
  ],
  "location": "BankTestSteps.iVerifyTextDisplayed(String)"
});
formatter.result({
  "duration": 30688600,
  "status": "passed"
});
formatter.before({
  "duration": 3677987100,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 37,
  "name": "Customer should deposit money successfully",
  "description": "",
  "id": "bank-test-functionality;customer-should-deposit-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I click on \u0027Customer\u0027 login button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I select name \"Hermoine Granger\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on \u0027Deposit\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter deposit amount of \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on \u0027Deposit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I verify the message of deposit successful as \"Deposit Successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 425309800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 15
    }
  ],
  "location": "BankTestSteps.iSelectName(String)"
});
formatter.result({
  "duration": 880779400,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 3133873200,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnDepositTab()"
});
formatter.result({
  "duration": 320684000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 27
    }
  ],
  "location": "BankTestSteps.iEnterDepositAmountOf(String)"
});
formatter.result({
  "duration": 592533000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnDepositButton()"
});
formatter.result({
  "duration": 113831500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deposit Successful",
      "offset": 47
    }
  ],
  "location": "BankTestSteps.iVerifyTheMessageOfDepositSuccessfulAs(String)"
});
formatter.result({
  "duration": 48123700,
  "status": "passed"
});
formatter.before({
  "duration": 3770169500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 47,
  "name": "Customer should be able to withdraw money successfully",
  "description": "",
  "id": "bank-test-functionality;customer-should-be-able-to-withdraw-money-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I click on \u0027Customer\u0027 login button",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I select name \"Hermoine Granger\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on \u0027Login\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on \u0027Withdrawal\u0027 tab",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter amount to be withdrawn of \"50\"",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on \u0027Withdraw\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I verify message \"Transaction successful\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BankTestSteps.iClickOnCustomerLoginButton()"
});
formatter.result({
  "duration": 492922700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hermoine Granger",
      "offset": 15
    }
  ],
  "location": "BankTestSteps.iSelectName(String)"
});
formatter.result({
  "duration": 687269000,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 556182900,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnWithdrawalTab()"
});
formatter.result({
  "duration": 107618100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 35
    }
  ],
  "location": "BankTestSteps.iEnterAmountToBeWithdrawnOf(String)"
});
formatter.result({
  "duration": 296196300,
  "status": "passed"
});
formatter.match({
  "location": "BankTestSteps.iClickOnWithdrawButton()"
});
formatter.result({
  "duration": 78856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 18
    }
  ],
  "location": "BankTestSteps.iVerifyMessage(String)"
});
formatter.result({
  "duration": 31046000,
  "status": "passed"
});
});