const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); // 2D rendering context

//Static height of each canvas
const heightArr = [
  -100, 50, -50, -160, -30, -40, -50, -60, -50, -40, -20, -80, -100, -20, -150,
  -70, 110, 50, -50, -130, -30, 40, 50, 60, 50, 110, 20, -80, 120, -20, -150,
  -100, 50, -50, -160, -30, -40, -50, -60, -50, -40, -20, -80, -100, -20, -20,
  -150, -70, 100, 50, -50, 150, 30, 40, 50, 60, -50, 60, 50, 110, 20, -80, 120,
  -20, -150, -100, 50, -50, -160, -30, -40, -50, -60, -50, -40, -20, -80, -100,
  -20, -100, 50, -100, 50, -50, -160, -30, -40, -50, -60, -50, -40, -20, -80,
  -100, -20, 50, -50, 150, 30, 40, 50, 60, 60, 50, 110, 20, -80, 120, -20, -150,
  -70, 50, -50, 150, 30, 40, 50, 60, -50, -40, 20, 80, 120, -20, -150, -70, 100,
  50, -50, 150, 30, 40, -100, -100, 50, -50, -160, -30, -40, -50, -60, -50, -40,
  -20, -80, -100, -20, -100, -20, 30, 40, 50, 60, -50, -40, 20, 80, 120, -20,
  -150, -70, 100, 50, -50, 20, 80,
];

let widthOfEachCanvs = 4;
let start = 13;
let newStart = start; // for overlapping new color

//Static audio waveform using heightArr
for (let i = 0; i < heightArr.length; i++) {
  ctx.fillStyle = "silver";
  ctx.fillRect(start, 175, widthOfEachCanvs, heightArr[i]); //(x-axis,y-axis,width,height)
  start = start + widthOfEachCanvs + 4;
}

//<----------------- Now overlapping function for all the Rect------------------>

// Now for each Interval 0f 300 millisecond callback function from handlePlay will be called

let interval;
function marchCanvas(overlapFunction) {
  return () => {
    interval = setInterval(() => {
      overlapFunction((prev) => prev + 1);
    }, 300);
  };
}

//this callback function will be returned in marchCanvas function after each 300ms

let offset = 0; // the value of offset will change after each 300ms and shift to the next Rect
const handlePlay = marchCanvas(() => {
  ctx.fillStyle = "#df4b70";
  ctx.fillRect(newStart, 175, widthOfEachCanvs, heightArr[offset]);
  offset++;
  newStart = newStart + widthOfEachCanvs + 4;
});

// Now For Pause functionality, will use clearInterval

const handlePause = () => {
  return clearInterval(interval);
};

// <-------------------------------- Static Tags ----------------------------->

// Static Tag 1

ctx.fillStyle = "#61B624"; //widest Rect
ctx.fillRect(100, 0, 120, 20);

ctx.fillStyle = "white"; // text
ctx.font = "17px serif";
ctx.fillText("Introduction", 120, 15);

ctx.fillStyle = "#61B624"; // line linked to the widest Rect
ctx.fillRect(170, 20, 4, 156);

ctx.beginPath(); // circle below the line
ctx.arc(172, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();

// Static Tag 2

ctx.fillStyle = "#65C98F"; //widest Rect
ctx.fillRect(420, 0, 80, 20);

ctx.fillStyle = "white"; // text
ctx.font = "17px serif";
ctx.fillText("one_six", 430, 15);

ctx.fillStyle = "#65C98F"; // line linked to the widest Rect
ctx.fillRect(460, 20, 4, 156);

ctx.beginPath(); // circle below the line
// ctx.fillStyle = "#65C98F";

ctx.arc(463, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();

// Static Tag 3

ctx.fillStyle = "#3350C0";
ctx.fillRect(1080, 60, 80, 20);

ctx.fillStyle = "white";
ctx.font = "17px serif";
ctx.fillText("Profile", 1100, 75);

ctx.fillStyle = "#3350C0";
ctx.fillRect(1115, 80, 4, 100);

ctx.beginPath();
// ctx.fillStyle = "#3350C0";
ctx.arc(1118, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();

// Static Tag 4

ctx.fillStyle = "#9A6C68";
ctx.fillRect(1060, 25, 195, 20);

ctx.fillStyle = "white";
ctx.font = "17px serif";
ctx.fillText("Rapport Building - Empthy", 1065, 40);

ctx.fillStyle = "#9A6C68";
ctx.fillRect(1200, 45, 4, 130);

ctx.beginPath();
// ctx.fillStyle = "#9A6C68";
ctx.arc(1203, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();

// Static Tag 5

ctx.fillStyle = "#69A548";
ctx.fillRect(1110, 0, 195, 20);

ctx.fillStyle = "white";
ctx.font = "17px serif";
ctx.fillText("Rapport Building - Energy", 1115, 15);

ctx.fillStyle = "#69A548";
ctx.fillRect(1280, 17, 4, 150);

ctx.beginPath();
// ctx.fillStyle = "#69A548";
ctx.arc(1283, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();
