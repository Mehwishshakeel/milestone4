// get references to the form and display area
var resumeForm = document.getElementById("resumeform");
var resumeDisplayElement = document.getElementById("resumedisplay");
// Handle form submission
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // generate the resume or content dynamically
    var resumeHtml = "\n    <h2><b> Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:<b/><span contenteditable=\"true\"> ".concat(name, "</span></p>\n     <p><b>Email:<b/><span contenteditable=\"true\"> ").concat(email, "</span></p>\n      <p><b>phone:<b/><span contenteditable=\"true\"> ").concat(phone, "</span></p>\n      <h3>Education</h3>\n      <p contenteditable=\"true\">").concat(education, "</p>\n    \n      <h3>Experience</h3>\n      <pcontenteditable=\"true\">").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <pcontenteditable=\"true\">").concat(skills, "</p>\n\n    ");
    // display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing");
    }
});
