var AGIServer = require("ding-dong");

var handler = function (context) {
  context
    .onEvent("variables")
    .then(async function (vars) {
      await context.streamFile(
        "voices/insurance_about_to_expire_1_to_know_more_2_to_oup_out"
      );
      await context.streamFile("voices/one_of_our_agents_will_call_you_soon");
      await context.streamFile("voices/optout_received");
      await context.streamFile("voices/thank_you_bye");
    })
    .then(function (result) {
      return context.end();
    });
};

var agi = new AGIServer(handler);
agi.start(3000);
