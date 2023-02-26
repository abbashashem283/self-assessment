let prompt_numbers = []
let languages = ["HTML" , "CSS" , "JS" , "Java", "C++","C#","Python","PHP","ASP","Perl"]

for(let i=0; i<10 ; ++i){
    prompt_numbers.push(prompt("Which year was "+languages[i]+" released"))
}

console.log(prompt_numbers)