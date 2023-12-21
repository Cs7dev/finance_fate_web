const { getJson } = require("serpapi");

getJson({
  engine: "google_finance",
  q: "GOOG:NASDAQ",
  api_key: "secret_api_key"
}, (json) => {
  console.log(json);
});