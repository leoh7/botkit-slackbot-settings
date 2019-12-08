const SlackController = require('botkit');
const fs = require('fs');

const loadSkills = (controller) => {
  fs.readFileSync(__dirname).forEach((filename) => {
    if(filename !== 'index.js' && !filename.includes('.disabled.')) {
      require('./' + filename).default(controller);
    }
  });
};

loadSkills.exports = loadSkills;