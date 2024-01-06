import { userInformation, education, skills, projects, aboutMe, certification } from "../data/userdata.js";

import { capitalizeFirstLetter } from "../js/utils.js"

console.log(userInformation);

let header = document.querySelector('.js-header');

header.innerHTML =
    `<div class="left-header">
    <div>Address: ${userInformation.address}</div>
    <div>${userInformation.gmail}</div>
    </div>

    <div class="username">
    <div class="name">${userInformation.name}</div>
    <div class="number">Phone Number - ${userInformation.phone}</div>
    </div>

    <div class="right-header">
    <a href="https://github.com/yourusername" target="_blank">${userInformation.github}</a>
    <a href="https://www.linkedin.com/in/yourusername" target="_blank">${userInformation.linkedin}</a>
    </div>`

let description = document.querySelector('.description');

description.innerHTML = userInformation.about;

let html = '';

education.forEach((item) => {
    html += `<div class="education-item">
                <span class="bullet">&#8226;</span>
                <span>${item.name}</span>
                <span class="year">${item.year}</span>
                <span>${item.percent}</span>
            </div>`;
});

document.querySelector('.js-education-item').innerHTML = html;

html = '';

skills.forEach((item) => {
    html += `<li class="category">
                <span class="bullet">&#8226;</span>
                <strong>${capitalizeFirstLetter(item.name)}</strong>: ${item.description}.
            </li>
            `;
})

document.querySelector('.js-skill-list').innerHTML = html;

html = '';

projects.forEach((item) => {
    html += `<p class="project-item">${capitalizeFirstLetter(item.name)} ${item.description}:</p>
                <p class="project-detail"><strong> - </strong> ${capitalizeFirstLetter(item.details)}</p>
                <p class="project-detail"><strong> - </strong>Utilized: ${item.madeWith}
            </p>`
})

document.querySelector('.js-project-details').innerHTML = html;

html = '';
aboutMe.forEach((item) => {
    html += `<div>
                <span class="bullet">&#8226;</span>
                ${item}
            </div>`
})
document.querySelector('.js-interest').innerHTML = html;


html = '';
certification.forEach((item) => {
    html += `<div>
                <span class="bullet">&#8226;</span>
                ${item}
            </div>`
})
document.querySelector('.js-certification').innerHTML = html;