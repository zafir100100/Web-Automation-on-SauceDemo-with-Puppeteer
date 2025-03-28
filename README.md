# Web-Automation-on-SauceDemo-with-Puppeteer

This repository contains automated UI tests for Swag Labs using Puppeteer. It includes test cases for user authentication and product page validation.

## Video

https://github.com/user-attachments/assets/3b401358-4a3a-4498-a885-d877a1335d57

## How to run this project
```sh
# Clone this project

# Install dependencies
npm install

# Run tests:
npm test
```
## Test Scenario: Login and Verify Products Page

### **Test Case 1: Successful Login**
#### **Steps:**
1. Navigate to `https://www.saucedemo.com/`
2. Enter a valid username (`standard_user`)
3. Enter a valid password (`secret_sauce`)
4. Click on the login button
5. Verify that the login is successful by checking the presence of the products label

#### **Expected Result:**
- The user should be redirected to the Products page
- The page should display the title **"Products"**
