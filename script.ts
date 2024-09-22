document.getElementById('resumeForm')!.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    generateResume(name, email, education, workExperience, skills);
});

function generateResume(name: string, email: string, education: string, workExperience: string, skills: string[]) {
    const resume = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> <span contenteditable="true" class="editable">${name}</span></p>
        <p><strong>Email:</strong> <span contenteditable="true" class="editable">${email}</span></p>
        <h3>Education</h3>
        <p contenteditable="true" class="editable">${education}</p>
        <h3>Work Experience</h3>
        <p contenteditable="true" class="editable">${workExperience}</p>
        <h3>Skills</h3>
        <p contenteditable="true" class="editable">${skills.join(', ')}</p>
    `;

    document.getElementById('resume')!.innerHTML = resume;

    document.querySelectorAll('.editable').forEach(element => {
        element.addEventListener('blur', saveChanges);
    });
}

function saveChanges(event: Event) {
    const updatedContent = (event.target as HTMLElement).innerText;
    console.log('Updated Content:', updatedContent);
    
}
