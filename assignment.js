// Function to create and display LinkedIn profile details
function displayLinkedInProfiledata() {
    // Creating an object to store LinkedIn profile details
    let linkedInProfile = {
        name: "Zeshan",
        age: 30,
        location: "Lahore",
        about: "Software Engineer with 3 years of experience in Wordpress development.",
        skills: ["JavaScript", "Bootstrap", "PHP", "CSS", "Html"],
        experience: {
            company: "autofocuss",
            role: "Web Developer",
            years: 2
        },
        education: "Bachelor's in Software Engineer",
        contact: {
            email: "zeshanwebnest",
            phone: "+923090155045"
        }
    };



    // Printing profile information
    console.log("LinkedIn Profile Date:");
    console.log("Name: ", linkedInProfile.name, "\n", "Age:",  linkedInProfile.age, "\n", "location:", linkedInProfile.location, "\n", "About:", linkedInProfile.about, "\n", "Skills:",  linkedInProfile.skills.join(", "), "\n", "Company:", linkedInProfile.experience.company, "\n", "Role:", linkedInProfile.experience.role , "\n", "Year:",   linkedInProfile.experience.years, "\n", "Education:",  linkedInProfile.education, "\n", "Contact:" ,  linkedInProfile.contact.email, "\n", "phone:", linkedInProfile.contact.phone);

}

// Call the function to display the profile
displayLinkedInProfiledata();
