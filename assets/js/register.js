document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");
    let registerForm = document.getElementById("registerForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();
            let errorMessage = document.getElementById("errorMessage");

            if (username === "" || password === "") {
                errorMessage.textContent = "❌ Please enter username and password!";
                return;
            }

            if (password.length < 6) {
                errorMessage.textContent = "❌ Password must be at least 6 characters!";
                return;
            }

            errorMessage.style.color = "#0f0";
            errorMessage.textContent = "✅ Login successful!";
            setTimeout(() => { window.location.href = "dashboard.html"; }, 2000);
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            let username = document.getElementById("username").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirm-password").value.trim();
            let errorMessage = document.getElementById("errorMessage");

            if (username === "" || email === "" || password === "" || confirmPassword === "") {
                errorMessage.textContent = "❌ All fields are required!";
                return;
            }

            if (!email.includes("@") || !email.includes(".")) {
                errorMessage.textContent = "❌ Please enter a valid email!";
                return;
            }

            if (password.length < 6) {
                errorMessage.textContent = "❌ Password must be at least 6 characters!";
                return;
            }

            if (password !== confirmPassword) {
                errorMessage.textContent = "❌ Passwords do not match!";
                return;
            }

            errorMessage.style.color = "#0f0";
            errorMessage.textContent = "✅ Registration successful!";
            setTimeout(() => { window.location.href = "login.html"; }, 2000);
        });
    }
});
