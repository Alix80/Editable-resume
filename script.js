document.getElementById('resumeForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value.split(',');
    generateResume(name, email, education, workExperience, skills);
});
function generateResume(name, email, education, workExperience, skills) {
    var resume = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> <span contenteditable=\"true\" class=\"editable\">".concat(name, "</span></p>\n        <p><strong>Email:</strong> <span contenteditable=\"true\" class=\"editable\">").concat(email, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\" class=\"editable\">").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\" class=\"editable\">").concat(workExperience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\" class=\"editable\">").concat(skills.join(', '), "</p>\n    ");
    document.getElementById('resume').innerHTML = resume;
    document.querySelectorAll('.editable').forEach(function (element) {
        element.addEventListener('blur', saveChanges);
    });
}
function saveChanges(event) {
    var updatedContent = event.target.innerText;
    console.log('Updated Content:', updatedContent);
}
