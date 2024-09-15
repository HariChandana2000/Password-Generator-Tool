document
  .getElementById("generate-password")
  .addEventListener("click", generatePassword);
document.querySelector(".copy").addEventListener("click", copyPassword);

function generatePassword() {
  const length = document.getElementById("password-length").value;
  const includeUppercase = document.getElementById("uppercase").checked;
  const includeLowercase = document.getElementById("lowercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let characterPool = "";

  if (includeUppercase) characterPool += uppercaseLetters;
  if (includeLowercase) characterPool += lowercaseLetters;
  if (includeNumbers) characterPool += numbers;
  if (includeSymbols) characterPool += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += characterPool.charAt(
      Math.floor(Math.random() * characterPool.length)
    );
  }

  document.getElementById("display-password").value = password;
}

function copyPassword() {
  const displayPassword = document.getElementById("display-password");
  if (displayPassword.value) {
    displayPassword.select();
    document.execCommand("copy");
    alert("Password Copied");
  } else {
    alert("Password field is empty,nothing to copy!");
  }
}
