


const loginForm = document.querySelector(".login-form");

function validateForm() {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const roleSelect = document.querySelector("#role");

  
  if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
    setInvalidInput(usernameInput);
    setInvalidInput(passwordInput);
    alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    return false;
  }


  if (usernameInput.value.includes(' ') || passwordInput.value.includes(' ')) {
    alert("ข้อมูลไม่ควรมีที่ว่าง");
    return false;
  }

  // 3. ตรวจสอบ username
  const trimmedUsername = usernameInput.value.trim();
  if (/\s/.test(trimmedUsername) || trimmedUsername.length <= 3 || /^\d/.test(trimmedUsername)) {
    setInvalidInput(usernameInput);
    alert("กรุณากรอก Username ให้ถูกต้อง");
    return false;
  }

  // 4. ตรวจสอบ password
  const trimmedPassword = passwordInput.value.trim();
  if (trimmedPassword.length <= 4 || !/\d/.test(trimmedPassword) || !/[a-zA-Z]/.test(trimmedPassword)) {
    setInvalidInput(passwordInput);
    alert("กรุณากรอกPasswordอย่างน้อย 4 ตัวและต้องมีตัวอักษร");
    return false;
  }

  const roleValue = roleSelect.value;
  if (roleValue.trim() === "") {
    setInvalidInput(roleSelect);
    alert("กรุณาเลือก Role");
    return false;
  }

  
  alert("Login Successfully");

  window.location.href = "https://www.example.com";

  return true;
}

function setInvalidInput(inputElement) {
  inputElement.style.borderColor = "red";
}

function resetInputStyles() {
  const usernameInput = document.querySelector("#username");
  const passwordInput = document.querySelector("#password");
  const roleSelect = document.querySelector("#role");
  usernameInput.style.backgroundColor = '#f5424810'
  passwordInput.style.backgroundColor = '#f5424810'
  usernameInput.style.borderColor = "#f54248";
  passwordInput.style.borderColor = "#f54248";
  roleSelect.style.borderColor = "#f54248";
}


loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  resetInputStyles(); 
  return validateForm();
});


const usernameInput = document.querySelector("#username");
usernameInput.addEventListener("input", function () {
  resetInputStyles();
});


const roleSelect = document.querySelector("#role");
roleSelect.addEventListener("change", function () {
  resetInputStyles();
});



