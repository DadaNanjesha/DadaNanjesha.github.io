// Multi-step form functionality for the call booking section:
let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');

function showStep(step) {
    formSteps.forEach((el, index) => {
        el.classList.toggle('active', index === step);
    });
}

function nextStep() {
    if (currentStep < formSteps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

// Initialize first step
showStep(currentStep);
