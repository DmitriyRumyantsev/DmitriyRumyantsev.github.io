let w = window.innerWidth;
let h = window.innerHeight;
let ctx = document.getElementById("canvas").getContext("2d");

ctx.beginPath();
ctx.arc(50, 50, 25, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(50, 150, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(50, 250, 25/2, 0, 2 * Math.PI);
ctx.stroke();

console.log( w);
console.log( h);

//рисуем дом

ctx.beginPath();
ctx.moveTo(200,150); //начальная точка
ctx.lineTo(300,150); 
ctx.lineTo(250,75); //конечная вершина
ctx.fill();

ctx.rect(200, 150, 100, 100);
ctx.stroke();

ctx.rect(240, 200, 25, 50);
ctx.stroke();