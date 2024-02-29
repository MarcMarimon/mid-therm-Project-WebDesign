document.addEventListener("DOMContentLoaded", function(){
function submitContact() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegex = /^\d{9}$/;

    if (!nameRegex.test(name)) {
        alert("Please enter a valid name");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email");
        return;
    }
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number");
        return;
    }
    if (!message) {
        alert("Please enter a message");
        return;
    }
    const contactData = {
        name: name,
        email: email,
        phone: phone,
        message: message
    };
    fetch("https://ih-json-server-gh0h.onrender.com/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(contactData)
    })
    .then (response => response.json())
    .then(data=>{
        console.log("Success: ", data);

    })
    .catch ((error) => {
        console.log("Error: ", error);
    });
    document.getElementById("contact").classList.add("hidden");
    document.getElementById("form-message").classList.remove("hidden");

}
    document.getElementById("submit").addEventListener("click",submitContact);
    document.querySelector(".contact-form").addEventListener("keypress", function(event){
        if(event.key === "Enter"){
            submitContact();
        }
    });
})