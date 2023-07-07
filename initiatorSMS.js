const Manager = require('asterisk-manager');

const ami = new Manager();
const amiConfig = {
  host: 'localhost',
  port: 5038,
  username: 'admin',
  password: '436d568f4798acc79cacd55959cd8911',
};

ami.connect(amiConfig);

ami.on('managerevent', (evt) => {
  console.log('Received AMI event:', evt);
});

ami.on('agentconnect', (evt) => {
  console.log('Agent connected:', evt);
});

ami.on('agentcallbacklogin', (evt) => {
  console.log('Agent callback login:', evt);
});


const sendSMSAction = {
  Action: 'SMSCommand',
  Command: 'gsm send sms SIP/0665638452@dinstar "Hello, this is a test SMS!"',
};
