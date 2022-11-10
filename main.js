function preload() {

}

function setup() {
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    Tint_color = "";
}

function draw(){
    image(video, 0 ,0, 640, 480);
    tint(Tint_color);
}
function take_snapshot(){
    save('student_name.png');
}
function filter_tint()
{
    Tint_color = document.getElementById("color_name").value;
}
