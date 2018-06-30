const Discord = require("discord.js");


const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

module.exports.run = async (client, message, args) =>{
    if(!message.member.roles.some(r=>["? Desenvolvedor", "? Colaborador"].includes(r.name)) ) return message.reply('você não tem permissão! :x:');
   message.delete().catch(O_o=>{});
   let role = message.guild.roles.find("name", "@everyone");
   message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
   //Quiz
   if(args[0] == "quiz"){
    await  message.author.createDM()
    message.author.send("Qual vai ser a pergunta?")
    var collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id,{time: 1000 * 50,max: 1})
    collector.on('collect', a => {
        var pergunta = a.content
        message.author.send("e qual é a resposta? (**use acentos e não use abreviaturas**)")
        var collector2 =  message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id,{time: 1000 * 50,max: 1})
        collector2.on('collect', b => {
            var resposta = b.content.toLowerCase()
            console.log(resposta)

        
            const perguntaembed = new Discord.RichEmbed()
                .setTitle(`Pergunta:`)
                .setColor("174ce2")
        
                .setDescription(`**${pergunta.toUpperCase()}**`)

            const iniciando = async() => {
            await sleep(5000)
            message.channel.send("Iniciando em **3 segundos**!");
            await sleep(1000)
            message.channel.send("Iniciando em **2 segundos**!");
            await sleep(1000)
            message.channel.send("Iniciando em **1 segundos**!");

            await sleep(1000)

            message.channel.send(perguntaembed)
            await sleep(500) 
            message.channel.overwritePermissions(role, {SEND_MESSAGES: true});
            }
            
            iniciando()
            var collector3 =  message.channel.createMessageCollector(c => c.content.toLowerCase() == resposta,{time: 10000 * 90,max: 1})
            collector3.on('collect', c => {
                message.channel.send(c.author + " ganhou um ponto!\nA resposta certa era: `"+ resposta +"`")
                message.channel.overwritePermissions(role, {SEND_MESSAGES: false});
            })
        })
    })

   }

}   