function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/tofORqnHt/model.json' , modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error) {
        console.error(error);
    } else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
    
        document.getElementById("result_label").innerHTML = "I can hear -" + results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy -" + (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
    
        img = document.getElementById('https://image.shutterstock.com/image-vector/cute-grey-cat-cartoon-260nw-1044708187.jpg');
        img1 = document.getElementById('https://img.freepik.com/free-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000');
        img2 = document.getElementById('https://static.vecteezy.com/system/resources/previews/005/162/478/original/cartoon-happy-lion-isolated-on-white-background-free-vector.jpg');
        img3 = document.getElementById('https://image.shutterstock.com/image-vector/cute-giraffe-cartoon-illustration-260nw-337349204.jpg');
    
        if (results[0].label == "Meow") {
            img.src = 'https://image.shutterstock.com/image-vector/cute-grey-cat-cartoon-260nw-1044708187.jpg';
        } else if (results[0].label == "Bark") {
            img1.src = ('https://img.freepik.com/free-vector/cute-little-dog-cartoon-isolated-white_143596-3.jpg?w=2000');
            img2 = document.getElementById('https://static.vecteezy.com/system/resources/previews/005/162/478/original/cartoon-happy-lion-isolated-on-white-background-free-vector.jpg'); 
        } else if (results[0].label == "Roring") {
            img2.src = 'https://static.vecteezy.com/system/resources/previews/005/162/478/original/cartoon-happy-lion-isolated-on-white-background-free-vector.jpg';
        } else {
            img3.src = 'https://image.shutterstock.com/image-vector/cute-giraffe-cartoon-illustration-260nw-337349204.jpg';
        }
    
    }
    }