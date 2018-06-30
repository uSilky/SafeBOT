const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{
   
   if(message.channel.id != "460886091369807872") return message.reply(`você não pode executar comandos aqui!`).then(msg => msg.delete(5000));
    const loja = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Safe loja")
       
       .setDescription("Acesse nossa loja por esse link!\n\nhttps://safemine.tk/")
       
       .setTimestamp()
       .setFooter(`SafeBot - SafeLoja copyright`)
    
    message.channel.send(loja)

}
