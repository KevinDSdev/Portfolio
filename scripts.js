

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

function GoToTop(e) {
    if (e) e.preventDefault(); // only prevent default if event exists
    const target = document.getElementById('Home');
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}


let progress = 0;
const loadingText = document.getElementById("loading-text");
const progressBar = document.querySelector(".progress-bar");
const loadingScreen = document.getElementById("loading-screen");
const content = document.getElementById("content");

let pageLoaded = false;


function updateLoading() {
    if (progress < 90) { 
        progress++;
        loadingText.textContent = progress + "%";
        progressBar.style.width = progress + "%";
        setTimeout(updateLoading, 30); 
    } else if (pageLoaded) {
        finishLoading();
    } else {
        
        setTimeout(updateLoading, 100);
    }
}


function finishLoading() {
    const finishInterval = setInterval(() => {
        if (progress < 100) {
            progress++;
            loadingText.textContent = progress + "%";
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(finishInterval);
            loadingScreen.style.opacity = "0";
            setTimeout(() => {
             
                loadingScreen.style.display = "none";
                content.classList.add("visible");
                 GoToTop();
            }, 500);
        }
    }, 20);
}


document.addEventListener("DOMContentLoaded", () => {
    updateLoading();
});


window.onload = () => {
    pageLoaded = true;
};

