nosex = 0;
nosey = 0;

function preload(){
 clown_nose = loadImage("1.png");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet_var = ml5.poseNet(video,modelLoaded);
    poseNet_var.on('pose', gotPoses);
}

function gotPoses(results){
     if(results.length > 0){
         console.log(results);
         nosex = results[0].pose.nose.x-15;
         nosey = results[0].pose.nose.y+15;
     }
}

function modelLoaded(){
    console.log('PoseNet Model Initialized');
}
function draw(){
 image(video, 0 , 0, 300 , 300);
 image(clown_nose , nosex , nosey , 25 , 25)
}
function capture(){
    save('myFilter.jpg');
}
function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        console.log("nose x: "+results[0].pose.nose.x);
        nosex = results[0].pose.nose.x-30;
        console.log("nose y: "+results[0].pose.nose.y);
        nosey = results[0].pose.nose.y;
    };
}