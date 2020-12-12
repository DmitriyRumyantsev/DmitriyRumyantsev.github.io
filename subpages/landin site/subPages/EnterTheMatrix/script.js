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
ctx.fillStyle = "brown";
ctx.fill();

ctx.rect(200, 150, 100, 100);
ctx.stroke();

ctx.rect(240, 200, 25, 50);
ctx.fillStyle = "grey";
ctx.fillRect(240, 200, 25, 50);


let i;

ctx.stroke();

let counter = 0, x=0,y=180;
//100 iterations
let increase = 90/180*Math.PI / 9;
for(i=0; i<=360; i+=10){
    
     ctx.moveTo(x,y);
    x = i;
    y =  180 - Math.sin(counter) * 120;
counter += increase;
     
    ctx.lineTo(x,y);
    ctx.stroke();
    //alert( " x : " + x + " y : " + y + " increase : " + counter ) ;

}
