document.querySelector("form").addEventListener("submit", login);
var userData=JSON.parse(localStorage.getItem("userInfo")) || [];
function login(){
    event.preventDefault();
    var userObj={
        email:document.querySelector("#email").value,
    };
    userData.push(userObj);
    window.location.href="login2.html";
    console.log(userData)
    localStorage.setItem("userInfo", JSON.stringify(userData))
}