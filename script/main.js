const inputKey=document.querySelectorAll(".input-key")
console.log(inputKey)

// accessing all the inputBtn
for(const key of inputKey){
    key.addEventListener("click",function(){
        console.log("clicked")
    })
}
