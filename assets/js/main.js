// Smooth scrolling is handled by CSS (scroll-behavior: smooth)
// Multi-step form functionality for the call booking section:
let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');

function showStep(step) {
    formSteps.forEach((el, index) => {
        el.classList.toggle('active', index === step);
    });
}

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Increment the current step of the form and show the next step
 * @return {void}
 */
/******  28b9aa86-ec5f-4e3e-ae00-75bfeb5fb97b  *******/
function nextStep() {
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

// Initialize first step
showStep(currentStep);
