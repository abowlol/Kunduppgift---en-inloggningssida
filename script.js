const username = "Sara"     // konstant variabel username sätts till Sara
const password = "qwe123"   // konstant variabel password sätts till qwe123
let loginButton = document.getElementById('login-btn')  // hämtar knappen login-btn
document.getElementById("logintext").innerHTML = "Logga in" // skriver ut texten "logga in" i paragrafen med id "logintext"

function validate(){  // funktion validate
    let user = document.getElementById("user").value // hämtar värde från inputrutan med id "user"
    let pass = document.getElementById("pass").value    // hämtar värde från inputrutan med id "pass"
    if (user === username && pass === password) {   // kollar om värdet från user och const variabeln username stämmer överens och värde från pass och const variabel password stämmer överens
        localStorage.setItem("isLoggedIn", true);   // om rad 9 stämmer så börjar denna raden och sätter localstorage till isLoggedin med värde true
        document.getElementById("logintext").innerHTML = "Välkommen, du är nu inloggad!"    // texten "välkommen du är nu inloggad" visas nu i paragrafen med id "logintext"
        document.getElementById('loginBtn').style.display = "none"; // tar bort "logga in knappen"
        document.getElementById('logoutBtn').style.display = "block"; // gör så att logga ut knappen blir synlig
        document.getElementById('user').style.display = "none"; // döljer input rutan för användarnamn
        document.getElementById('pass').style.display = "none"; // döljer rutan för lösenord
    }
    else {
        localStorage.setItem("isLoggedIn", false); // om rad 9 inte går igenom så kommer detta köras istället, localstorage "isLoggedIn" med värde false
        alert("felaktigt användarnamn/lösenord, försök igen");  // visar en alert texten "felaktigt..." 
        document.getElementById("logintext").innerHTML = "Var god och logga in"   // ändrar texten i paragrafen "logintext" med texten var god och logga in
    }
}
function logout(){ // funktionen logout
    document.getElementById('loginBtn').style.display = "block" // gör logga in knappen synlig
    document.getElementById('logoutBtn').style.display = "none" // gör loggautknappen dold
    document.getElementById('user').style.display = "inline"    // gör inputrutan för användarnamn synlig
    document.getElementById('pass').style.display = "inline"    // gör inputrutan för lösenord synlig
    localStorage.setItem("isLoggedIn", false)   // sätter localstorage "isLoggedIn" till false
    document.getElementById('user').value = ""  // tömmer input rutan på text
    document.getElementById('pass').value = ""  // tömmer input rutan på lösenord
    document.getElementById("logintext").innerHTML = "Du är nu utloggad!"   // visar texten "du är nu utloggad!" i paragrafen med id "logintext"
    
}
window.onload = function isLoggedIn() { // funktionen isLoggedIn laddas när sidan laddas
    let isLoggedIn = localStorage.getItem("isLoggedIn") // lokal variabel isLoggedIn sätts och hämtar localstorage "isLoggedIn"
    if(isLoggedIn==="true"){ // om localstorage "isLoggedIn" visar värdet "true" så kommer denna funktion att köras
        document.getElementById('loginBtn').style.display = "none"  // logga in knappen är dold
        document.getElementById('logoutBtn').style.display = "block"    // logga ut knapp är synlig
        document.getElementById('user').style.display = "none"  // input rutan dold
        document.getElementById('pass').style.display = "none"  // input rutan dold
        document.getElementById("logintext").innerHTML = "Välkommen, du är nu inloggad!"    // visar texten "Välkommen, du är .." i paragrafen med id "logintext"
 }

}
