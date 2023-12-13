// Fonction pour générer un CAPTCHA
function generateCaptcha() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const captchaLength = 6;
    let captchaCode = "";
    for (let i = 0; i < captchaLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        captchaCode += characters.charAt(randomIndex);
    }
    document.getElementById("captchaOutput").textContent = captchaCode;
    document.getElementById("captchaInput").value = "";
    document.getElementById("result").textContent = "";
}

// Fonction pour vérifier le CAPTCHA
function checkCaptcha() {
    var inputCode = document.getElementById("captchaInput").value;
    var validCode = document.getElementById("captchaOutput").textContent;
    if (inputCode === validCode) {
        document.getElementById("result").textContent = "CAPTCHA Correct!";
    } else {
        document.getElementById("result").textContent = "CAPTCHA Incorrect. Veuillez réessayer.";
    }
}