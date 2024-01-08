export let userInformation = JSON.parse(localStorage.getItem('userInformation'));


export let education = JSON.parse(localStorage.getItem('education')) || [];

export let skills = JSON.parse(localStorage.getItem('skills')) || [];


export let projects = [
    {
        name: 'tindog',
        description: 'A Dating Website For Dogs',
        details: 'Tindog, a playful website crafted in my early programming days. Offers a humorous take on a dog dating platform. Featuring interactive elements and vibrant design.',
        madeWith: 'HTML, CSS, and Bootstrap.'
    },
    {
        name: 'Course Website',
        description: '',
        details: 'Inspired by platforms like Coursera, is a comprehensive online learning hub.',
        madeWith: 'HTML, CSS, JavaScript, Next.js, Node.js, and EJS.'
    }
];

export let certification = JSON.parse(localStorage.getItem('certification')) || [];



export let aboutMe = JSON.parse(localStorage.getItem('aboutMe')) || [];


export function updateUserInformation() {
    localStorage.removeItem('skills','education','certificate','aboutMe');
    skills = [];
    education = [];
    certification = [];
    aboutMe = [];

    userInformation.name = document.getElementById('name').value || 'Albert Gomega';
    userInformation.phone = document.getElementById('phone').value || 1234567890;
    userInformation.address = document.getElementById('address').value || 'Your Street, Your City';
    userInformation.gmail = document.getElementById('gmail').value || 'SpooderMan1234@gmail.com';
    userInformation.linkedin = document.getElementById('linkedin').value || 'www.linkedin.com/in/spooderMan';
    userInformation.github = document.getElementById('github').value || 'https://github.com/spooder-man';
    userInformation.about = document.getElementById('about').value || 'Passionate and adaptive spooder engineer with a childhood interest in climbing walls, webbing, and sticking. Proven problemsolving skills through competitive programming, proficient in modern web development frameworks. Eager to contribute to the tech industry, and I bring quick learning and effective communication. Ready to leverage expertise for innovative software solutions in dynamic environments.';
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