const {Client, Intents} = require('discord.js');
const fetch = require('node-fetch');
const bot = new Client({
    allowedMentions: { parse: [] },
    intents: new Intents(Intents.ALL)
});
bot.prefix = ".";
bot.token = token;
bot.on('ready', async () => {
    bot.application.commands.create({
        name: "button",
        description: "example for button"
    });
    const guild = bot.guilds.cache.get("the id");
    await guild.commands.create({
        name: "button-g",
        description: "example for button, but guild command"
    });
    bot.user.setActivity("stuff");
    console.log('online');
});
bot.on('message', async (msg) => {
    if (message.author.bot) return;
    if (msg.content.toLowerCase() != '.batan') return;
    fetch(`https://discord.com/api/v9/channels/${message.channel.id}/messages`, {
        method: "POST",
        body: JSON.stringify({
            "content": "batan",
            "components": [{
                "type": 1,
                "components": [
                    {
                        "type": 2, //buttons
                        "label": "batan", //the thing you want to display
                        "style": 4, //red
                        "custom_id": "the_id_you_want", //the id
                        "emoji": { //if you want emoji
                            "name": "the emoji name",
                            "id": "the emoji is"
                        }
                    },
                    {
                        "type": 2, //buttons
                        "label": "link", //the thing you want to display
                        "style": 5, //url button
                        "url": "the_url",
                        "emoji": { //if you want emoji
                            "name": "the emoji name",
                            "id": "the emoji is" //don't fill the id if you want ascii
                        }
                    }
                ]
            }]
        }),
        headers: {
            "Authorization": `Bot ${bot.token}`,
            "Content-Type": "application/json"
        }
    })
});
bot.on('interaction', async (interaction) => {
    if (interaction.commandName != "button") return;
    bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            /*flags: 64*/ //for ephemeral
            data: {
                content: "buttons test",
                embeds: [],
                components: [{
                    "type": 1, "components": [
                        {
                            "type": 2, //buttons
                            "label": "batan", //the thing you want to display
                            "style": 4, //red
                            "custom_id": "the_id_you_want", //the id
                            "emoji": { //if you want emoji
                                "name": "the emoji name",
                                "id": "the emoji is"
                            }       //YES I COPY PASTED THIS FROM ABOVE
                        },
                        {
                            "type": 2, //buttons
                            "label": "link", //the thing you want to display
                            "style": 5, //url button
                            "url": "the_url",
                            "emoji": { //if you want emoji
                                "name": "the emoji name",
                                "id": "the emoji is" //don't fill the id if you want ascii
                            }
                        }
                    ]
                }]
            }
        }
    })
});
bot.on('INTERACTION_CREATE', async (bt) => {
    if (bt.type != 3) return; //to reject the normal slash commands, since buttons are type 3
    const btn = bt.data.custom_id;
    if (btn == "the_id_you_want") {
        bot.api.interactions(bt.id, bt.token).callback.post({
            data: {
                type: 7, //this will edit the original interaction, change it to type 4 if you want to send a new message and set it to flags: 64 if you only want it to be seen by the user
                data: {
                    content: "the action or the reply or something",
                    embeds: [],
                }
            }
        });
    }
});
bot.login(bot.token);

