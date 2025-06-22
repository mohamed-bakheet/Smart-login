var signinEmail = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var signupName = document.querySelector("#signupName");
var signupEmail = document.querySelector("#signupEmail");
var signupPassword = document.querySelector("#signupPassword");
var signUpBtn = document.querySelector(".signUp");
var signInBtn = document.querySelector(".signIn");
var signUpMessage = document.querySelector("#exist");
var welcome = document.querySelector("#username");
var logOu = document.querySelector(".logOu")
//create array and empty or display it from localStorage

var usersList;

if(localStorage.getItem("usersList")){
 usersList = JSON.parse(localStorage.getItem("usersList"));
 
}else{
       usersList = [] ;
}

// add event listener to submit button
if(signUpBtn){
signUpBtn.addEventListener("click", function(){takeValues()});
}
// take the values from Sign up page & push in array
function takeValues(){
       if(validateSignEmpty()){
     if(validateEmail()){
if(isEmailExist() === false){
       var users = {
       Name:signupName.value ,
       email:signupEmail.value ,
       pass:signupPassword.value
}
usersList.push(users);
console.log(users)

saveTolocalstorage()
signUpMessage.innerHTML = `<span class = "text-success">registration success go to Sign in </span>`
console.log(usersList)} else{
       signUpMessage.innerHTML = `<span class = "text-danger"> email already exist go to sign in </span>`;
} }
       else{
              
              console.log("validation no");
              signUpMessage.innerHTML = `<span class = "text-danger">enter a valid email </span>`;
       }
}else{
signUpMessage.innerHTML = `<span class = "text-danger">all fields required </span>`
}};











  
//save to local storage

function saveTolocalstorage(){
localStorage.setItem("usersList", JSON.stringify(usersList));
}






function validateEmail() {
       var regex = /^(\w+\@\S{2,})(\.\w+)+$/;
       if (regex.test(signupEmail.value)) {
              console.log("tmam");
              
              return true;
       } else {
              
              console.log("mosh");
              return false;
       }
};

//empty validation
function validateSignEmpty() {
      if (signupName && signupEmail && signupPassword ){
    if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return false
    } else {
        return true
    }
}}
;





//email check existance

function isEmailExist() {
       if (usersList.length === 0) return false;
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase() === signupEmail.value.toLowerCase() ) {
                          
            console.log("true")
            return true
        }
       }
              console.log("false");
              return false
        }
    


if(signInBtn){
signInBtn.addEventListener("click" , function(){
       console.log("btn")
       logIn()})
};

function validateLoginEmpty() {
      if (signinEmail && signinPassword ){
    if (signinEmail.value == "" || signinPassword.value == "") {
        return true
    } else {
        return false
    }
}}

function logIn() {
    if (validateLoginEmpty()) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        
    }
    var password = signinPassword.value
    var mail = signinEmail.value
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].email.toLowerCase() === mail.toLowerCase() && usersList[i].pass.toLowerCase() === password.toLowerCase()) {
             localStorage.setItem('loggedUsername', usersList[i].Name)
           window.location.href = "welcome.html";

        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }

}

var username = localStorage.getItem('loggedUsername')
if (username) {
       if (welcome){
    welcome.innerHTML = "Welcome " + username
}};

if(logOu){
logOu.addEventListener("click" , function(){
       console.log("out")
       logOut()})
};

function logOut(){
        localStorage.removeItem('loggedUsername')
}

