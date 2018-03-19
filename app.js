class Circle {
	
  constructor(x,y,r) {
  	this.x = x;
  	this.y = y;
  	this.r = r;
  }

  isOverlapping(c){
  	let dx = c.x - this.x;
  	let dy = c.y - this.y;
  	let totalR = c.r + this.r;
  	let d = Math.sqrt (Math.pow(dx,2) + Math.pow(dy,2));
  	return (d < totalR) ? true : false;
  }

}

let mycircle = new Circle(10,10,10);
let mycircle2 = new Circle(90,90,20);
mycircle.isOverlapping (mycircle2);



class CircleStore {
	
  constructor() {
  	this.circleArray = [];
  }

  addCircle(c){
  	this.circleArray.push(c);
  }

  getOverlapingCircles(){
  	let overArray = [];
  	let clangth = Object.keys(this.circleArray).length;
  	for (let i = 0 ; i < clangth - 1 ; i++) {
  		for(let j = i+1 ; j< clangth ; j++){
  			if(this.circleArray[i].isOverlapping (this.circleArray[j])){
  				overArray.push(this.circleArray[i], this.circleArray[j]);
  			}
  		}
  	}
  	return overArray;	
  }
}

let mycs = new CircleStore();

mycs.addCircle(mycircle);
mycs.addCircle(mycircle2);

let mycircle3 = new Circle(10,10,20);
let mycircle4 = new Circle(500,500,5);
mycs.addCircle(mycircle3);
mycs.addCircle(mycircle4);

mycs.getOverlapingCircles();