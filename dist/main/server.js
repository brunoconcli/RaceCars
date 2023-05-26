"use strict";

var _providers = require("../infrastructure/providers");
var _appConfiguration = require("./configuration/app-configuration");
async function initializeServer() {
  console.time("start_server");
  await (0, _providers.getConnection)().then(() => {
    console.log("Database is running");
  }).catch(error => {
    console.log("Error in start database:", error);
  });
  const app = (0, _appConfiguration.setUpApp)();
  app.listen(3030, () => {
    console.timeLog("start_server");
  });
}
void initializeServer();