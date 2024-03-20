const subBtn = document.getElementById("submit-btn");

const emailField = document.getElementById("email");
const passField = document.getElementById("password");

  
subBtn.addEventListener("click", (event) => {

    

    event.preventDefault();
    event.stopPropagation();
    if (emailField.value != "" && passField.value != "") {
    location.href = "userForm.html"
    }
    else{
        alert("Please enter your credentials");
    }
})
const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('text-gray-400');
});