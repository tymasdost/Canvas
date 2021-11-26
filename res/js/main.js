const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let x = canvas.width / 2;
let y = canvas.height / 2;

let randomdraw = false;
let clickdraw = 1

ctx.fillStyle = "#171717";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.beginPath();

  canvas.onclick = (index) => {
    mouseY = index.clientY;
    mouseX = index.clientX;
    draw();
  };

  const draw = () => {
    color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    ctx.strokeStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 1;

    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
  };

    // setInterval(() => {
    //     randomX = Math.random() * canvas.width;
    //     randomY = Math.random() * canvas.height;
    //     color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    //     ctx.strokeStyle = color;
    //     ctx.shadowColor = color;
    //     ctx.shadowBlur = 1;

    //     ctx.lineTo(randomX, randomY);
    //     ctx.stroke();
    //   }, 100);

    console.log("setInterval(() => {randomX = Math.random() * canvas.width;randomY = Math.random() * canvas.height;color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;ctx.strokeStyle = color;ctx.shadowColor = color;ctx.shadowBlur = 1;ctx.lineTo(randomX, randomY);ctx.stroke();}, 100);")


