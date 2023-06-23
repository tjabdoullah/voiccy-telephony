var AGIServer = require("ding-dong");

var streamAudio = async function (context, filepath) {
  await context.streamFile(filepath);
};

var getUserInput = async function (
  context,
  filepath,
  waitTimeInSeconds,
  numberOfKeys,
  loopTimes
) {
  var userStrokes = "";
  var returnedObject = "";
  var currentLoop = 0;
  while (userStrokes === "" && currentLoop < loopTimes) {
    var returnedObject = await context.getData(
      filepath,
      1000 * waitTimeInSeconds,
      numberOfKeys
    );
    userStrokes = returnedObject.result;
    currentLoop++;
  }
  return returnedObject;
};

var recordUserVoice = async function () {
  await streamAudio(context, "voiccy/one_of_our_agents_will_call_you_soon");
  await streamAudio(context, "voiccy/one_of_our_agents_will_call_you_soon");
  await streamAudio(context, "voiccy/one_of_our_agents_will_call_you_soon");
  await streamAudio(context, "voiccy/one_of_our_agents_will_call_you_soon");
};

var handler = function (context) {
  context
    .onEvent("variables")
    .then(async function (vars) {
      // var input = await context.recordFile("22032023", "wav", 5, 5);

      await streamAudio(context, "voiccy/edge_signup");

      // var input = await getUserInput(
      //   context,
      //   "voiccy/greetings",
      //   5,
      //   1,
      //   3
      // );

      // if (input.result == "1")
      //   await streamAudio(context, "voiccy/call_back_selected");
      // else if (input.result == "2") await streamAudio(context, "voiccy/opt_out_selected");

      // console.log(input);
      // await streamAudio(context, "voiccy/thanks_have_a_good_day");
    })
    .then(function (result) {
      return context.end();
    });
};

var agi = new AGIServer(handler);
agi.start(3000);
