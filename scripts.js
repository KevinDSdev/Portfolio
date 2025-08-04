

function GoToAbout(e){
    e.preventDefault();
  const target = document.querySelector('#About');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
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

function GoToHome(e){
 e.preventDefault();
  const target = document.querySelector('#HomeID');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
