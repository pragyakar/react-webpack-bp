module.exports = function generateWebpackMode(environment) {
  if (environment === "production" || environment === "uat") {
    return "production";
  } else {
    return "development";
  }
};