//v0.2

var Discord = require("discord.js");

var bot = new Discord.Client ();

var no = 0;

 //saying hello

bot.on('message', message => {
	
	var input = message.content.toLowerCase();
	
  if (input === 'hi') {
    message.channel.sendMessage('Greetings ' + message.author);
  }
  
  });
  
 //saying hello to new members
 
bot.on('guildMemberAdd', guildMember => {
 guildMember.guild.defaultChannel.sendMessage('Greetings ' + guildMember.user.username + ', welcome to the server. I am Robonyan F. You will be granted full access when admin are available to process your request.');
  });
  
 //sending a file
  
 bot.on('message', message => {
	
	var input = message.content.toLowerCase();
	
  if (input === 'rocket punch') {
    message.channel.sendFile('http://yokaiwatch.membahas.com/wp-content/uploads/2016/02/Robonyan-Yo-kai-Watch.jpg', 'punch.jpg', 'Initiating rocket punch sequence');
  }
  
  });
  
 //komasan purge
 
 var komaimg = ['http://vignette4.wikia.nocookie.net/theunitedorganizationtoonsheroes/images/d/d2/Komasan.png/revision/latest?cb=20160112023928', 'http://66.media.tumblr.com/ee77b709e8a8b8c947eb08c51c0e48e8/tumblr_nrwf5yj5Xq1uzhidko1_500.jpg', 'http://www.yo-kai-world.com/img/carousel/CarouselCharacterArt_BIG/Komasan.png'];
 function getimg(imgAr) {
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    return img;
}

 bot.on('message', message => {
	
	var input = message.content.toLowerCase();
	
  if (input === 'komasan') {
    message.channel.sendFile(getimg(komaimg), 'komasan.jpg', 'Purifying');
  }
  
  });

 //counting messages from all users
  
//bot.on('message', message => {
//if(message.author.bot) return;  
//no++;
//if (no === 5) {
//message.channel.sendMessage('you have sent 5 messages');
//}
//if (no === 10) {
//message.channel.sendMessage('you have sent 10 messages');
//}
//});

bot.login("MjQ2NDk4Nzg3NjI5OTg5ODg5.CwbhaQ.mqeAyggApMrwMCLsEo-TPeUyIcM");
