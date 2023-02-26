var name_field = document.getElementById("name");




function empty(s){
    return s == null || s == ""
}

function hasSpecialCharachters(s){
    var specials = "!@#$%^&*()";
    for(var i=0 ; i<specials.length ; ++i){
        for(var j=0 ; j<s.length ; ++j){
            if(specials[i] == s[j])
                return true;
        }
    }
    return false;
}

function hasNumbers(s){
    for(var i=0 ; i<9 ; ++i){
        for(var j=0 ; j<s.length ; ++j){
            if(i.toString() == s[j])
                return true;
        }
    }
    return false;
}

function validName(name){
    name = name.trim()
    return !(empty(name) || hasSpecialCharachters(name) || hasNumbers(name));
}

console.log(validName("   "))