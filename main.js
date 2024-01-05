function startClassification(){
    //Para activar el mic de la compu
    navigator.mediaDevices.getUserMedia({ audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_cQRrivxz/model.json', modelReady);
  }
  
  function modelReady(){
    classifier.classify(gotResults);
  }
  function gotResults(error , results){
if (error){
console.error(error);
}else{

document.getElementById("result_label").innerHTML = " I can hear: " + results[0].label;


}

}

  img = document.getElementById(b);
  img2 = document.getElementById(f);
  img3 = document.getElementById(u);
  img4 = document.getElementById(m);
  if(results[0].label == "Background Noise"){
    img.src = "butterfly.gif";
    img2.src = "fairy.gif";
    img3.src = "unicorn.gif";
    img4.src = "mermaid.gif";
  }