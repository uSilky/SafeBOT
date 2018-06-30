const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

   message.delete().catch(O_o=>{})
    const loja = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Safe loja")
       
       .setDescription("Acesse nossa loja por esse link!\n\nhttps://safemine.tk/")
       
       .setTimestamp()
       .setFooter(`SafeBot - SafeLoja copyright`)
    
    message.channel.send(loja)

}