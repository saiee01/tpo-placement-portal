function processOCR() {
  const result = document.getElementById("ocrResult");
  result.innerText = "Processing resume with OCR... (mock)";
  setTimeout(() => {
    result.innerText = "Name: Priya Sharma | CGPA: 8.2 | Skills: Python, JavaScript";
  }, 2000);
}

function handleLogin() {
  const role = document.getElementById("userRole").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("loginStatus");

  if (!role || !username || !password) {
    status.innerText = "Please fill all fields.";
    status.style.color = 'red';
    return;
  }

  status.innerText = `Logged in as ${role.toUpperCase()} - Welcome, ${username}!`;
  status.style.color = 'green';
}
