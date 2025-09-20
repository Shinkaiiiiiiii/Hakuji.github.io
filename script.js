const question = document.getElementById('question');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// When Yes is clicked
yesBtn.addEventListener('click', () => {
  question.textContent = 'I knew you would forgive me!';
  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
});

// Make the "No" button move randomly
noBtn.addEventListener('mouseover', () => {
  const x = Math.floor(Math.random() * 300);
  const y = Math.floor(Math.random() * 300);
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 'px';
});
