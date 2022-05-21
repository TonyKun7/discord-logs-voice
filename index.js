const { Client, Intents } = require('discord.js')

const client = new Client({
    intents: [        
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.login('<token>')


const {init} = require('@tonykun7/discord-avanced')

let event = init(client)

event.on('VCJoin', (data) => console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' join voice ' + data.channelJoin.name))
event.on('VCLeave', (data) => console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' leave voice ' + data.channelLeave.name))
event.on('VCMove', (data) => console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' move voice ' + data.OldChannel.name + " to " + data.NewChannel.name))
event.on('VCServerDeaf', (data) => {
    if(data.state == 'old')console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' server deaf disabled voice ' + data.channel.name)
    else console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' server deaf activated voice ' + data.channel.name)
})
event.on('VCServerMute', (data) => {
    if(data.state == 'old')console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' server mute disabled voice ' + data.channel.name)
    else console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' server mute activated voice ' + data.channel.name)
})
event.on('VCSelfDeaf', (data) => {
    if(data.state == 'old')console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self deaf disabled voice ' + data.channel.name)
    else console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self deaf activated voice ' + data.channel.name)
})
event.on('VCSelfMute', (data) => {
    if(data.state == 'old')console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self mute disabled voice ' + data.channel.name)
    else console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self mute activated voice ' + data.channel.name)
})
event.on('VCSelfVideo', (data) => {
    if(data.state == 'old')console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self video disabled voice ' + data.channel.name)
    else console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self video activated voice ' + data.channel.name)
})
event.on('VCStreaming', (data) => {
    if(data.state == 'old')console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self streaming disabled voice ' + data.channel.name)
    else console.log("on " + data.channelJoin.guild.name + " : " + data.author.username + ' self streaming activated voice ' + data.channel.name)
})