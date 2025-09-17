let ellipseX;
let ellipseDir;
function setup () {
    createCanvas(windowWidth, windowHeight);
    ellipseX = 0;
    ellipseDir = 1;

}

function draw() {
background(120);

let spacing = width / 15; // Spread 100 ellipses across the width

for(let n = 0; n < 100; n++){
    fill(255,0,0);
    
    let x = n * spacing;
    ellipse(x, height/5, random(50,350));
}
for(let n = 0; n < 100; n++){
    fill(100,0,300);
    
    let x = n * spacing;
    ellipse(x, height/17, random(50,300));
}
for(let n = 0; n < 100; n++){
    fill(150,0,180);
    let x = n * spacing;
    ellipse(x, height/3, random(50,300));
}
for(let n = 0; n < 100; n++){
    fill(0,180,235);
    let x = n * spacing;
    ellipse(x, height/2, random(50,300));
}
for(let n = 0; n < 100; n++){
    fill(300,100,30);
    let x = n * spacing;
    ellipse(x, height/1.5, random(50,300));
}
for(let n = 0; n < 100; n++){
    fill(0,255,0);
    let x = n * spacing;
    ellipse(x, height/1.2, random(50,300));
}
for(let n = 0; n < 100; n++){
    fill(255,0,255);
    let x = n * spacing;
    ellipse(x, height/1, random(50,300));
}
}
