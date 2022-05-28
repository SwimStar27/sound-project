function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VmlWsviiW/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        var runnr=Math.floor(Math.random()*255)+1;
        var dinnr=Math.floor(Math.random()*255)+1;
        var winnr=Math.floor(Math.random()*255)+1;
        document.getElementById("result").innerHTML='The Sound Heard Is: '+  (results[0].label);
        document.getElementById("confidence").innerHTML='The Accuracy Is: '+ (results[0].confidence*100).toFixed(2)+" % ";
        document.getElementById("result").style.color="rgb("+runnr+","+dinnr+","+winnr+")";
        document.getElementById("confidence").style.color="rgb("+runnr+","+dinnr+","+winnr+")";

        var img1=document.getElementById("alien1");
        var img2=document.getElementById("alien2");
        var img3=document.getElementById("alien3");
        var img4=document.getElementById("alien4");
        
        if(results[0].label=="Background Noise"){
            img1.src='alien1.png';
            img2.src='alien2.png';
            img3.src='alien3.png';
            img4.src='bob.gif';
        }

       else if(results[0].label=="Talking"){
            img1.src='alien1.gif';
            img2.src='alien2.png';
            img3.src='alien3.png';
            img4.src='bob.png';
        }
        else if(results[0].label=="Calpping"){
            img1.src='alien1.png';
            img2.src='alien2.gif';
            img3.src='alien3.png';
            img4.src='bob.png';
        }
        else if(results[0].label=="Water"){
            img1.src='alien1.png';
            img2.src='alien2.png';
            img3.src='alien3.gif';
            img4.src='bob.png';
        }
    }
}
