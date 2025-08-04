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
document.getElementById('AboutScrollBTN2').addEventListener('click', function (e) {
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
document.getElementById('SkillsButtonID2').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#Skills');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});
document.getElementById('SkillsButtonID3').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#Skills');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

function toggleSidebar() {
  const sidebar = document.getElementById("SlideinMenuID");
  if (sidebar.style.left === "0%") {
    sidebar.style.left = "-100%";
  } else {
    sidebar.style.left = "0%";
  }
}
document.getElementById('Home').addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#HomeID');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});