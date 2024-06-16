var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var confirmPasswordInput = document.getElementById("confirmPassword");
var submitBtn = document.getElementById("btn-login");

submitBtn.addEventListener("click", function() {
    let valid = true;

    if (!validationEmail()) {
        valid = false;
    }
    if (!validPassword()) {
        valid = false;
    }
    if (!validConfirmPassword()) {
        valid = false;
    }

    if(valid){
        savaData();
        reset();
        setupUI();
        window.location.href = "index.html";
    }
});

function validationEmail(){
    var emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailReg.test(emailInput.value)) {
        emailInput.style.border = "2px solid red";
        document.getElementById("invalidEmail").style.display = "block";
        return false;
    } else {
        emailInput.style.border = "2px solid #3a3a3d";
        document.getElementById("invalidEmail").style.display = "none";
        return true;
    }
}
function validPassword(){
    if (passwordInput.value.length < 8) {
        passwordInput.style.border = "2px solid red";
        document.getElementById("invalidPass").style.display = "block";
        return false;
    } else {
        passwordInput.style.border = "2px solid #3a3a3d";
        document.getElementById("invalidPass").style.display = "none";
        return true;
    }
}
function validConfirmPassword() {
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;
    if (password !== confirmPassword) {
        confirmPasswordInput.style.border = "2px solid red";
        document.getElementById("invalidConfirmPass").style.display = "block";
        return false;
    } else {
        confirmPasswordInput.style.border = "2px solid #3a3a3d";
        document.getElementById("invalidConfirmPass").style.display = "none";
        return true;
    }
}
function reset(){
    emailInput.value = "";
    passwordInput.value = "";
    confirmPasswordInput.value = "";
    emailInput.style.border = "1px solid rgba(17, 17, 17, 0.55)";
    passwordInput.style.border = "1px solid rgba(17, 17, 17, 0.55)";
    confirmPasswordInput.style.border = "1px solid rgba(17, 17, 17, 0.55)";
}

function savaData(){
     var savedEmail = localStorage.getItem("email");
     var savedPassword = localStorage.getItem("password");
     var finalEmail = savedEmail ? savedEmail : emailInput.value;
     var finalPassword = savedPassword ? savedPassword : passwordInput.value;
     localStorage.setItem("email", finalEmail);
     localStorage.setItem("password", finalPassword);
}