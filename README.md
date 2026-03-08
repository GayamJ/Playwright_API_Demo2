
# Playwright_API_Demo2

## Project Overview
This project demonstrates API and UI testing using [Playwright](https://playwright.dev/) with JavaScript. It includes:
- Automated API tests for a sample booking API
- UI tests for the Playwright website
- Integration with Allure for advanced test reporting

## Project Structure
- `tests/` — Contains all test files
  - `Booking_POST_PUT_PATCH_GET_Test.spec.js`: API tests for booking creation, update (PUT/PATCH), and authentication
  - `example.spec.js`: UI tests for the Playwright website
- `playwright.config.js` — Playwright configuration (test directory, reporters, browser settings, etc.)
- `allure-results/` and `playwright-report/` — Generated test reports

## How to Run Tests
1. Install dependencies:
	```bash
	npm install
	```
2. Run all tests:
	```bash
	npx playwright test
	```
3. View Playwright HTML report:
	```bash
	npx playwright show-report
	```
4. Generate and view Allure report (if Allure CLI is installed):
	```bash
	npx allure generate allure-results --clean -o allure-report
	npx allure open allure-report
	```

## Test Details
### API Test: Booking_POST_PUT_PATCH_GET_Test.spec.js
- **Auth**: Gets an authentication token from the booking API
- **Create Booking**: Creates a new booking and validates the response
- **Update Booking (PUT)**: Updates the booking with new data and checks all fields
- **Partial Update (PATCH)**: Updates only the firstname and lastname fields

### UI Test: example.spec.js
- Checks the Playwright website title
- Verifies the presence and navigation of the "Get started" link

## Notes
- Allure reporting requires the Allure CLI to be installed globally (`npm install -g allure-commandline`)
- Test results and reports are generated in `allure-results/` and `playwright-report/`
- Update API endpoints or test data as needed for your use case
