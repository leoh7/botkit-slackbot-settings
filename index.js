import { SlackAdapter } from 'botbuilder-adapter-slack'
import dotenv from 'dotenv';
import { Botkit } from 'botkit';

dotenv.config();

if(!process.env.CLIENT_ID || !process.env.CLIENT_SECRET || !process.env.PORT ||
  !process.env.VERIFICATION_TOKEN) {
    console.log('Error: Specify CLIENT_ID, CLIENT_SECRET, VERIFICATION_TOKEN and PORT in env');
    process.exit(1);
  } else {
    console.log('Hello Botkit');
  }

const adapter = new SlackAdapter({
  clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
  botToken: process.env.BOT_TOKEN
});

const controller = new Botkit({
  adapter
});
controller.on('message', async(bot, message) => {
  await bot.reply(message, 'I heard a message!');
})
// const controller = Botkit.slackbot({
//   json_file_store: './db_slackbutton_slash_command/',
//   debug: true,
//   clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
// });

// controller.configureSlackApp({
//   clientId: process.env.CLIENT_ID,
//   clientSecret: process.env.CLIENT_SECRET,
//   clientSigningSecret: process.env.CLIENT_SIGNING_SECRET,
//   scopes: ['commands', 'bot'],
// });

// controller.setupWebserver(process.env.PORT, function(err, webserver) {
//   controller.createWebhookEndpoints(controller.webserver);
//   controller.createOauthEndpoints(controller.webserver, 
//     function (err, req, res) {
//       if(err) {
//         res.status(500).send('ERROR: ' + err);
//       } else {
//         res.send('Success!');
//       }
//     });
// });

// Note: If you are not also establishing an RTM connection, you will need to manually run the controller.startTicking() method for conversations to work properly.
// https://github.com/Skellington-Closet/skellington/issues/54
// controller.startTicking();

// var bot = controller.spawn({
//   token: process.env.BOT_TOKEN,
//   incoming_webhook: {
//     url: 'WE_WILL_GET_TO_THIS'
//   }
// }).startRTM((error) => {
//   if(error) {
//     console.log('구동 실패');
//   } else {
//     bot.say({ text: '봇이 성공적으로 배포되었습니다!', channel: 'general' });
//   }
// });

// // listening for phrases
// controller.hears('hi', 'direct_message', function(bot, message) {
//   bot.reply(message, 'Hello.');
// });

// controller.on('slash_command', function(bot, message) {
//   // logic goes here
//   bot.replyAcknowledge();
//   switch(message.command) {
//     case "/echo":
//       bot.reply(message, 'heard ya!')
//       break;
//     default:
//       bot.reply(message, 'Did not recognize that command, sorry!')
//   }
// });