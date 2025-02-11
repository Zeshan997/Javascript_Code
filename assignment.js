// Function to create and display LinkedIn profile details
function displayLinkedInProfiledata() {
    // Creating an object to store LinkedIn profile details
    let linkedInProfile = {
        name: "Aliza Ali",
        Stack: "Experienced Full Stack Developer",
        location: "Rahim Yar Khan District, Punjab, Pakistan",
        universit: "Islamia University of BWP RYK Compus",
        currenr_company: "Mercury Sols",
        github_profile: "https://github.com/stackmasteraliza",
        followers: 3288,
        connection: 500,
        about: "I’ m a Full Stack Developer passionate about building user-centric websites and hybrid apps. My expertise spans Flutter, React Native, Laravel, and React.js, enabling me to craft sleek, responsive, and efficient web and mobile solutions. Whether it’s a MERN stack application or a Laravel-powered web project, I ensure that every creation blends functionality with a great user experience",
        skills: ["Mobile App Development", "Web Development", "Frontend and Backend Development", "CCross-Platform Development", "Responsive Web Design"],
        experience: {
            current_company: "Mercury Sols",
            role: "Full stack developer",
        },
        education: {
            degree: "Bachelor's in Software Engineer",
            grade:"3.97/4.00 CGPA",
        },
        certifications: {
            company: "Mercury Sols",
            award: "Mobile Application Development Internship",
            company2: "NAVTTC",
            award2: "National Certificate of Vocational Qualification in Information Technology(Web Designing and Developmen)"
        },
        Projects: {
            project_name1: "Al Noor Garden",
            project_name2: "Code Blendr"
        },
        Recommendations:{
            Burhan_Tahir: "Ustadify apps, and her expertise is unparalleled.  and robust Laravel backend solutions. Her attention to detail, problem-solving skills, and ability to deliver high-quality work on time make her a standout professional. Whether it’s developing sleek interfaces or integrating complex features, Aliza consistently goes above and beyond. I highly recommend her for any Mobile App or Laravel development project!",
            Sawaiz_Waqar_Chaudhry: "April 11, 2024, Sawaiz Waqar was Aliza’s clientApril With a strong command of front-end technologies and expertise in back-end development, Aliza consistently delivers exceptional work within timelines. Her collaborative nature and adept problem-solving skills make her an invaluable asset to any team. Aliza's dedication to excellence is evident in every project she undertakes, making her an ideal candidate for web development positions.",
        }
    };



    // Printing profile information
    console.log("LinkedIn Profile Date:");
    console.log("Name: ", linkedInProfile.name, "\n", "Age:", linkedInProfile.age, "\n", "location:", linkedInProfile.location, "\n", "About:", linkedInProfile.about, "\n", "Skills:", linkedInProfile.skills.join(", "), "\n", "Company:", linkedInProfile.experience.company, "\n", "Role:", linkedInProfile.experience.role, "\n", "Year:", linkedInProfile.experience.years, "\n", "Education:", linkedInProfile.education, "\n", "Contact:", linkedInProfile.contact.email, "\n", "phone:", linkedInProfile.contact.phone);

}

// Call the function to display the profile Dara
displayLinkedInProfiledata();
