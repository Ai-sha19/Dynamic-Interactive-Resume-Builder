// Function to handle form submission
function handleFormSubmit(event: Event): void {
    event.preventDefault();

    const nameElement = document.getElementById("name") as HTMLInputElement | null;
    const emailElement = document.getElementById("email") as HTMLInputElement | null;
    const phoneElement = document.getElementById("phone") as HTMLInputElement | null;
    const educationElement = document.getElementById("education") as HTMLTextAreaElement | null;
    const experienceElement = document.getElementById("experience") as HTMLTextAreaElement | null;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement | null;

    if (!nameElement || !emailElement || !phoneElement || !educationElement || !experienceElement || !skillsElement) {
        console.error("One or more elements are missing");
        return;
    }

    const name = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    const resumeOutput = `
        <h2>Resume</h2>

        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
    
        <h3>Education</h3>
        <p>${education}</p>
    
        <h3>Experience</h3>
        <p>${experience}</p>
    
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    const resumeOutputElement = document.getElementById("resumeOutput");
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error("The resume output element is missing");
    }
}

// Attach event listeners
function attachEventListeners(): void {
    const formElement = document.getElementById("resumeForm");

    if (formElement) {
        formElement.addEventListener("submit", handleFormSubmit);
    }
}

// Initialize the script
attachEventListeners();
