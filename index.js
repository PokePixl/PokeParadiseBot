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
        if(cmd.toLowerCase() == prefix.toLowerCase() + 'addBadge'.toLowerCase()) {
            if(message.member.roles.find(role => role.name === 'Pewter City Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name !== '🌑')) {
                    let badgeRole1 = message.guild.roles.find(role => role.name.includes('🌑'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole1.id);
                    message.channel.send('Added Boulder Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ that do not have this badge');
                }
            } else if(message.member.roles.find(role => role.name === 'Cerulean City Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name === '🌑')) {
                    let badgeRole2 = message.guild.roles.find(role => role.name.includes('💧'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole2.id);
                    message.channel.send('Added Cascade Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ that has the Boulder Badge');
                }
            } else if(message.member.roles.find(role => role.name === 'Vermilion City Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name === '💧')) {
                    let badgeRole3 = message.guild.roles.find(role => role.name.includes('⚡'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole3.id);
                    message.channel.send('Added Thunder Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ that has the Cascade Badge');
                }
            } else if(message.member.roles.find(role => role.name === 'Celadon City Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name === '⚡')) {
                    let badgeRole4 = message.guild.roles.find(role => role.name.includes('🌈'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole4.id);
                    message.channel.send('Added Rainbow Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ in the correct gym');
                }
            } else if(message.member.roles.find(role => role.name === 'Fuchsia City Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name === '🌈')) {
                    let badgeRole5 = message.guild.roles.find(role => role.name.includes('🔮'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole5.id);
                    message.channel.send('Added Soul Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ that has the Rainbow Badge');
                }
            } else if(message.member.roles.find(role => role.name === 'Saffron City Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name === '🔮')) {
                    let badgeRole6 = message.guild.roles.find(role => role.name.includes('📀'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole6.id);
                    message.channel.send('Added Marsh Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ that has the Sould Badge');
                }
            } else if(message.member.roles.find(role => role.name === 'Cinnabar Island Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name === '📀')) {
                    let badgeRole7 = message.guild.roles.find(role => role.name.includes('🌋'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole7.id);
                    message.channel.send('Added Volcano Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ that has the Marsh Barge');
                }
            } else if(message.member.roles.find(role => role.name === 'Viridian City Gym Leader')) {
                if(message.mentions.members.first() && message.member.roles.find(role => role.name === '🌋')) {
                    let badgeRole8 = message.guild.roles.find(role => role.name.includes('🌍'));
                    let selectedUser = message.mentions.members.first();
                    selectedUser.addRole(badgeRole8.id);
                    message.channel.send('Added Earth Badge to ' + selectedUser + '!');
                } else {
                    message.channel.send('You have to specify someone by @ that has the Volcano Badge');
                }
            } else {
                message.channel.send('It seems like you don\'t have the permission to use this command. It\'s only for the gym leaders');
            }
        }
        if(cmd.toLowerCase() == prefix.toLowerCase() + 'prune'.toLowerCase()) {
            if(message.member.roles.find(role => role.name === 'Gym Leaders')) {
                if(message.member.roles.find(role => role.name === 'Pewter City Gym Leader')) {
                    if(message.channel.name == 'pewter-city-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else if(message.member.roles.find(role => role.name === 'Cerulean City Gym Leader')) {
                    if(message.channel.name == 'cerulean-city-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else if(message.member.roles.find(role => role.name === 'Vermilion City Gym Leader')) {
                    if(message.channel.name == 'vermilion-city-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else if(message.member.roles.find(role => role.name === 'Celadon City Gym Leader')) {
                    if(message.channel.name == 'celadon-city-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else if(message.member.roles.find(role => role.name === 'Fuchsia City Gym Leader')) {
                    if(message.channel.name == 'fuchsia-city-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else if(message.member.roles.find(role => role.name === 'Saffron City Gym Leader')) {
                    if(message.channel.name == 'saffron-city-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else if(message.member.roles.find(role => role.name === 'Cinnabar Island Gym Leader')) {
                    if(message.channel.name == 'cinnabar-island-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else if(message.member.roles.find(role => role.name === 'Viridian City Gym Leader')) {
                    if(message.channel.name == 'viridian-city-gym') {
                        if(isNaN(args[0]) == false) {
                            message.channel.bulkDelete(parseInt(args[0]));
                        } else {
                            message.channel.send('No number detected. You have to specify number of messages to delete');
                        }
                    } else {
                        message.channel.send('You can only prune messages in your own gym');
                    }
                } else {
                    message.guild.members.get('355407459868868610').send(message.author + 'has the Gym Leader role without specified gym');
                }
            } else {
                message.channel.send('You do not have permission to use this command');
            }
        }
    }
});

bot.on('error', console.error);

bot.login('BOT_TOKEN');
