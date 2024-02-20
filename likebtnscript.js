var con = document.querySelector("#container")
var like = document.querySelector("i")

con.addEventListener("dblclick",function(){
    like.style.transform = 'scale(1)'
    like.style.opacity = 0.9

    setTimeout(function(){
        like.style.opacity = 0
    },1000)
    setTimeout(function(){
        like.style.transform = 'scale(0)'
    },3000)
})