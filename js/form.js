import { userInformation,updateUserInformation } from "../data/userdata.js";
import { redirectToSite } from "./utils.js";


document.getElementById('submitButton').addEventListener('click', () => {
    updateUserInformation();
    redirectToSite();
});