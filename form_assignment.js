
const passwordInput = document.getElementById("user_password");
const confirmInput = document.getElementById("confirm_password");
const match = document.getElementById("match");
const noErrorStyle = "1px solid green";
const errorStyle = "1px solid red";

passwordInput.addEventListener("keyup", () => {
    if (passwordInput.value === confirmInput.value) {
        passwordInput.style.border = noErrorStyle;
        confirmInput.style.border = noErrorStyle;
        match.style.visibility = "hidden"
    } else {
        match.style.visibility = "visible";
        passwordInput.style.border = errorStyle;
        confirmInput.style.border = errorStyle;
    };
});

confirmInput.addEventListener("keyup", () => {
    if (passwordInput.value === confirmInput.value) {
        passwordInput.style.border = noErrorStyle;
        confirmInput.style.border = noErrorStyle;
        match.style.visibility = "hidden"
    } else {
        match.style.visibility = "visible";
        passwordInput.style.border = errorStyle;
        confirmInput.style.border = errorStyle;
    };
});


