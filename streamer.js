var AGIServer = require("ding-dong");

var handler = function (context) {
  context
    .onEvent("variables")
    .then(async function (vars) {
      await context.streamFile("/home/ubuntu/voiccy-telephony/voices/insurance");
      return context.streamFile("/home/ubuntu/voiccy-telephony/voices/insurance");
    })
    .then(function (result) {
      return context.end();
    });
};

var agi = new AGIServer(handler);
agi.start(3000);
