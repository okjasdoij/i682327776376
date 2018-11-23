const Discord = require('discord.js');
const channel = '493482927649193994';
const pepole = ['282350776456839169','346629187504832513','483536441742458891'];
const randomWords = ['Fuck Off ..','Dream, Dream ..','**Azoze** Is King ،، !','What you want?! ..','Dont Look at Me .!','Fuck You.','Hey Bitch!','Abode :v:','WHAT YOU NEED **BITCH**?! .','Hahahaha.. You are Funny.','Go out mother fuck!','Sleep With me \:('];
const prefix = {
    acc21: '21',
    acc22: '22',
    acc23: '23',
    acc24: '24',
    acc25: '25',
    acc26: '26',
    acc27: '27',
    acc28: '28',
    acc29: '29',
    acc30: '30'
};



const acc21 = new Discord.Client();
acc21.on('ready', () => {
    console.log('Account 21 Ready!');
    setInterval(() => {
        acc21.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc21.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc21.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc21 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc21.login(process.env.ACC21_TOKEN);



const acc22 = new Discord.Client();
acc22.on('ready', () => {
    console.log('Account 22 Ready!');
    setInterval(() => {
        acc22.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc22.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc22.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc22 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc22.login(process.env.ACC22_TOKEN);



const acc23 = new Discord.Client();
acc23.on('ready', () => {
    console.log('Account 23 Ready!');
    setInterval(() => {
        acc23.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc23.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc23.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc23 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc23.login(process.env.ACC23_TOKEN);



const acc24 = new Discord.Client();
acc24.on('ready', () => {
    console.log('Account 24 Ready!');
    setInterval(() => {
        acc24.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc24.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc24.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc24 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc24.login(process.env.ACC24_TOKEN);



const acc25 = new Discord.Client();
acc25.on('ready', () => {
    console.log('Account 25 Ready!');
    setInterval(() => {
        acc25.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
    }, 500);
    setInterval(() => {
       acc25.channels.find(c => c.id == channel).send('#daily');
    }, 86403000);
});
acc25.on('message', message => {
    if(!pepole.includes(message.author.id)) return;
    if(message.content.toLowerCase().split(' ')[0] == prefix.acc25 + 'say') {
        if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
    if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
        if(!message.content.split(' ').slice(1).join(' ')) return;
        message.channel.send(message.content.split(' ').slice(1).join(' '));
    }
});
acc25.login(process.env.ACC25_TOKEN);



// const acc6 = new Discord.Client();
// acc6.on('ready', () => {
//     console.log('Account 6 Ready!');
//     setInterval(() => {
//         acc6.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
//     }, 500);
//     setInterval(() => {
//        acc6.channels.find(c => c.id == channel).send('#daily');
//     }, 86403000);
// });
// acc6.on('message', message => {
//     if(!pepole.includes(message.author.id)) return;
//     if(message.content.toLowerCase().split(' ')[0] == prefix.acc6 + 'say') {
//         if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
//     if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
//         if(!message.content.split(' ').slice(1).join(' ')) return;
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
// });
// acc6.login(process.env.ACC6_TOKEN);



// const acc7 = new Discord.Client();
// acc7.on('ready', () => {
//     console.log('Account 7 Ready!');
//     setInterval(() => {
//         acc7.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
//     }, 500);
//     setInterval(() => {
//        acc7.channels.find(c => c.id == channel).send('#daily');
//     }, 86403000);
// });
// acc7.on('message', message => {
//     if(!pepole.includes(message.author.id)) return;
//     if(message.content.toLowerCase().split(' ')[0] == prefix.acc7 + 'say') {
//         if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
//     if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
//         if(!message.content.split(' ').slice(1).join(' ')) return;
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
// });
// acc7.login(process.env.ACC7_TOKEN);



// const acc8 = new Discord.Client();
// acc8.on('ready', () => {
//     console.log('Account 8 Ready!');
//     setInterval(() => {
//         acc8.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
//     }, 500);
//     setInterval(() => {
//        acc8.channels.find(c => c.id == channel).send('#daily');
//     }, 86403000);
// });
// acc8.on('message', message => {
//     if(!pepole.includes(message.author.id)) return;
//     if(message.content.toLowerCase().split(' ')[0] == prefix.acc8 + 'say') {
//         if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
//     if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
//         if(!message.content.split(' ').slice(1).join(' ')) return;
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
// });
// acc8.login(process.env.ACC8_TOKEN);



// const acc9 = new Discord.Client();
// acc9.on('ready', () => {
//     console.log('Account 9 Ready!');
//     setInterval(() => {
//         acc9.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
//     }, 500);
//     setInterval(() => {
//        acc9.channels.find(c => c.id == channel).send('#daily');
//     }, 86403000);
// });
// acc9.on('message', message => {
//     if(!pepole.includes(message.author.id)) return;
//     if(message.content.toLowerCase().split(' ')[0] == prefix.acc9 + 'say') {
//         if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
//     if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
//         if(!message.content.split(' ').slice(1).join(' ')) return;
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
// });
// acc9.login(process.env.ACC9_TOKEN);



// const acc10 = new Discord.Client();
// acc10.on('ready', () => {
//     console.log('Account 10 Ready!');
//     setInterval(() => {
//         acc10.channels.find(c => c.id == channel).send(randomWords[Math.floor(Math.random() * randomWords.length)]);
//     }, 500);
//     setInterval(() => {
//        acc10.channels.find(c => c.id == channel).send('#daily');
//     }, 86403000);
// });
// acc10.on('message', message => {
//     if(!pepole.includes(message.author.id)) return;
//     if(message.content.toLowerCase().split(' ')[0] == prefix.acc10 + 'say') {
//         if(!message.content.split(' ').slice(1).join(' ')) return message.channel.send('What i say?');
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
//     if(message.content.toLowerCase().split(' ')[0] == '!allsay') {
//         if(!message.content.split(' ').slice(1).join(' ')) return;
//         message.channel.send(message.content.split(' ').slice(1).join(' '));
//     }
// });
// acc10.login(process.env.ACC10_TOKEN);
