function fun() {
 let name = document.getElementById("username").value;
 let email = document.getElementById("email").value;
 let password = document.getElementById("password").value;
 if (name === "" || email === "" || password === "") 
    {
  alert("All fields are required");
  return;
 }
alert(`Welcome ${name} successfully registered`);
}
function mode() 
{
    let element = document.body;
    element.classList.toggle("dark-mode");
    element.classList.contains("dark-mode") ? element.style.backgroundColor = "rgba(26, 33, 35, 1)" : element.style.backgroundColor = "rgb(173, 216, 230)";
    element.classList.contains("dark-mode") ? element.style.color = "rgb(173, 216, 230)" : element.style.color = "rgba(26, 33, 35, 1)";
}
