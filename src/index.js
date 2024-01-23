const { Client, GatewayIntentBits, } = require('discord.js');
require('dotenv').config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    // GatewayIntentBits.MessageContent,
    // GatewayIntentBits.GuildMembers,
    // GatewayIntentBits.GuildMessageReactions,
    // GatewayIntentBits.DirectMessages,
  ],
})

client.login(process.env.TOKEN);

client.on('ready', (client) => {
  console.log(`[${client.user.tag}] 접속 완료`);
});
