var noseX = 0;
var noseY = 0;

var leftWristX = 0;
var rightWristX = 0;

var difference =  0;


function setup() {
    video=createCapture(VIDEO);
    video.size(950, 550);
    video.position(160,150);

    canvas =createCanvas(550, 550);
    canvas.position(1060,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

    textSize(10)
}

function draw() {
    background('#cc5151');

    document.getElementById("text_size").innerHTML = "Width an Height of the font will be = " + difference +"px"
    fill('#FF6666');
    stroke('#F90093');
    text( 'ricardo', noseX, noseY);
    textSize(difference)
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) {
    if(results.length >0) 
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log('noseX = ' + noseX +' noseY = ' + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log('LeftWristX = ' + leftWristX + ' rigthwristX = ' + rightWristX + ' difference = ' + difference);
    }
}