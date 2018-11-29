module.exports = {
    "verbose": true,
    "roots": [
      "./spec/"
    ],
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "pageTitle": "Test Report",
            "outputPath": "./reports/test-report.html",
            "includeFailureMsg": "true"
        }],
    ],
    "globals": {
        "Environment": process.env.ENV
      },
}