document.addEventListener("DOMContentLoaded", function() {
    
    // 1. BUTTON ACTION - SCROLL TO CONTACT
    const btn = document.getElementById("contactBtn");
    const msg = document.getElementById("message");

    if(btn) {
        btn.addEventListener("click", function () {
            msg.innerText = "Thank you! Redirecting to contact... 😊";
            msg.style.color = "#ff416c";
            
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        });
    }

    // 2. CONTACT FORM VALIDATION
    const form = document.getElementById("contactForm");
    const formMsg = document.getElementById("formMessage");

    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("messageText").value;

            // Simple Validation
            if(name.trim() === "" || email.trim() === "" || message.trim() === "") {
                alert("Please fill in all fields!");
                return;
            }

            // Email Pattern
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailPattern.test(email)) {
                alert("Please enter a valid email address!");
                return;
            }

            // Success Display
            formMsg.innerText = `Asante sana ${name}! Message yako imetumwa.`;
            formMsg.style.color = "green";
            formMsg.style.fontWeight = "bold";

            alert("Form submitted successfully ✅");
            form.reset();
        });
    }
});