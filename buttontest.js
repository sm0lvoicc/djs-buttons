const { MessageButton } = require('discord-buttons');
const fetch = require('node-fetch');
module.exports = {
    name: "button",
    category: "buttons",
    description: "button",
    permission: ['SEND_MESSAGE', 'EMBED_LINKS'],
    usage: '.button',
    dev: false,
    run: async (bot, message, args) => {
        fetch(`https://discord.com/api/v9/channels/${message.channel.id}/messages`, {
        method: "POST",
        body: JSON.stringify({"content":"batan",
            "components": [{
                "type": 1,
                "components": [
                    {
                        "type": 2,
                        "label": "Click me!",
                        "style": 4,
                        "custom_id": "click_one"
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