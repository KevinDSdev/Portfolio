

function GoToAbout(e){
    e.preventDefault();
  const target = document.querySelector('#About');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function GoToHome(e){
    e.preventDefault();
  window.location.href = './index.html';;
}

function GoToContact(e){
    e.preventDefault();
  window.location.href = './Contact.html';;
}

function GoToSKills(e){
   e.preventDefault();
  const target = document.querySelector('#Skills');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}



function toggleSidebar() {
  const sidebar = document.getElementById("SlideinMenuID");
  if (sidebar.style.left === "0%") {
    sidebar.style.left = "-100%";
  } else {
    sidebar.style.left = "0%";
  }
}
function GoToLink(e, url) {
  e.preventDefault();
  window.location.href = url;
}
function GoToProjs(e) {
  e.preventDefault();
  window.location.href = './Projects.html';;
}




