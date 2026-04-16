// Get modal elements
const aboutUsModal = document.getElementById('aboutUsModal');
const resultsModal = document.getElementById('resultsModal');

// Get buttons that open modals
const aboutUsButton = document.getElementById('aboutUsButton');
const resultsButton = document.getElementById('resultsButton');

// Get close buttons
const closeButtons = document.querySelectorAll('.close-button');

// Open "About Us" modal
aboutUsButton.addEventListener('click', () => {
  aboutUsModal.style.display = 'block';
});

// Open "Results" modal
resultsButton.addEventListener('click', () => {
  resultsModal.style.display = 'block';
});

// Close modals
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    aboutUsModal.style.display = 'none';
    resultsModal.style.display = 'none';
  });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === aboutUsModal) {
    aboutUsModal.style.display = 'none';
  } else if (e.target === resultsModal) {
    resultsModal.style.display = 'none';
  }
});