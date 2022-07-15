song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(700, 600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes);
}
function draw(){
    image(Video, 0, 0, 700, 600);
}
function modelloaded(){
    console.log("poseNet is initialized");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.x;
        console.log("  leftWristX - "+leftWristX+"  leftWristY - "+leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.x;
        console.log("  rightWristX - "+rightWristX+"  rightWristY - "+rightWristY);
    }
}