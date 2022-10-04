const username = "Sara"     
const password = "qwe123"   
let loginButton = document.getElementById('login-btn') 
document.getElementById("logintext").innerHTML = "Logga in" 

function validate(){  // funktion validate
    let user = document.getElementById("user").value 
    let pass = document.getElementById("pass").value    
    if (user === username && pass === password) {   
        localStorage.setItem("isLoggedIn", true);   
        document.getElementById("logintext").innerHTML = "Välkommen, du är nu inloggad!"   
        document.getElementById('loginBtn').style.display = "none"; 
        document.getElementById('logoutBtn').style.display = "block"; 
        document.getElementById('user').style.display = "none"; 
        document.getElementById('pass').style.display = "none"; 
    }
    else {
        localStorage.setItem("isLoggedIn", false); 
        alert("felaktigt användarnamn/lösenord, försök igen");  
        document.getElementById("logintext").innerHTML = "Var god och logga in"   
    }
}
function logout(){ // funktionen logout
    document.getElementById('loginBtn').style.display = "block" 
    document.getElementById('logoutBtn').style.display = "none" 
    document.getElementById('user').style.display = "inline"    
    document.getElementById('pass').style.display = "inline"    
    localStorage.setItem("isLoggedIn", false)   
    document.getElementById('user').value = ""  
    document.getElementById('pass').value = ""  
    document.getElementById("logintext").innerHTML = "Du är nu utloggad!"   
    
}
window.onload = function isLoggedIn() { 
    let isLoggedIn = localStorage.getItem("isLoggedIn") 
    if(isLoggedIn==="true"){ 
        document.getElementById('loginBtn').style.display = "none"  
        document.getElementById('logoutBtn').style.display = "block"    
        document.getElementById('user').style.display = "none"  
        document.getElementById('pass').style.display = "none"  
        document.getElementById("logintext").innerHTML = "Välkommen, du är nu inloggad!"    
 }

}
