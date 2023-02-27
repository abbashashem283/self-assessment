const warning_prompt = document.getElementById("warning")
const course_field = document.getElementById("course")
const yearc_field = document.getElementById("year")
const institution_field = document.getElementById("institution")
const score_field = document.getElementById("score")
const submit = document.getElementById("submit-btn")
const form = document.getElementById("intro-form")


fetch('https://api.ipify.org/').then(
  r => r.text()
).then(
    function(data){
       warning_prompt.innerText = "It Seems that your ip "+data+" is easily traceable. Consider using a VPN"
    }
);

navigator.geolocation.getCurrentPosition(
    function(position){
        let x = position.coords.latitude
        let y = position.coords.longitude
        warning_prompt.innerText += " At location "+x+" , "+y
    }
)

class Course{
    constructor(name,institution,year,score){
        this.name = name
        this.year= year
        this.institution= institution
        this.score= score
    }
}

submit.addEventListener("click" , 
    function(event){
        event.preventDefault;
        my_course = new Course(
            course_field.value.trim(),
            parseInt(yearc_field.value.trim()),
            institution_field.value.trim(),
            parseInt(score_field.value.trim())
        )
        form.submit()
    }
)
