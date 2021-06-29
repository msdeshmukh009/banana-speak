var butten = document.querySelector("#btn-translate");
var text = document.querySelector("#input-txt")
var output = document.querySelector("#output-txt")

function clicked(){
    console.log("clicked");
    console.log(text.value);
    output.innerText="mangosma";
}


 
butten.addEventListener("click",clicked);