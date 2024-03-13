document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const usernameRegex = /^[a-zA-Z0-9]+$/;
        const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]+$/;

        if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
            alert("Неверный формат имени пользователя или пароля");
            return;
        }

        fetch("http://localhost:5000/data.json")
            .then(response => response.json())
            .then(data => {
                const userData = data.users.find(user => user.username === username && user.password === password);
                if (userData) {
                    window.location.href = `/welcome.html?username=${encodeURIComponent(username)}`;
                } else {
                    alert("Неверное имя пользователя или пароль");
                }
            })
            .catch(error => console.error("Ошибка", error));
    });
});