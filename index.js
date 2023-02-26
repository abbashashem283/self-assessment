var name_field = document.getElementById("name");




function empty(s){
    s = s.trim()
    return s == null || s == ""
}

function hasCharachter(s , char){
    for(var i=0; i<s.length; ++i){
        if(s[i] == char)
            return true;
    }
    return false;
}

function hasSpecialCharachters(s){
    var charachters = ['!','@','#','$','%','^','&','*','(',')','.',',']
    var specials = new Set(charachters);
    for(var i=0 ; i<s.length ; ++i){
        if(specials.has(s[i]))
            return true;
    }
    return false;
}

function hasNumbers(s){
    for(var i=0 ; i<10 ; ++i){
        for(var j=0 ; j<s.length ; ++j){
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
    var at_index = email.indexOf("@")
    if(at_index == -1)
        return false
    var second_half = email.substring(at_index+1)
    return !empty(email) && hasCharachter(second_half,".") && !hasCharachter(email,"-")
}



