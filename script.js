// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillsElement) {
        console.error("One or more elements are missing");
        return;
    }
    var name = nameElement.value;
    var email = emailElement.value;
    var phone = phoneElement.value;
    var education = educationElement.value;
    var experience = experienceElement.value;
    var skills = skillsElement.value;
    var resumeOutput = "\n        <h2>Resume</h2>\n\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n    \n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n    \n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    \n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    var resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    }
    else {
        console.error("The resume output element is missing");
    }
}
// Attach event listeners
function attachEventListeners() {
    var formElement = document.getElementById("resumeForm");
    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
}
// Initialize the script
attachEventListeners();
