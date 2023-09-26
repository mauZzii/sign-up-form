let signupform = document.getElementById("signup-form");

let password = document.getElementById("password");
let confirmPassword = document.getElementById("password-confirm");
let passwordError = document.getElementById("pw-error");
let passConfError = document.getElementById("pwc-error");


signupform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (password.value === "" || confirmPassword.value === "") {
        passwordError.textContent = "Please enter password twice"
        passConfError.textContent = "";
    } else if (password.value !== confirmPassword.value) {
        passwordError.textContent = "Password does not match";
        passConfError.textContent = "Password does not match";
        return false;
    } else {
        passwordError.textContent = "";
        passConfError.textContent = "";
        return true;
    };
});