document.addEventListener('DOMContentLoaded', () => {
    const faqForm = document.getElementById('faq-form');
    const faqQuestionInput = document.getElementById('faq-question');
    const faqAnswerInput = document.getElementById('faq-answer');
    const faqSection = document.getElementById('faq-section');
  
    // Function to render FAQ items dynamically
    function renderFAQ(faq) {
      const faqItem = document.createElement('div');
      faqItem.classList.add('faq-item');
      faqItem.setAttribute('data-id', faq.id);
  
      // FAQ Title and Content
      faqItem.innerHTML = `
        <div class="faq-title">
          ${faq.question}
          <span class="icon">+</span>
          <button class="update-btn">Update</button>
          <button class="delete-btn">Delete</button>
        </div>
        <div class="faq-content">${faq.answer}</div>
      `;
  
      // Event listener for toggling content visibility
      const faqTitle = faqItem.querySelector('.faq-title');
      const faqContent = faqItem.querySelector('.faq-content');
      faqTitle.addEventListener('click', () => {
        const isOpen = faqContent.classList.contains('open');
        faqContent.classList.toggle('open', !isOpen);
        faqContent.style.maxHeight = isOpen ? '0' : `${faqContent.scrollHeight}px`;
        faqTitle.classList.toggle('active', !isOpen);
        faqTitle.querySelector('.icon').textContent = isOpen ? '+' : '-';
      });
  
      // Event listener for the delete button
      const deleteBtn = faqItem.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        faqSection.removeChild(faqItem);
      });
  
      // Event listener for the update button
      const updateBtn = faqItem.querySelector('.update-btn');
      updateBtn.addEventListener('click', () => {
        faqQuestionInput.value = faq.question;
        faqAnswerInput.value = faq.answer;
        faqForm.addEventListener('submit', (e) => {
          e.preventDefault();
          faq.question = faqQuestionInput.value;
          faq.answer = faqAnswerInput.value;
          faqItem.querySelector('.faq-title').textContent = faqQuestionInput.value;
          faqItem.querySelector('.faq-content').textContent = faqAnswerInput.value;
          faqContent.classList.remove('open');
          faqContent.style.maxHeight = '0';
        }, { once: true });
      });
  
      faqSection.appendChild(faqItem);
    }
  
    // Handle adding new FAQ
    faqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newFAQ = {
        id: Date.now(),
        question: faqQuestionInput.value,
        answer: faqAnswerInput.value
      };
      renderFAQ(newFAQ);
      faqQuestionInput.value = '';
      faqAnswerInput.value = '';
    });
  });