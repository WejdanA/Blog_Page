var example_article={"id":"5",
"subject":"The Impact of DevOps in 2021 ",
"img":"img/DevOps.png",
"preview":"In the past, developing and deploying software was done ",
"content":"In the past, developing and deploying software was done in weeks or even days. Now, with the advent of agile and DevOps, the software is produced and released every day. IT has to accept these changes to succeed in today's dynamic technology environment and learn to embrace them. Developing and deploying software requires much planning, and it's also challenging to keep track of the process. The planning and tracking challenge is vital when the software you're delivering is a critical part of your business. Thankfully, DevOps offers some real solutions that can reduce the risk of deploying and releasing software into production.",
"writer":"Matthew David"

}


var subject=document.getElementsByClassName('article_subject')[0]
subject.innerHTML=example_article.subject;
var img =document.getElementsByClassName('article_img')[0];
img.src=example_article.img;
var content =document.getElementsByClassName('article_content')[0];
content.innerHTML=example_article.content;
// var button_id =document.getElementsByTagName('BUTTON')[0].id=articledata[articledata.length-i-1].id;