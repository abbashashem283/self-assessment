const form = document.getElementById("intro-form")
const name_field = document.getElementById("name")
const email_field = document.getElementById("email")
const phone_field = document.getElementById("phone")
const password_field = document.getElementById("password")
const experience_field = document.getElementById("combo")
const errors = document.getElementsByClassName("error")
const submit = document.getElementById("submit-btn")




function empty(s){
    s = s.trim()
    return s == null || s == ""
}

function hasCharachter(s , char){
    for(let i=0; i<s.length; ++i){
        if(s[i] == char)
            return true;
    }
    return false;
}

function hasSpecialCharachters(s){
    const charachters = ['!','@','#','$','%','^','&','*','(',')','.',',']
    const specials = new Set(charachters);
    for(let i=0 ; i<s.length ; ++i){
        if(specials.has(s[i]))
            return true;
    }
    return false;
}

function hasNumbers(s){
    for(let i=0 ; i<10 ; ++i){
        for(let j=0 ; j<s.length ; ++j){
            if(i.toString() == s[j])
                return true;
        }
    }
    return false;
}

function hasUpperCase(s){
    return s != s.toLowerCase();
}

function validName(){
    name = name_field.value.trim() 
    return !(empty(name) || hasSpecialCharachters(name) || hasNumbers(name));
}

function validPassword(){
    password = password_field.value.trim()
    return !empty(password) && hasNumbers(password) && hasSpecialCharachters(password)
            && hasUpperCase(password) && password.length >= 8;
}

function validEmail(){
    email = email_field.value.trim()
    const at_index = email.indexOf("@")
    if(at_index == -1)
        return false
    const second_half = email.substring(at_index+1)
    return !empty(email) && hasCharachter(second_half,".") && !hasCharachter(email,"-")
}

function validPhone(){
    phone = phone_field.value.trim()
    for(let i=0 ; i<phone.length; ++i){
        if(i == 2)
            continue
        if(!hasNumbers(phone[i]))
            return false
    }
    return phone[2] == "/" && phone.length == 9;
}


function validForm(){
    return (validName() && validPhone() && validEmail() && validPassword())
}


function showError(error_index , message){
    errors[error_index].style.visibility = "visible";
    errors[error_index].innerText = "* "+message;
}

function validateForm(){
    if(!validName())
        showError(0,"please fix field format")
    if(!validEmail())
        showError(1,"please fix field format")
    if(!validPhone())
        showError(2, "please fix field format")    
    if(!validPassword())
        showError(3,"please fix field format")       
}


submit.addEventListener("click" , 
    function(event) {
        event.preventDefault();
        if(validForm()){
            let data = {
                name: name_field.value,
                email: email_field.value,
                phone: phone_field.value,
                password: password_field.value,
                experience: experience_field.value
            }
            form.submit();
        }else{
            validateForm()
        }
    }
)



