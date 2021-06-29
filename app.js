var butten = document.querySelector("#btn-translate");
var input = document.querySelector("#input-txt")
var output = document.querySelector("#output-txt")
var url = "https://api.funtranslations.com/translate/minion.json"

function constructUrl(text){
    return url +"?"+"text="+text
}
function errorHandler(error){
    console.log("error ocuured: ",error);
    alert("Something went wrong with server! try again after some time")
}

function clicked(){
    var inputtxt = input.value
    fetch(constructUrl(inputtxt))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated
        output.innerText = translatedText
    })
    .catch(errorHandler)
}


 
butten.addEventListener("click",clicked);