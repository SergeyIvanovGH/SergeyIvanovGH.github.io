var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
var raf;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function print() {
    console.log(this.obj + ": x: "+this.x +" y: "+this.y);
}

function Monster() {
    this.obj = "noname";
    this.pixel = getRandomInt(18, 36);
    this.font =  this.pixel + "px serif";
    this.text = "+";
    this.x = getRandomInt(0, canvas.width - this.pixel);
    this.y = getRandomInt(this.pixel, canvas.width);
    this.vx = getRandomInt(0, 5);
    this.vy = getRandomInt(0, 2);
    this.color = "black";
}

Monster.prototype.show = function() {
    ctx.font = this.font;
    ctx.fillStyle = this.color;
    ctx.fillText(this.text, this.x, this.y);
}

Monster.prototype.draw = function() {
    this.show();
    this.x += this.vx;
    this.y += this.vy;
    if ((this.y + this.vy) > canvas.height || this.y + this.vy < this.pixel) {
        this.vy = -this.vy;
    }
    if ((this.x + this.vx) > (canvas.width - this.pixel) || this.x + this.vx < 0) {
        this.vx = -this.vx;
    }
}

function Cat() {
    Monster.call(this)
    this.obj = "cat";
    this.text = "C";
    this.color = "blue";
}

function Dog() {
    Monster.call(this)
    this.obj = "dog";
    this.text = "D";
    this.color = "green";
}

function Rabbit() {
    Monster.call(this)
    this.obj = "rabbit";
    this.text = "R";
    this.color = "red";
}

Cat.prototype = Monster.prototype;
Dog.prototype = Monster.prototype;
Rabbit.prototype = Monster.prototype;

var cat1 = new Cat();
var cat2 = new Cat();
var cat3 = new Cat();
var dog1 = new Dog();
var dog2 = new Dog();
var rab1 = new Rabbit();
var rab2 = new Rabbit();

var animals = [cat1, dog1, cat2, cat3, rab1, dog2, rab2];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < animals.length; i++) {
      animals[i].draw.call(animals[i]);
    }
    raf = window.requestAnimationFrame(draw);
}

draw();
