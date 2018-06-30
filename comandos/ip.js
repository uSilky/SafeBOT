const Discord = require("discord.js");

module.exports.run = async (client, message, args) =>{

if(message.channel.id != "461552920941559818") return message.reply(`você não pode executar comandos aqui!`).then(msg => msg.delete(5000));
   message.delete().catch(O_o=>{})
    const ip = new Discord.RichEmbed()
       .setColor("0cff00")
       .setAuthor("Safe Zone")
       
       .setDescription("Acesse nosso servidor por esse IP!\n\nsafeup.tk")
       
       .setTimestamp()
       .setFooter(`SafeBot - SafeZone copyright`)
    
    message.channel.send(ip)

}
