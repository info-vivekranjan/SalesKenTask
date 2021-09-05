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

ctx.fillStyle = "rgba(68, 255, 30, 0.6)";
ctx.fillRect(100, 0, 120, 20);

ctx.fillStyle = "black";
ctx.font = "17px serif";
ctx.fillText("Introduction", 120, 15);

ctx.fillStyle = "rgba(68, 255, 30, 0.6)";
ctx.fillRect(170, 20, 4, 156);

ctx.beginPath();
// ctx.fillStyle = "rgba(68, 255, 30, 0.6)";
ctx.arc(172, 170, 10, 0, Math.PI * 2, true);
ctx.moveTo(110, 75);
ctx.fill();
