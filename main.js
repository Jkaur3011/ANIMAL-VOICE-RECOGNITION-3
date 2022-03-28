function StartASIdentification() { //starting sound identification
    navigator.mediaDevices.getUserMedia({
        audio: true
    }); //allowing to access the microphone of system
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/c5kdbxcFm/model.json", modelReady); //adding teachable machine link and defining new function
    listen_gif = document.getElementById('listen_pic.png');
    listen_gif.src = 'LISTEN.gif';
}

function modelReady() {
    classifier.classify(gotResults); //comparing trained model with audio captured from the microphone
}

Bat = 0
Bear = 0
Camel = 0
Cow = 0
Crow - 0
Dog = 0
Duck = 0
Frog = 0
Horse = 0
Lion = 0
Mosquito = 0
Snake = 0
Wolf = 0

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
    }
}
random_red = Math.random(1, 255);
random_green = Math.random(1, 255);
random_blue = Math.random(1, 255);

document.getElementById("times_sound").innerHTML = "Accuracy of the sound :" + (results[0].confidence * 100).toFixed(2) + "%";
document.getElementById("result_final").innerHTML = "Animal :" + results[0].label;
