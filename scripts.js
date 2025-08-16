

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

let progress = 0;
const loadingText = document.getElementById("loading-text");
const progressBar = document.querySelector(".progress-bar");
const loadingScreen = document.getElementById("loading-screen");
const content = document.getElementById("content");

let pageLoaded = false;

// Update loader
function updateLoading() {
    if (progress < 90) { // Fake loading up to 90%
        progress++;
        loadingText.textContent = progress + "%";
        progressBar.style.width = progress + "%";
        setTimeout(updateLoading, 30); // adjust speed
    } else if (pageLoaded) {
        finishLoading();
    } else {
        // Wait until pageLoaded becomes true
        setTimeout(updateLoading, 100);
    }
}

// Finish loader when page is fully loaded
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
                content.classList.add("visible"); // easing via CSS
            }, 500);
        }
    }, 20);
}

// Start fake loading immediately
document.addEventListener("DOMContentLoaded", () => {
    updateLoading();
});

// Mark page as fully loaded when everything is ready
window.onload = () => {
    pageLoaded = true;
};

