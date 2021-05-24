/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "",
  title: "Hey !,I'm Sahil",
  subTitle: emoji(
    "A Passionate Full Stack Software Developer,Detailed oriented,Responsible,& commited as an engineer 🚀 and  having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Expressjs and some other awesome libraries and frameworks🤘🤘"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sahirat",
  linkedin: "https://www.linkedin.com/in/sahil-singh-rathore-20297b202/",
  gmail: "sr7933960@gmail.com",
  facebook:"https://www.facebook.com/sahil.rathore.393950/",
  stackoverflow: "https://stackoverflow.com/users/13711502/sahil-rathore-rathore",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do 🔔",
  subTitle: "⭐Creative Software Developer🚀 Who Wants to Explore Every Tech",
  skills: [
    emoji(
      "⚡ Develop highly Responsive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase ,Netlify and Azure Devops "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Dr Kiran Saujiya Academy",
      logo: require("./assets/images/kiran.png"),
      subHeader: "Intermediate From PCM",
      duration: "April 2018 - April 2019",
      desc: "Get Top 5 Ranked Position in CBSE Board Exam",
      descBullets: [
        "In Starting I have All the Basics of Programming Language Like C++ and SQL.",
        "Another Have Great Knowledge of Maths Concept like Sets , Relation , Probability ,Statistics , Differentiation , and Integration."
      ]
    },
    {
      schoolName: "Rama University",
      logo: require("./assets/images/rama.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2019 - May 2023",
      desc:
        "Top Ranker in All Semester Exam and All over the Exam Pattern.",
      descBullets: ["Fav Topics Like OOPS,DSA, OS ,CN ,RDBMS,etc."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design 📄", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend ✡",
      progressPercentage: "60%"
    },
    {
      Stack: "Logical Thinking & Programming 💭",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Lenskills",
      companylogo: require("./assets/images/lenskills.jpg"),
      date: "June 2019 – Present",
      desc:
        "I am currently working with Lenskills as a junior web developer.I am very glad to be part of such community.",
      descBullets: [
        "Frontend using REACT",
        "Backend using Node Express and Mongodb"
      ]
    },
    {
      role: "Free Lancer Developer",
      company: "Fiverr",
      companylogo: require("./assets/images/fiverr.jpg"),
      date: "May 2020 – present",
      desc:
        "I am also provide you to assign me as a free Lancer"
    },
    {
      role: "Backend Developer Intern",
      company: "WittyMindsTechnologies",
      companylogo: require("./assets/images/witty.jpg"),
      date: "Jan 2020 – Sep 2020",
      desc:
        "It's Be the Great time when I am working with WittyMindsTechnologies. I Learn a alot from there that will enhance my Web skills as a developer."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects😃 + 💻 + 🧠",
  subtitle: "SOME PROJECTS THAT WILL ENHANCE MY SKILLS AT STARTING",
  projects: [
    {
      image: require("./assets/images/coron.png"),
      projectName: "Corono Website",
      projectDesc: "This is the Website which begins my carrier as Web developer using HTML,CSS,PHP,MYSQL,etc",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://covid19.lenskills.com/index.php"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/global.gif"),
      projectName: "COVID 19 Global Map",
      projectDesc: "Fully React js and Node js Project using COVID API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://covid19globalmap-bysahirat.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bed.png"),
      projectName: "COBeds",
      projectDesc: "Beds Availability Website which tracks of all hospitals beds availability using HTML,CSS,JavaScript,etc",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://co-bed19.netlify.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "HackerRank ",
      subtitle:
        "Five Star🌟 Rankings in HackerRank Coding Problems using JAVA",
      image: require("./assets/images/download.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://smallpdf.com/shared#st=d57648e3-2493-4f27-9e4d-00294892d078&fn=download+%281%29.png&ct=1621830039197&tl=share-document&rf=link"
        },
        {
          name: "Award Letter",
          url:
            "https://www.hackerrank.com/sr7933960?hr_r=1"
        },
     
      ]
    },
    {
      title: "Artificial intelligence",
      subtitle:
        "Completed a Course on AI in Accenture Foundation like FUTURELEARN",
      image: require("./assets/images/accen.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://smallpdf.com/shared#st=4cdc9374-86fd-4bf3-a7bc-de8266709d92&fn=artificial-intelligence_certificate_of_achievement_0qn7mip.pdf&ct=1621830093917&tl=share-document&rf=link"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from GYMNASIUM for PWA Web App Development",
      image: require("./assets/images/Gyman.png"),
      footerLink: [
        { name: "Certification", url: "https://smallpdf.com/shared#st=89c696be-6128-4599-92b8-29978b2569a3&fn=Moder+Web+Design.pdf&ct=1621830773480&tl=share-document&rf=link"},
       
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs💜",
  subtitle:
    "With Skills for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://github.com/settings/profile",
      title: "Why JavaScript is Best for me ?",
      description:
        "As I want to be a MERN Stack Developer.So this modern era of Javascript Gives us a complete Package of both frontend and Backend"
    },
    {
      url: "https://github.com/sahirat/DSA-Aim-to-1000-Question",
      title: "AIM to DSA 1000 Questions ?",
      description:
        "for the Interview Purposes , we need to have good DSA Skills. So for this i Started a Course in which i have a bunch of important question from diff. companies .Check my repo. on github"
    },
    {
      url: "https://www.youtube.com/channel/UCxZASNlZ_iet8BNuRIBPYBw",
      title: "Why I am in Youtube ?",
      description:
        "As Everyone Know that the next era of this world will move to digitally in future .So For the PartTime Purposes I will Start a Gaming Channel on youtube."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

// Podcast Section


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss any StartUp  or Project or just want to say hi? My Inbox is open for all.",
  number: "+91-6398194448",
  email_address: "sr7933960@gmail.com"
};

// Twitter Section


export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,

};
