noseX=0
noseY=0

function preload(){
  nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png")
}
function setup() {
  canvas = createCanvas(300, 300)
  canvas.center();
  video = createCapture(VIDEO)
  video.size(300, 300)
  video.hide()
  posNet = ml5.poseNet(video, model_loded)
  posNet.on("pose", got_pose)
}
function got_pose(result) {
  if (result.length > 0) {
    console.log(result)
    console.log("x = " +result[0].pose.nose.x)
    console.log("y = " + result[0].pose.nose.y)
    noseX=result[0].pose.nose.x
    noseY=result[0].pose.nose.y
  }
}
function model_loded() {
  console.log("model loded")
}
function draw() {
  image(video, 0, 0, 300, 300)
 image(nose,noseX-10,noseY-10,40,40)
}
function take_snapshot() {
  save("cloun_nose.png")
}
