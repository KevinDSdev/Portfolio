function SubmitContact(event) {
  event.preventDefault();

  
  const name = document.getElementById("NameInput").value.trim();
  const email = document.getElementById("EmailINput").value.trim();
  const other = document.getElementById("OtherInput").value.trim();


  if (name === "" || email === "" || other === "") {
    alert("⚠️ Please fill out all fields before submitting.");
    return; 
  }


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }


  document.getElementById("PopupID").classList.add("show");
}

function closePopup() {
  document.getElementById("PopupID").classList.remove("show");
}