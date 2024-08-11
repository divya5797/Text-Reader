function readText(){
    var text = document.getElementById('textToRead').value;
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;

    speech.onend = function(){
        console.log('Speech ended');
    }
    speech.onerror = function(error){
        console.error('Speech synthesis error:',error);
    }
    window.speechSynthesis.speak(speech);
}