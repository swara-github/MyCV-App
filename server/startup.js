import {
  Meteor
} from 'meteor/meteor';
//import './public/collection.js';

Meteor.startup(() => {
  // code to run on server at startup
  //define object here
  const userProfile = {

    firstName: "Swaranjali",
    lastName: "Panhalkar",
    experience: [{
        post: "Systems Engineer",
        company: "Infosys",
        project: "Proctor & Gamble",
        role: "Complete work in a timely and accurate manner while providing exceptional customer service. Collaborate and partner with other areas of IT to fulfill business/customer/partner needs & requests",
        duration: "JAN 2019 - PRESENT,  PUNE"
      },
      {
        post: "Senior operations Executive",
        company: "Infosys",
        project: "Goldman Sachs",
        role: "Supported, maintained multiple in-house legacy and contemporary software for Goldman Sachs (client). Primary and deep analysis and code fix of all the RHEL / cloud migration oriented issues. Automated many of the time consuming tasks by reusing / reimplementation of available code.Involved in BCP(Busniess Continuity Plan) Exercises that pertain to hot swap/Migration from Primary to Secondary servers.,validate the disaster recovery plans of the firm,provide feedback to stakeholders on the issues identified and track these issues to closure",
        duration: "AUG 2015 - Dec 2018, BANGALORE"

      }
    ],

    education: [{
        clg: "BITS, Pilani", 
        degree: "M.Sc  in Information Technology (WILP) ",
        gpa: "Ongoing",
        year: " 2017 -  2019, BANGALORE"
      },
      {
        clg: "Birla College of Arts,Science & Commerce  ", 
                degree: "Bsc.  Information Systems ",
        gpa: "6.32",
        year: "2012 -  2015, MUMBAI"

      },
      {
        clg: "Birla College of Arts,Science & Commerce  ",
        degree: "Pre University- PCMB",
        gpa: "73%",
        year: "2012, MUMBAI"

      },
      {
        clg: "Ideal English High School", 
        degree: "High School",
        gpa: "90%",
        year: "2010, MUMBAI"

      }
    ],
    skills: [{
        text: "Expertise in JavaScript and HTML"
      },
      {
        text: "Knowledge of web standards and Unix/Linux",

      },
       {
        text: "Good technical writing and documentation skills"
      },

      {
        text:"Adaptable; able to adapt to changing business requirements and react quickly"
      }
    ],
    interests: [{
      text: "Apart from being a web developer, I enjoy most of my time being outdoors. I enjoy trekking,camping."
    },
    {
      text:"When forced indoors, I follow a number of action and fiction genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world."
    }

   ],
    awards: [
      {
        name:"Cybersecurity Champion training level",
        year:2019,
        place:"Infosys"
  
      },
      {
        name:"Certified as ServiceNow Administrator",
        year:2019,
        place:"Infosys"
  
      },
      {
        name:"Received multiple nominations and appreciations for project design,execution and performance for developing applications in short span of time",
        year:2018,
        place:"Infosys"
  
      },
      {
      name: "Most valuable player within the team ",
      year: 2017,
      place: "Infosys"
    }    
    
  
  ]


  }
  if (!Resume.findOne()) {
  
    Resume.insert(userProfile);

  }
  Meteor.publish('resume', function () {
    return Resume.find();
  });


});