const Discord = require('discord.js');
const fetch = require('node-fetch');
const bot = new Discord.Client();
bot.prefix = ".";
bot.token = token;
bot.on('ready', ()=>{
    bot.user.setActivity("stuff");
    console.on('online');
});
bot.on('message', async(msg)=>{
    if (message.author.bot) return;
    if (msg.content.toLowerCase() != '.batan') return;
        fetch(`https://discord.com/api/v9/channels/${message.channel.id}/messages`, {
        method: "POST",
        body: JSON.stringify({"content":"batan",
            "components": [{
                "type": 1,
                "components": [
                    {
                        "type": 2,
                        "label": "batan",
                        "style": 4,
                        "custom_id": "the_id_you_want"
                        "emoji":{
                            "name" : "the emoji name",
                            "id": "the emoji is"
                        }
                    }
                ]

            }]}),
        headers: {
            "Authorization": `Bot ${bot.token}`,
            "Content-Type": "application/json"
        }
    })
    }
}
bot.login(bot.token);
