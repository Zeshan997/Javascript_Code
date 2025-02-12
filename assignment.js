// Function to create and display LinkedIn profile details
function displayLinkedInProfiledata() {
  // Creating an object to store LinkedIn profile details
  let linkedInProfile = {
    banner:
      "https://www.linkedin.com/in/stackmasteraliza/overlay/background-image/",
    profile_pic: "https://www.linkedin.com/in/stackmasteraliza/overlay/photo/",
    name: "Aliza Ali",
    Stack:
      "Experienced Full Stack Developer | Mobile App & Website Development Specialist | Turning Ideas into Seamless Digital Experiences",
    location: "Rahim Yar Khan District, Punjab, Pakistan",
    currenr_company: "Mercury Sols",
    universit: "Islamia University of BWP RYK Compus",
    github_profile: "https://github.com/stackmasteraliza",
    followers: 3288,
    connection: 500,
    Job_preferences: {
        name: "Aliza Ali",
        availability: "is open to work",
        Job_titles: "Full Stack Developer · Mobile Application Developer · Laravel Developer",
        Location_types: {
             type1: "On-site",
             type2: "hybride",
             type3:"remote",
        },
        location_onsite: "Rahim Yar Khan District, Punjab, Pakistan",
        location_remote:  "Rahim Yar Khan District, Punjab, Pakistan",
        start_date: "Flexible, I am casually looking",
        Employment_types: "Full-time · Part-time · Contract · Temporary",
        Open_to_volunteering: {
            availability: "Aliza Ali is open to volunteering",
            Looking_for: {
                Education: "Science and Technology",

            },
            Services_provided: {
                Teaching: "Programming · Coding Experience · Flutter · Laravel",    
            },
            Locations: {
                countries: "United States · Pakistan · Canada",
            },
            Location_types: "remote",
        },
    },
    about:
      "I m a Full Stack Developer passionate about building user-centric websites and hybrid apps. My expertise spans Flutter, React Native, Laravel, and React.js, enabling me to craft sleek, responsive, and efficient web and mobile solutions. Whether it’s a MERN stack application or a Laravel-powered web project, I ensure that every creation blends functionality with a great user experience",
    skills: [
      "Mobile App Development",
      "Web Development",
      "Frontend and Backend Development",
      "CCross-Platform Development",
      "Responsive Web Design",
    ],
    Services_provided:{
       services: [
        "Web Development",
        "Mobile Application Development",
        "Training",
        "Android Development",
        "Software Testing",
        "iOS Development",
        "Custom Software Development",
        "Application Development",
        "Web Design",
        "Career Development Coaching"
    ]
    },
    experience: {
      current_company: "Mercury Sols",
      role: "Full stack developer",
    },
    education: {
      degree: "Bachelor's in Software Engineer",
      grade: "3.97/4.00 CGPA",
    },
    certifications: {
      company: "Mercury Sols",
      award: "Mobile Application Development Internship",
      company2: "NAVTTC",
      award2:
        "National Certificate of Vocational Qualification in Information Technology(Web Designing and Developmen)",
    },
    Projects: {
      project_name1: "Al Noor Garden",
      project_name2: "Code Blendr",
    },
    Recommendations: {
      Burhan_Tahir:
        "Ustadify apps, and her expertise is unparalleled.  and robust Laravel backend solutions. Her attention to detail, problem-solving skills, and ability to deliver high-quality work on time make her a standout professional. Whether it’s developing sleek interfaces or integrating complex features, Aliza consistently goes above and beyond. I highly recommend her for any Mobile App or Laravel development project!",
      Sawaiz_Waqar_Chaudhry:
        "April 11, 2024, Sawaiz Waqar was Aliza’s clientApril With a strong command of front-end technologies and expertise in back-end development, Aliza consistently delivers exceptional work within timelines. Her collaborative nature and adept problem-solving skills make her an invaluable asset to any team. Aliza's dedication to excellence is evident in every project she undertakes, making her an ideal candidate for web development positions.",
    },
  };

  // Printing profile information
  console.log("LinkedIn Profile Date:");
  console.log(
    "Name: ",
    linkedInProfile.name,
    "\n",
    "Profile" ,linkedInProfile.profile_pic,
    "\n",
    "stack", linkedInProfile.Stack,
    "\n",
    "location:",
    linkedInProfile.location,
    "\n",
    "About:",
    linkedInProfile.about,
    "\n",
    "Skills:",
    linkedInProfile.skills.join(", "),
    "\n",
    "Company:",
    linkedInProfile.experience.company,
    "\n",
    "Role:",
    linkedInProfile.experience.role,
    "\n",
    "Year:",
    linkedInProfile.experience.years,
    "\n",
    "Education:",
    linkedInProfile.education,
    "\n",
    "Contact:"
  );
}

// Call the function to display the profile Dara
displayLinkedInProfiledata();
