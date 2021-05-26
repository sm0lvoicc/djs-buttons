module.exports = (bot, ctx) => {
    bot.api.interactions(ctx.id, ctx.token).callback
        .post({
            data: {
                type: 4,
                data: {
                    content: "buttons test",
                    components: [{
                        "type": 1, "components": [
                            { "type": 2, "style": 3, "label": "batan", "custom_id": "1" },
                        ]
                    }]
                }
            }
        })
}