import { userInformation,updateUserInformation } from "../data/userdata.js";
import { redirectToSite } from "./utils.js";


document.querySelector('.js-print-cv').addEventListener('click', () => {
    updateUserInformation();
    redirectToSite();
});

// + add more section
document.querySelectorAll('.js-add-btn').forEach(button => {

    let addSection = button.dataset.addSection;
    let containerToAdd = document.querySelector(`.${addSection}`);
    let html = containerToAdd.innerHTML;

    button.addEventListener('click', () => {
        containerToAdd.innerHTML += html;
    })
});

// Event delegation for remove buttons
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-remove-btn')) {
      let interestsSection = event.target.closest('.data-repeat-container');
      interestsSection.parentNode.removeChild(interestsSection);
    }
  });
