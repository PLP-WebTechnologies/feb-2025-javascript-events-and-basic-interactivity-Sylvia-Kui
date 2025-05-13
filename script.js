// 1. Button Click & Double-Click
const colorButton = document.getElementById('colorButton');
const clickText = document.getElementById('clickText');

colorButton.addEventListener('click', () => {
  colorButton.style.backgroundColor = 'lightgreen';
});

clickText.addEventListener('dblclick', () => {
  alert('🎉 You double-clicked! Secret unlocked.');
});

// 2. Tab Switch
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabNum = tab.dataset.tab;
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(`tab${tabNum}`).classList.remove('hidden');
  });
});

// 3. Form Validation
const form = document.getElementById('signupForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email.includes('@')) {
    feedback.textContent = 'Invalid email address';
    return;
  }

  if (password.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters';
    return;
  }

  feedback.style.color = 'green';
  feedback.textContent = 'Form submitted successfully!';
});

// Real-time Feedback
passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = 'Password too short';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Good password!';
    feedback.style.color = 'green';
  }
});
