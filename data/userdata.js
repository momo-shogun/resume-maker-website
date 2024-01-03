export let userInformation = JSON.parse(localStorage.getItem('userInformation'));

export let education = [{
    name: 'High School, Lucknow Public School, Lucknow.',
    year: '2018–2019',
    percent: '95%'
}, {
    name: 'Intermediate, DSB International Public School, Rishikesh.',
    year: '2020–2021',
    percent: '85%'
}, {
    name: 'BCA, Babasaheb Bhimrao Ambedkar University, Lucknow',
    year: '2021-Currently',
    percent: '7.9 CGPA'
}];

export let skills = [
    {
        name: 'languages',
        description: ['C++', 'Python', 'Racket', 'Java', 'Javascript']
    },
    {
        name: 'technologies',
        description: ['Bootstrap', 'Scss', 'NodeJS (basic)', 'Express (basic)', 'EJS (Medium)']
    },
    {
        name: 'coursework',
        description: [
            'Data structures and algorithms',
            'Networks',
            'Programming Languages A & B (SML, Racket)'
        ]
    }
];


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
export let certification = [
    'Certification 1: Certification Name 1',
    'Certification 1: Certification Name 1'
];

export let aboutMe = [
    'Driven by a fervent passion for Competitive Programming (CP)',
    'Dedicated to the art of web development, I find joy in the process of transforming ideas into functional and aesthetically pleasing websites.',
    'Love exploring different types of music to find comfort and inspiration.',
    'Avid follower of anime culture, appreciating storytelling, character development, and diverse genres within the medium.'
];


export function updateUserInformation(){
    userInformation.name = document.getElementById('name').value || 'Spooder Man';
    userInformation.phone = document.getElementById('phone').value || 1234567890;
    userInformation.address = document.getElementById('address').value || 'Your Street, Your City';
    userInformation.gmail = document.getElementById('gmail').value || 'SpooderMan1234@gmail.com';
    userInformation.linkedin = document.getElementById('linkedin').value || 'www.linkedin.com/in/spooderMan';
    userInformation.github = document.getElementById('github').value || 'https://github.com/spooder-man';
    userInformation.about = document.getElementById('about').value || 'Passionate and adaptive spooder engineer with a childhood interest in climbing walls, webbing, and sticking. Proven problemsolving skills through competitive programming, proficient in modern web development frameworks. Eager to contribute to the tech industry, and I bring quick learning and effective communication. Ready to leverage expertise for innovative software solutions in dynamic environments.';

    localStorage.setItem('userInformation',JSON.stringify(userInformation));
}
