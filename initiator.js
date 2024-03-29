const number_to_call = "0665638452"; // TJ
//const number_to_call = "0670168080"; // Naceur
//const number_to_call = "0670343333"; // Amina
//const number_to_call = "0659134747"; // Hind
//const number_to_call = "0661538852"; // Ismail
/**
 * port:  port server
 * host: host server
 * username: username for authentication
 * password: username's password for authentication
 * events: this parameter determines whether events are emited.
 **/
var ami = new require("asterisk-manager")(
  "5038",
  "localhost",
  "admin",
  "436d568f4798acc79cacd55959cd8911",
  true
);
// In case of any connectiviy problems we got you coverd.
ami.keepConnected();

// Listen for any/all AMI events.
ami.on("managerevent", function (evt) {});

// Listen for specific AMI events. A list of event names can be found at
// https://wiki.asterisk.org/wiki/display/AST/Asterisk+11+AMI+Events
ami.on("hangup", function (evt) {});
ami.on("confbridgejoin", function (evt) {});

// Listen for Action responses.
ami.on("response", function (evt) {});

// Perform an AMI Action. A list of actions can be found at
// https://wiki.asterisk.org/wiki/display/AST/Asterisk+11+AMI+Actions
ami.action(
  {
    action: "originate",
    channel: "SIP/" + number_to_call + "@dinstar",
    context: "apps",
    exten: 200,
    priority: 1,
    variable: {
      name1: "value1",
      name2: "value2",
    },
  },
  function (err, res) {}
);
