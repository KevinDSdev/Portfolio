function SubmitContact(e){
    e.preventDefault();
    const Name = document.getElementById('NameInput');
    const Email = document.getElementById('EmailINput');
    const Other = document.getElementById('OtherInput');

    alert(`Succesfully Submited \nName: ${Name.value}\nEmail: ${Email.value}\nMessage: ${Other.value}`);

    location.reload();
    
}