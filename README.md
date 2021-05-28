# djs-buttons
ok so, for the button_interaction i was using a handler so adjust  
## so this is how it works:
you first send a message recieve an interaction event (slash commands) and then you reply to them using the buttons, now... there are 5 different buttons, grey, blurple, green, red, and the url ones which are grey in colour, now, when one person clicks the button you recieve a `INTERACTION_CREATE` event, to filter this out, you can do:
```js
client.on('INTERACTION_CREATE', async(interaction)=>{
  if (interaction.type != 3) return;
  /*do whatever you want to do with buttons here*/
 });
 ```
an example is the [worker_thingy file](https://github.com/sm0lvoicc/djs-buttons/blob/main/working_thingy.js), please ignore the errors, i made it at 2 am at night  
and i am using djs v13, or master branch, so do `npm install discordjs/discord.js`
## styles:  
1: [blurple](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/blurple.json)  
2: [grey](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/grey.json)  
3: [green](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/green.json)  
4: [red](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/red.json)  
5: [url](https://github.com/sm0lvoicc/djs-buttons/blob/main/buttons/url.json)  
I have made a folder in here with the name buttons or something, i have made files for each buttons, see that for more reference  
note:
the `"emoji":{}` thing is not compulsary, neither is `"label":""`, and you cannot have any other colour /*style*/ with a url button    
[my bot with buttons](https://discord.com/api/oauth2/authorize?client_id=760426095563767818&permissions=4294967287&scope=bot%20applications.commands)  
[another bot with buttons but for F1 fans](https://discord.com/api/oauth2/authorize?client_id=841915071772229643&permissions=3959815233&scope=bot%20applications.commands)
