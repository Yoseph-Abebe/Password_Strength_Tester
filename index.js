const passwordInput = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const special = document.getElementById("special");
const numbers = document.getElementById("numbers");
const length = document.getElementById("length");
const strengthValue = document.getElementById("strengthValue");

passwordInput.addEventListener("input", updateStrength);
showPassword.addEventListener("change", togglePasswordVisibility);

function updateStrength() {
  const password = passwordInput.value;

  // Check for empty password
  if (password === "") {
    uppercase.style.fontWeight = "normal";
    lowercase.style.fontWeight = "normal";
    numbers.style.fontWeight = "normal";
    special.style.fontWeight = "normal";

    uppercase.style.color = "#000";
    lowercase.style.color = "#000";
    numbers.style.color = "#000";
    special.style.color = "#000";
    length.textContent = "0";
    strengthValue.textContent = "No password";
    strengthValue.className = "";
    return;
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  uppercase.style.fontWeight = hasUppercase ? "bold" : "normal";
  lowercase.style.fontWeight = hasLowercase ? "bold" : "normal";
  numbers.style.fontWeight = hasNumbers ? "bold" : "normal";
  special.style.fontWeight = hasSpecial ? "bold" : "normal";

  uppercase.style.color = hasUppercase ? "#4caf50" : "normal";
  lowercase.style.color = hasLowercase ? "#4caf50" : "normal";
  numbers.style.color = hasNumbers ? "#4caf50" : "normal";
  special.style.color = hasSpecial ? "#4caf50" : "normal";
  length.textContent = password.length;

  let strength = "Weak";
  let strengthClass = "weak";

  if (
    password.length >= 8 &&
    hasUppercase &&
    hasLowercase &&
    hasNumbers &&
    hasSpecial
  ) {
    strength = "Strong";
    strengthClass = "strong";
  } else if (
    password.length >= 6 &&
    (hasUppercase || hasLowercase) &&
    (hasNumbers || hasSpecial)
  ) {
    strength = "Medium";
    strengthClass = "medium";
  }

  strengthValue.textContent = strength;
  strengthValue.className = strengthClass;
}

function togglePasswordVisibility() {
  passwordInput.type = showPassword.checked ? "text" : "password";
}
