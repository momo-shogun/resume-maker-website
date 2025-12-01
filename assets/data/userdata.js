export let userInformation = JSON.parse(localStorage.getItem('userInformation')) || {
    name: '',
    phone: '',
    address: '',
    gmail: '',
    linkedin: '',
    github: '',
    about: ''
};


export let education = JSON.parse(localStorage.getItem('education')) || [];

export let skills = JSON.parse(localStorage.getItem('skills')) || [];


export let projects = JSON.parse(localStorage.getItem('projects')) || [];

export let certification = JSON.parse(localStorage.getItem('certification')) || [];



export let aboutMe = JSON.parse(localStorage.getItem('aboutMe')) || [];


export function updateUserInformation() {
    localStorage.removeItem('skills');
    localStorage.removeItem('education');
    localStorage.removeItem('certification');
    localStorage.removeItem('aboutMe');
    localStorage.removeItem('projects');
    skills = [];
    education = [];
    certification = [];
    aboutMe = [];
    projects = [];

    // Initialize userInformation if it doesn't exist
    if (!userInformation) {
        userInformation = {
            name: '',
            phone: '',
            address: '',
            gmail: '',
            linkedin: '',
            github: '',
            about: ''
        };
    }

    userInformation.name = document.getElementById('name').value || '';
    userInformation.phone = document.getElementById('phone').value || '';
    userInformation.address = document.getElementById('address').value || '';
    userInformation.gmail = document.getElementById('gmail').value || '';
    userInformation.linkedin = document.getElementById('linkedin').value || '';
    userInformation.github = document.getElementById('github').value || '';
    userInformation.about = document.getElementById('about').value || '';
    localStorage.setItem('userInformation', JSON.stringify(userInformation));

    //skills
    let inputTitles = document.querySelectorAll('.js-input-title');
    let inputDescriptions = document.querySelectorAll('.js-input-description');

    for (let i = 0; i < inputTitles.length; i++) {
        let skillName = inputTitles[i].value;
        let skillDescription = inputDescriptions[i].value;
        if (skillName) {
            let temp = {
                name: skillName,
                description: skillDescription

            }
            skills.push(temp);
        }
    }
    localStorage.setItem('skills', JSON.stringify(skills));

    //education
    let schoolName = document.querySelectorAll('.js-school-name');
    let schoolStart = document.querySelectorAll('.js-school-start');
    let schoolEnd = document.querySelectorAll('.js-school-end');
    let schoolGrade = document.querySelectorAll('.js-school-grade');

    for (let i = 0; i < schoolName.length; i++) {
        let tempschoolName = schoolName[i].value;
        let tempschoolStart = schoolStart[i].value;
        let tempschoolEnd = schoolEnd[i].value;
        let tempschoolGrade = schoolGrade[i].value;

        if (tempschoolName) {
            let temp = {
                name: tempschoolName,
                year: `${tempschoolStart} to ${tempschoolEnd}`,
                percent:tempschoolGrade
            }
            education.push(temp);
        }
    }
    localStorage.setItem('education', JSON.stringify(education));

    //Projects 
    let projectTitles = document.querySelectorAll('.proj_title');
    let projectDescriptions = document.querySelectorAll('.proj_description');

    for (let i = 0; i < projectTitles.length; i++) {
        let projTitle = projectTitles[i].value;
        let projDescription = projectDescriptions[i].value;
        if (projTitle) {
            let temp = {
                name: projTitle,
                description: '',
                details: projDescription || '',
                madeWith: ''
            }
            projects.push(temp);
        }
    }
    localStorage.setItem('projects', JSON.stringify(projects));

    //Certifications
    let certificate = document.querySelectorAll('.js-certificate');

    for (let i = 0; i < certificate.length; i++) {
        let tempCertificate = certificate[i].value;
        console.log(tempCertificate);
        if (tempCertificate) {
            certification.push(tempCertificate);
        }
    }
    localStorage.setItem('certification', JSON.stringify(certification));

    //Interests
    let interest = document.querySelectorAll('.js-interest');

    for (let i = 0; i < interest.length; i++) {
        let tempinterest = interest[i].value;
        console.log(tempinterest);
        if (tempinterest) {
            aboutMe.push(tempinterest);
        }
    }
    localStorage.setItem('aboutMe', JSON.stringify(aboutMe));
}