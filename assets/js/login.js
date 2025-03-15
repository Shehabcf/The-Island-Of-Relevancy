document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = document.getElementById("username").value.trim();
        let password = document.getElementById("password").value.trim();
        let errorMessage = document.getElementById("errorMessage");

        if (username === "" || password === "") {
            errorMessage.textContent = "❌ You must acknowledge The Tribal Chief!";
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = "❌ Your loyalty must be stronger! (Min 6 characters)";
            return;
        }

        errorMessage.style.color = "#0f0";
        errorMessage.textContent = "✅ Welcome to The Bloodline!";
        
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 2000);
    });
});
