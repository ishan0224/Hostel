let subBtn = document.getElementById("submitBtn");

addEventListener("click", (event)=>{
    event.preventDefault();
    event.stopPropagation();
    location.href = "userForm.html"
})