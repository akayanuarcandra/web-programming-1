function validateFormSignUp() {
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    } else if (name.length < 3) {
        alert("Name length must be larger than or equal to 3");
        return false;
    } else if (password === "") {
        alert("Password must be filled out");
        return false;
    } else if (confirm_password === "") {
        alert("Confirm Password must be filled out");
        return false;
    } else if (email === "") {
        alert("Email must be filled out");
        return false;
    } else if (phone === "") {
        alert("Phone must be filled out");
        return false;
    } else if (password.length < 8) {
        alert("Password length must be larger than or equal to 8");
        return false;
    } else if (password !== confirm_password) {
        alert("Passwords don't match");
        return false;
    } else if (phone.length !== 11) {
        alert("Must be 11-digit phone number");
        return false;
    } else if (isNaN(phone)) {
        alert("Phone must be numbers");
        return false;
    } else if (!validateEmail(email)) {
        alert("Invalid email format");
        return false;
    } else {
        alert("Signed up successfully!");
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("verificationCanvas");
    const ctx = canvas.getContext("2d");
    const verificationCode = generateVerificationCode();
    drawVerificationCode(ctx, verificationCode);

    function generateVerificationCode() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let code = "";
        for (let i = 0; i < 4; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }
        return code;
    }

    function drawVerificationCode(ctx, code) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < code.length; i++) {
            const x = 20 + i * 20;
            const y = 20 + Math.random() * 5;
            const angle = Math.random() * Math.PI / 4 - Math.PI / 8;
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            ctx.font = "24px Arial";
            ctx.fillStyle = getRandomColor();
            ctx.fillText(code[i], 0, 0);
            ctx.restore();
        }
    }

    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

    window.validateForm = function() {
        const name = document.getElementById("name").value;
        const password = document.getElementById("password").value;
        const userCode = document.getElementById("verificationCode").value.toUpperCase();

        if (name == null || name === "") {
            alert("Please enter username!");
            return false;
        } else if (password == null || password === "") {
            alert("Please enter password!");
            return false;
        } else if (userCode === "" || userCode !== verificationCode) {
            alert("Invalid verification code!");
            return false;
        } else {
            return true;
        }
    };
});

function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}