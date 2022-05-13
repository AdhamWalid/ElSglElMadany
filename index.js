const Discord = require('discord.js')
const client = new Discord.Client({intents: 32767});
const wait = require('node:timers/promises').setTimeout;
const moment = require("moment")

client.on('ready' , () => {
    console.log(client.user.username + ' is Alive ')
    client.user.setActivity(`انا السجل المدني انته مين!؟`)
})

client.on('messageCreate' ,async (message) => {
    if (message.channel.id = '974768317950754846') {
        if (message.author.bot) return;
        if (!message.content.size == 18 || isNaN(message.content)) return message.reply({content:"INVALID ID 😦"})

        let info = await client.users.fetch(message.content);
        if (!info) return;
        let embed = new Discord.MessageEmbed()
        .setAuthor({name : `Gathering Information ..`})
        .setFooter({text : `Searching . . . . .`})
        .setColor('BLURPLE')
        const flags = {

            DISCORD_EMPLOYEE: 'Discord Employee',
            PARTNERED_SERVER_OWNER: 'Partnered Server Owner',
            DISCORD_PARTNER: 'Discord Partner' ,
            HYPESQUAD_EVENTS: 'Hypesquad Events',
            BUGHUNTER_LEVEL_1: 'Bug Hunter (level 1)',
            HOUSE_BRAVERY: 'House Of Bravery',
            HOUSE_BRILLIANCE: 'House of Brilliance',
            HOUSE_BALANCE: 'House of Balance',
            EARLY_SUPPORTER: 'Early Supporter',
            TEAM_USER: 'Team User',
            SYSTEM: 'System',
            BUGHUNTER_LEVEL_2: 'Bug Hunter (level 2)',
            VERIFIED_BOT: 'Verified Bot',
            VERIFIED_DEVELOPER: 'Verified Developer'
        
                }


                const userflags = info.flags.toArray();

                const createddate = moment.utc(info.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss");


        let infoembed = new Discord.MessageEmbed()
        .setAuthor({name : `${info.username}` , iconURL : info.avatarURL({dynamic:true})})
        .setColor('BLURPLE')
        .addField(`Status` , `Bot : \`${info.bot}\`` , true)
        .addField('Badges', `${userflags.length ? userflags.map(flag => flags[flag]).join(', ') : 'No badges'}` , true)
        .addField(`Tag` , `${info.tag}` , true)
        .addField("**CreatedAt :**", `** <t:${parseInt(info.createdAt / 1000)}:R> **`, true)  
        .addField("**Joined Discord :**", `${createddate}`, true)  

        .setImage(`https://api.probot.io/profile/${info.id}`)
        .setFooter({text : `انا السجل المدني انته مين؟`})

        
        console.log(info)

        if (info ) {message.channel.send({embeds : [embed]}).then(async (m)=>{
            wait(120000)
            
            m.edit({embeds : [infoembed]})
        })
    }
    }
})

client.login('OTcyNTc2NDI4Nzk1MjM2NDIz.GCXyzN.fXV43uob6Lf65r3DnyHfTEa4btxNsOP9F87pmc')