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


let prompt_numbers = []
let languages = ["HTML" , "CSS" , "JS" , "Java", "C++","C#","Python","PHP","ASP","Perl"]
/*
for(let i=0; i<10 ; ++i){
    prompt_numbers.push(prompt("Which year was "+languages[i]+" released?"))
}


prompt_numbers = mergeSort(prompt_numbers)

console.log(prompt_numbers)
*/