module.exports = { "root": "./developer-guide" };

// Only add piwik if we're building on the CI and deploying
if (process.env.CI) {
  module.exports["plugins"] = ["piwik"];
  module.exports["pluginsConfig"] = {
    "piwik": {
      "URL": "matomo.nonpolynomial.com/",
      "siteId": 9
    }
  };
}
