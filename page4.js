let show_msg = true
document.addEventListener("scroll" , 
    function(){
        if(window.scrollY >= 159){
            if(show_msg){
                alert("You've reached the suspicious button div. Now click it to win! (use the browsers inspect tool to find it)")
                show_msg = false
            }
        }
    }
)

const button = document.getElementById("magic-button")
button.addEventListener("click" ,
    function(){
        alert("You Got It!!!!")
    }
)

const up_button = document.getElementById("go-up")
up_button.addEventListener("click" ,
    function(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
)