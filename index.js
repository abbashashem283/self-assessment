const name_field = document.getElementById("name")
const email_field = document.getElementById("email")
const phone_field = document.getElementById("phone")
const password_field = document.getElementById("password")
const cpassword_field = document.getElementById("cpassword")
const experience_field = document.getElementById("combo")
const errors = document.getElementsByTagName("small")




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

function validName(name){
    return !(empty(name) || hasSpecialCharachters(name) || hasNumbers(name));
}

function validPassword(password){
    return !empty(password) && hasNumbers(password) && hasSpecialCharachters(password)
            && hasUpperCase(password) && password.length >= 8;
}

function validEmail(email){
    const at_index = email.indexOf("@")
    if(at_index == -1)
        return false
    const second_half = email.substring(at_index+1)
    return !empty(email) && hasCharachter(second_half,".") && !hasCharachter(email,"-")
}

function validPhone(phone){
    for(let i=0 ; i<phone.length; ++i){
        if(i == 2)
            continue
        if(!hasNumbers(phone[i]))
            return false
    }
    return phone[2] == "/" && phone.length == 9;
}


function showError(error_index , message){
    errors[error_index].classList.toggle("hidden");
    errors[error_index].innerText = "* "+message;
}

function validateForm(){
    showError(0, "sam is here")
}



