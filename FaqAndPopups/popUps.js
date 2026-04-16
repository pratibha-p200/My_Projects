// Modal functionality
const buttons = document.querySelectorAll('button[data-modal]');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close-button');

// Get modal elements
const aboutUsModal = document.getElementById('aboutUsModal');
const resultsModal = document.getElementById('resultsModal');
const contactModal = document.getElementById('contactModal');

// Get buttons that open modals
const aboutUsButton = document.getElementById('aboutUsButton');
const resultsButton = document.getElementById('resultsButton');
const contactButton = document.getElementById('contactButton');

// Open modals based on button click
aboutUsButton?.addEventListener('click', () => {
  aboutUsModal.style.display = 'block';
});
resultsButton?.addEventListener('click', () => {
  resultsModal.style.display = 'block';
});
contactButton?.addEventListener('click', () => {
  contactModal.style.display = 'block';
});

// Close modals when clicking the close button
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    modals.forEach(modal => {
      modal.style.display = 'none';
    });
  });
});

// Close modals when clicking outside the modal content
window.addEventListener('click', (e) => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

// Open modals dynamically based on data-modal attribute
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
    }
  });
});