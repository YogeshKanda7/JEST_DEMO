Getting Started:

-----------This guide is regarding setting up for API automation framework using jest-supertest:
* Jest is the framework which provide test runner, configurations, assertions etc
* supertest is the tool which make the request to API and fetch the response. 

-----------To install all required modules, in the root directory of project run: -----------
npm install or npm i //This will install all required modules as specified in "package.json" file

-----------There are different environments to run the test against:--------
* Mock env : npm run test-mock
* Test env : npm run test-dev

-----------To run a specific file or pattern use:------
e.g npm run test-dev file_name/file_name_pattern

-----------To run specific test or tests of a particular pattern use:------
npm run test-dev -- -t test_name/pattern
