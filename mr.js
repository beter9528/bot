const Discord = require('discord.js');
const fs = require ('fs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDY3MTUxNDQ2NTA5NjE3MTgy.DtVS8g.TRSbEEmkvWg8ILpoXWJpnb2KyJM');