document.querySelector("form").addEventListener("submit", signIn);
var dataUser=JSON.parse(localStorage.getItem("userInfo")) 
function signIn() {
   event.preventDefault();
   var enteremail=document.querySelector("#email").value;
    var password=document.querySelector("#pass").value;
 
   for(var i=0;i<dataUser.length;i++) {
       if(dataUser[i].email== enteremail){
           alert("Login Successfully")
           window.location.href="index.html";
           break;
           
       }
       else{
           alert("Wrong Email")
           break;
       }
       
   }
   
}
document.querySelector("#ba").addEventListener("click", back);
function back() {
    document.querySelector("#ba")
    window.location.href="login.html"
}
