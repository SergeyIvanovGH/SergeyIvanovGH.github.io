var canvas = document.getElementById('tutorial');
var ctx = canvas.getContext('2d');
var raf;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Cat() {
    this.name = "cat";
    this.font = getRandomInt(18, 36) + "px serif";
    this.text = "C";
    this.x = getRandomInt(10, 450);
    this.y = getRandomInt(10, 450);
    this.vx = getRandomInt(0, 5);
    this.vy = getRandomInt(0, 2);
    this.color = "blue";
    this.show = function() {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }
    this.print = function() {
        console.log(this.name + ": x: "+this.x +" y: "+this.y);
    }
}

function Dog() {
    this.name = "dog";
    this.font = getRandomInt(14, 24) + "px serif";
    this.text = "D";
    this.x = getRandomInt(0, 450);
    this.y = getRandomInt(0, 450);
    this.vx = getRandomInt(0, 5);
    this.vy = getRandomInt(0, 2);
    this.color = "green";
    this.show = function() {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }
    this.print = function() {
        console.log(this.name + ": x: "+this.x +" y: "+this.y);
    }
}

function Rabbit() {
    this.name = "rabbit";
    this.font = getRandomInt(18, 36) + "px serif";
    this.text = "R";
    this.x = getRandomInt(10, 450);
    this.y = getRandomInt(10, 450);
    this.vx = getRandomInt(0, 5);
    this.vy = getRandomInt(0, 2);
    this.color = "red";
    this.show = function() {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
    }
    this.print = function() {
        console.log(this.name + ": x: "+this.x +" y: "+this.y);
    }
}


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
      (function() {
          this.show();
          this.x += this.vx;
          this.y += this.vy;
          if (this.y + this.vy > canvas.height || this.y + this.vy < 0) {
              this.vy = -this.vy;
          }
          if (this.x + this.vx > canvas.width || this.x + this.vx < 0) {
              this.vx = -this.vx;
          }
        //   this.print();
      }).call(animals[i], i);
    }
    raf = window.requestAnimationFrame(draw);
}

draw();
