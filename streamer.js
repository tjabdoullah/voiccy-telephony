var AGIServer = require("ding-dong");

var handler = function (context) {
  context
    .onEvent("variables")
    .then(async function (vars) {
      await context.streamFile("/voices/insurance");
      return context.streamFile("/voices/insurance");
    })
    .then(function (result) {
      return context.end();
    });
};

var agi = new AGIServer(handler);
agi.start(3000);
