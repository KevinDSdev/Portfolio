

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

function updateLoading() {
    if (progress < 100) {
        progress++;
        loadingText.textContent = progress + "%";
        progressBar.style.width = progress + "%";
        setTimeout(updateLoading, 50);
    } else {
        // Once loading is complete, fade out loader
        setTimeout(() => {
            loadingScreen.style.opacity = "0";
        }, 300);
        
        setTimeout(() => {
            loadingScreen.style.display = "none";
            content.classList.add("visible");
        }, 800);
    }
}

// Wait until everything (images, fonts, CSS) is fully loaded
window.onload = () => {
    // Finish progress instantly if it hasn't reached 100%
    const finishInterval = setInterval(() => {
        if (progress < 100) {
            progress++;
            loadingText.textContent = progress + "%";
            progressBar.style.width = progress + "%";
        } else {
            clearInterval(finishInterval);
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
            }, 300);
            setTimeout(() => {
                loadingScreen.style.display = "none";
                content.classList.add("visible");
            }, 800);
        }
    }, 20);
};


document.addEventListener("DOMContentLoaded", () => {
    updateLoading();
});
