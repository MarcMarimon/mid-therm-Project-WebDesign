function submitContact(){
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name && email && phone && message) {
        document.getElementById("contact").classList.add("hidden");
        document.getElementById("form-message").classList.remove("hidden");
    } else {
        alert("Please enter all required fields");
    }
}
document.getElementById("submit").addEventListener("click", submitContact);