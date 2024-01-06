import { userInformation,updateUserInformation } from "../data/userdata.js";
import { redirectToSite } from "./utils.js";


document.querySelector('.js-print-cv').addEventListener('click', () => {
    updateUserInformation();
    redirectToSite();
});

