const check_marks = document.getElementsByClassName("result")
const check_buttons = document.getElementsByClassName("check-btn")
const palindrome_field = document.getElementById("palindrome")
const color_field = document.getElementById("color")
const company_field = document.getElementById("company")
const year_field = document.getElementById("year")
const submit = document.getElementById("submit-btn")
const form = document.getElementById("intro-form")

let prompt_numbers = []
let languages = ["HTML" , "CSS" , "JS" , "Java", "C++","C#","Python","PHP","ASP","Perl"]

check_buttons[0].addEventListener("click" , 
    function(event){
        event.preventDefault()
        console.log(isPalindrome(palindrome_field.value.trim()))
        if(isPalindrome(palindrome_field.value.trim())){
            showResult(1,0)
        }else{
            showResult(0,0) 
        }   
    }
)

year_field.addEventListener("blur" , 
    function(){
        let year = parseInt(year_field.value.trim())
        if(primeAge(year))
            alert("You have a prime Age!")
    }
)


submit.addEventListener("click",
    function(event){
        event.preventDefault()
        console.log(reverseNumbers(color_field.value.trim()))
        console.log(consonantSets(company_field.value.trim()))
        form.submit()
    }
)


function showResult(mode, check_mark){
    if(mode == 0)
        check_marks[check_mark].innerText = "❌";
    else
        check_marks[check_mark].innerText = "✔️"; 
    check_marks[check_mark].style.visibility = "visible"        
}
/*
for(let i=0; i<10 ; ++i){
    prompt_numbers.push(prompt("Which year was "+languages[i]+" released?"))
}


prompt_numbers = mergeSort(prompt_numbers)

console.log(prompt_numbers)
*/

function merge(array1 , array2){
    let result = []
    let i=0 , j=0;
    while(i < array1.length && j < array2.length){
        if(array1[i] < array2[j])
            result.push(array1[i++])
        else
            result.push(array2[j++])
    }
    
    while(i < array1.length)
        result.push(array1[i++])
        
    while(j < array2.length)
        result.push(array2[j++])
        
    return result    
}

function mergeSort(nums){
    if(nums.length <= 1)
        return nums;
    let mid = Math.floor(nums.length / 2) 
    let left_array = mergeSort(nums.slice(0,mid))
    let right_array = mergeSort(nums.slice(mid,nums.length))
    return merge(left_array , right_array)
}


function isPalindrome(s){
    if(s.length <= 1)
        return true
    if(s[0] == s[s.length - 1])
        return isPalindrome(s.slice(1,s.length-1))
    return false    
}

function reverseNumbers(s){
    const numbers = new Set([0,1,2,3,4,5,6,7,8,9])
    let reversed_nums = []
    for(let i=0 ; i<s.length ; ++i){
        if(numbers.has(parseInt(s[i])))
            reversed_nums.push(s[i])
    }
    console.log(reversed_nums)
    for(let i=0 ; i<s.length ; ++i){
        if(numbers.has(parseInt(s[i]))){
            s=s.substring(0,i)+reversed_nums.pop()+s.substring(i+1)
        }    
    }
    return s
}


function consonantSets(s){
    let consonants = ""
    let result = ""
    let vowels = new Set(['a','e','i','o','u'])
    for(let i=0 ; i<s.length ; ++i){
        if(vowels.has(s[i])){
            result = s.substring(i)+consonants+"ay"
            return result
        }else{
            consonants += s[i]
        }
    }
}


function primeAge(birth_year){
    let current_year =  new Date().getFullYear();
    let age = current_year - birth_year;
    for(let i=0 ; i<age ; ++i){
        if(i!=age && i!=1 && age % i == 0)
            return false
    }
    return true
}
