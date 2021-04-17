 

var inputText = document.querySelector(".input");
var btnTranslator = document.querySelector("#btn-translator");
var outputText = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/morse.json"

function translate(input){
    var getOutput = serverUrl + "?text=" + input;
    return getOutput;
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Error Occurred in Server, Please try again sometime later!")
}

function clickHandler() {
    var inputTxt = inputText.value;
    

    //calling server
    fetch(translate(inputTxt))
    .then(response => response.json())
    .then(json => {
            var translatedOutput = json.contents.translated;
            console.log(translatedOutput);
            outputText.innerText = translatedOutput;
    }).catch(errorHandler)
};
 
btnTranslator.addEventListener("click", clickHandler)