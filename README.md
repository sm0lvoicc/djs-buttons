# djs-buttons
 
## How it works:
You must send a message with buttons in order to receive events from them. There are 5 styles of buttons: Primary (Blurple), Secondary (Grey), Success (Green), Danger (Red), and Link, which are always grey. Link buttons do not send `INTERACTION_CREATE` when pressed, but the rest do. The interaction type for buttons is `3`, so you can ignore slash commands by checking `interaction.type` as shown below:

```js
client.ws.on('INTERACTION_CREATE', async(interaction) =>
  { 
  if (interaction.type != 3) return;
  /* Do some stuff here. */
  });
 ```
An example is the [worker_thingy file](https://github.com/sm0lvoicc/djs-buttons/blob/main/working_thingy.js), please ignore the errors, I made it at 2 am  
and I'm using djs v13, or master branch, so you will likely need to install it with `npm install discordjs/discord.js`.

## Example button JSON:
1: [Blurple](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/blurple.json)  
2: [Grey](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/grey.json)  
3: [Green](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/green.json)  
4: [Red](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/red.json)  
5: [Link](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/url.json)  
![batans](https://i.imgur.com/sd6BgY2.png)

**Note:** `emoji` and `label` are optional, but you must have one or the other. You can disable a button by adding `"disabled": true`.

## Response types
Type 6: Type 6 is DefferedMessageUpdate, and allows you to edit your message up to 15 minutes later. You can also make followup messages during this time.
![stuff man](https://imgur.com/KngoZUt.gif)  

Type 7: Type 7 is UpdateMessage. You must pass content to update your message with if you respond with type 7, where as type 6 is an empty body.
![more stuff](https://i.imgur.com/lxGGaKR.gif)  

![interesting stuff](https://i.imgur.com/qIqAW1i.gif)  
[my bot with buttons](https://discord.com/api/oauth2/authorize?client_id=760426095563767818&permissions=4294967287&scope=bot%20applications.commands)  
[another bot with buttons but for F1 fans](https://discord.com/api/oauth2/authorize?client_id=841915071772229643&permissions=3959815233&scope=bot%20applications.commands)
