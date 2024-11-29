var form = document.getElementById('Resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // collect values
    var name = document.getElementById('name').value;
    var Email = document.getElementById('Email').value;
    var fname = document.getElementById('Father-name').value;
    var Phone = document.getElementById('Phone').value;
    var edication = document.getElementById('Education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var certifications = document.getElementById('certifications').value;
    // generate the resume content dynamically 
    var resumeContent = "\n    <h2><b>Resume</b></h2>\n   <h3>Personal Information </h>\n   <p><b> Name : </b> ".concat(name, "</p>\n   <p><b> Email : </b> ").concat(Email, "</p>\n   <p><b> Father's Name : </b> ").concat(fname, "</p>\n   <p><b> Phone : </b> ").concat(Phone, "</p>\n   <hr>\n   <h3>Education</h3>\n   <p>").concat(edication, "</p>\n   <hr>\n   <h3>Skills</h3>\n   <p>").concat(skills, "</p>\n   <hr>\n   <h3>Experience</h3>\n   <p>").concat(experience, "</p>\n   <hr>\n   <h3>Certifications</h3>\n   <p>").concat(certifications, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeContent;
    }
    else {
        console.error('resume-display element not found');
    }
});
