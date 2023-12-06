import {ScholarApplications} from './data/data.js'

document
  .getElementById("scholarshipForm")
  .addEventListener("submit", validateForm);
  
console.log(ScholarApplications)
function validateForm(event) {
    

    let fullName = document.getElementById('fullName').value;
    let studentNumber = document.getElementById('studentNumber').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let contactNumber = document.getElementById('contactNumber').value;
    let dateOfBirth = document.getElementById('dateOfBirth').value;
    let yearAndCourse = document.getElementById('yearAndCourse').value;
    let transferStudent = document.querySelector('input[name="transferStudent"]:checked').value;
    let schoolGraduated = document.getElementById('schoolGraduated').value;
    let guardianName = document.getElementById('guardianName').value;
    let guardianContact = document.getElementById('guardianContact').value;
    let essay = document.getElementById('essay').value;

    console.log(fullName)

    ScholarApplications.push({
        fullName: fullName, 
        studentNumber: studentNumber,
        address: address,
        email: email,
        contactNumber: contactNumber ,
        dateOfBirth: dateOfBirth,
        yearAndCourse: yearAndCourse,
        transferStudent: transferStudent,
        schoolGraduated: schoolGraduated,
        guardianName: guardianName,
        guardianContact: guardianContact,
        essay: essay,
    })

    localStorage.setItem("ScholarApplications" , JSON.stringify(ScholarApplications))
    console.log(ScholarApplications)
    alert('Form submitted successfully!');

    event.preventDefault();
}