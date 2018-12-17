const Discord = require('discord.js');
const bot = new Discord.Client();
var fs = require('fs');

bot.on('ready', async () => {
    console.log(`${bot.user.username} is now online!`)
});

bot.on('message', (message) => {
    var sender = message.author;

    let prefix = 'g!'
    
    let messageArray = message.content.split(' ');
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(!sender.bot) {
        if(cmd.toLowerCase() == prefix + 'addBadge'.toLowerCase()) {
            if(message.member.roles.find(role => role.name === 'Pewter City Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole1 = message.guild.roles.find(role => role.name.includes('🌑'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole1.id);
                    message.channel.send('Added Boulder Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else if(message.member.roles.find(role => role.name === 'Cerulean City Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole2 = message.guild.roles.find(role => role.name.includes('💧'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole2.id);
                    message.channel.send('Added Cascade Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else if(message.member.roles.find(role => role.name === 'Vermillion City Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole3 = message.guild.roles.find(role => role.name.includes('⚡'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole3.id);
                    message.channel.send('Added Thunder Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else if(message.member.roles.find(role => role.name === 'Celadon City Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole4 = message.guild.roles.find(role => role.name.includes('🌈'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole4.id);
                    message.channel.send('Added Rainbow Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else if(message.member.roles.find(role => role.name === 'Fuchsia City Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole5 = message.guild.roles.find(role => role.name.includes('🔮'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole5.id);
                    message.channel.send('Added Soul Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else if(message.member.roles.find(role => role.name === 'Saffron City Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole6 = message.guild.roles.find(role => role.name.includes('📀'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole6.id);
                    message.channel.send('Added Marsh Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else if(message.member.roles.find(role => role.name === 'Cinnabar Island Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole7 = message.guild.roles.find(role => role.name.includes('🌋'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole7.id);
                    message.channel.send('Added Volcano Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else if(message.member.roles.find(role => role.name === 'Viridian City Gym Leader')) {
                if(message.mentions.members.first()) {
                    let badgeRole8 = message.guild.roles.find(role => role.name.includes('🌍'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole8.id);
                    message.channel.send('Added Earth Badge to ' + selectedUser + '!')
                } else {
                    message.channel.send('You have to specify someone by @')
                }
            } else {
                message.channel.send('It seems like you don\'t have the permission to use this command. It\'s only for the gym leaders')
            }
        }
    }
})

bot.on('error', console.error)

bot.login('BOT_TOKEN')
