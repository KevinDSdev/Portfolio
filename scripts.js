document.getElementById('LearnMoreButtonID').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#About');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
document.getElementById('AboutScrollBTN').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#About');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
document.getElementById('SkillsButtonID').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#Skills');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});


