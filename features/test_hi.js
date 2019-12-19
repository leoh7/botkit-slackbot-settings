module.exports = function(controller) {
  controller.hears('영희야', 'message', async(bot, message) => {
    await bot.reply(message,{
      blocks: [
        {
          "type": "section",
          "text": {
            "type": "plain_text",
            "text": "어떤 도움이 필요하세요?",
            "emoji": true
          }
        },
        {
          "type": "divider"
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "안녕?"
          },
          "accessory": {
            "type": "button",
            "text": {
              "type": "plain_text",
              "text": "Button",
              "emoji": true
            },
            "value": "click_me_123"
          }
        }
      ]
    });
  });

  controller.on('block_actions', async(bot,message) => {
    await bot.reply(message, `${ message.incoming_message.channelData.actions[0].value } => 안녕하세요!`);
  });
}