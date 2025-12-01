import { userInformation,updateUserInformation,skills } from "../data/userdata.js";
import { redirectToSite } from "./utils.js";

// Wait for DOM to be fully loaded
function initForm() {
    // Print CV button
    const printBtn = document.querySelector('.js-print-cv');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            updateUserInformation();
            redirectToSite();
        });
    }

    // + add more section
    document.querySelectorAll('.js-add-btn').forEach(button => {
        button.addEventListener('click', () => {
            let addSection = button.dataset.addSection;
            let containerToAdd = document.querySelector(`.${addSection}`);
            
            if (!containerToAdd) {
                console.error(`Container with class ${addSection} not found`);
                return;
            }
            
            // Find the first data-repeat-container as template
            let template = containerToAdd.querySelector('.data-repeat-container');
            
            if (template) {
                // Clone the template
                let newContainer = template.cloneNode(true);
                
                // Clear all input values in the cloned container
                newContainer.querySelectorAll('input').forEach(input => {
                    input.value = '';
                });
                
                // Clear all textarea values if any
                newContainer.querySelectorAll('textarea').forEach(textarea => {
                    textarea.value = '';
                });
                
                // Append the cloned container to the section
                containerToAdd.appendChild(newContainer);
            } else {
                console.error('Template container not found');
            }
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initForm);
} else {
    // DOM is already loaded
    initForm();
}

// Event delegation for remove buttons
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-remove-btn')) {
      let containerToRemove = event.target.closest('.data-repeat-container');
      if (containerToRemove) {
        // Check if there's more than one container (don't remove the last one)
        let parentSection = containerToRemove.closest('[class*="js-"]');
        if (parentSection) {
          let allContainers = parentSection.querySelectorAll('.data-repeat-container');
          if (allContainers.length > 1) {
            containerToRemove.remove();
          } else {
            // If it's the last one, just clear the values instead
            containerToRemove.querySelectorAll('input').forEach(input => {
              input.value = '';
            });
            containerToRemove.querySelectorAll('textarea').forEach(textarea => {
              textarea.value = '';
            });
          }
        }
      }
    }
});
