
document.addEventListener("DOMContentLoaded", function () {
    function submitSubscription(event) {
        event.preventDefault();
        const questionsSection = document.getElementById('questions');
        const questionsSubmitted = document.getElementById('questions-submitted');
        const email = emailInput.value.trim();
        if (!validEmail(email)) {
            alert("Please enter a valid email");
        }
        if (validEmail(email)) {
            const emailData = {
                email: email
            };
            fetch("https://ih-json-server-gh0h.onrender.com/subscriptions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(emailData)
            })
                .then(response => response.json())
                .then(data => {
                    console.log("Success: ", data);

                })
                .catch((error) => {
                    console.log("Error: ", error);
                });
            questionsSection.classList.add('hidden');
            questionsSubmitted.classList.remove('hidden');

        }
    }

    function validEmail(email) {
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return emailRegex.test(email);
    }

    const subscribeButton = document.getElementById("subscribe-button");
    subscribeButton.addEventListener("click", submitSubscription);
    const emailInput = document.getElementById('email');
    emailInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            submitSubscription(event);
        }
    });
});
