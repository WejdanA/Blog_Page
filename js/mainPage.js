
  // var nav_sighn = document.querySelector('#nav_sighn');
  // var main = document.querySelector('main');
  // var drawer = document.querySelector('.nav');

  // nav_sighn.addEventListener('click', function(e) {
  //   drawer.classList.toggle('open');
  //   e.stopPropagation();
  // });
  //  main.addEventListener('click', function() {
  //    drawer.classList.remove('open');
  // });

  var d = new Date();
  document.getElementById("date").innerHTML =d;

  var articlesData= [
    {"id":"1",
        "subject":"Scrum Project Management: Advantages and Disadvantages",
        "img":"img/cloudcomputing.png",
        "preview":"Lorem ipsum dolor sit amet consectetur adipisicing  ",
        "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque perspiciatis, quod hic delectus sint tempora. Officiis, eligendi nulla amet nemo maiores quaerat totam. Unde magnam praesentium expedita est ad!",
        "writer":"simplilearn"
    },

    {"id":"2",
        "subject":"The Concept of Zero Defects in Quality Management",
        "img":"img/cloudcomputing.png",
        "preview":"Lorem ipsum dolor sit amet consectetur adipisicing  ",
        "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque perspiciatis, quod hic delectus sint tempora. Officiis, eligendi nulla amet nemo maiores quaerat totam. Unde magnam praesentium expedita est ad!",
        "writer":"simplilearn"
    },

    {"id":"3",
        "subject":"The Concept of Zero Defects in Quality Management",
        "img":"img/cloudcomputing.png",
        "preview":"Lorem ipsum dolor sit amet consectetur adipisicing  ",
        "content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque perspiciatis, quod hic delectus sint tempora. Officiis, eligendi nulla amet nemo maiores quaerat totam. Unde magnam praesentium expedita est ad!",
        "writer":"simplilearn"
    },

    {"id":"4",
        "subject":"What is Kubernetes on AWS?",
        "img":"img/cloudcomputing.png",
        "preview":"Kubernetes is a free-source software that allows you ",
        "content":"Kubernetes is a free-source software that allows you to place and manage containerized applications at scale. Kubernetes manages clusters of Amazon EC2 to compute instances and runs containers on those particular instances with processes for deployment, maintenance, and scaling. Using Kubernetes, you can run any containerized application using the same toolset on-premises and within the cloud.",
        "writer":"simplilearn"
    },

    {"id":"5",
        "subject":"The Impact of DevOps in 2021 ",
        "img":"img/DevOps.png",
        "preview":"In the past, developing and deploying software was done ",
        "content":"In the past, developing and deploying software was done in weeks or even days. Now, with the advent of agile and DevOps, the software is produced and released every day. IT has to accept these changes to succeed in today's dynamic technology environment and learn to embrace them. Developing and deploying software requires much planning, and it's also challenging to keep track of the process. The planning and tracking challenge is vital when the software you're delivering is a critical part of your business. Thankfully, DevOps offers some real solutions that can reduce the risk of deploying and releasing software into production.",
        "writer":"Matthew David"
        
      },

    {"id":"6",
        "subject":"DevOps Engineer Job Description: Skills, Roles and Responsibilities",
        "img":"img/web_small.png",
        "preview":"DevOps is a methodology that has evolved from the",
        "content":"DevOps is a methodology that has evolved from the experience and best practices of managing the development, testing, and support processes in a software development project life cycle. These practices help organizations manage the development, tools deployment, integrated testing, and assistance with increased productivity and speed. At the same time, they bring the critical elements of continuous integration and continuous deployment to the DevOps engineer’s sole responsibility. ",
        "writer":"Nikita Duggal"
        },

    {"id":"7",
        "subject":"Understanding The Difference Between Kubernetes Vs. Openshift",
        "img":"img/cloudcomputing.png",
        "preview":"Both Kubernetes and OpenShift are popular container management systems",
        "content":"Both Kubernetes and OpenShift are popular container management systems, and each has its unique features and benefits. While Kubernetes helps automate application deployment, scaling, and operations, OpenShift is the container platform that works with Kubernetes to help applications run more efficiently. Check out this article for more insight into more of today’s popular DevOps tools and how each is used. To get an in-depth understanding of Kubernetes, enroll for the Kubernetes Certification.",
        "writer":"simplilearn"
        }];


var articles=document.getElementsByClassName("new_article");

  for(var i=0; i<=2;i++){
     var subject=articles[i].getElementsByTagName('H3')[0]
     subject.innerHTML=articlesData[articlesData.length-i-1].subject;
     var img = articles[i].getElementsByTagName('IMG')[0]
     img.src=articlesData[articlesData.length-i-1].img;
     var preview = articles[i].getElementsByTagName('P')[0]
     preview.innerHTML = articlesData[articlesData.length-i-1].preview;
     var button = articles[i].getElementsByTagName('BUTTON')[0]
     button.id=articlesData[articlesData.length-i-1].id;   
  }

var articlesList=document.getElementsByClassName('articles_list')[0];
for(var i=0; i<articlesData.length;i++){
  var li= document.createElement('LI');
  articlesList.appendChild(li);
  var subject= document.createElement('H3');
  li.appendChild(subject);
  subject.innerHTML=articlesData[i].subject;
  var button= document.createElement('BUTTON');
  li.appendChild(button);
  button.innerHTML="Learn More"


}

var buttons=document.getElementsByTagName('button');
for(var i=0;i< buttons.length;i++){
  buttons[i].addEventListener('click',function(){
  console.log(buttons[0]);
  button_id=buttons[0].id
  location.assign('articleTemplate.html');

  });
}

