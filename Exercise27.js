//Unit 7

//Exercise 27

function movie(t,rate,p,stu,d){
	this.title = t;
	this.rating = rate;
	this.producers = p;
	this.studio=stu;
	this.release= new Date(d);
}

var ghost = new movie("Ghostbusters","PG-13",["Kristin Wiig","Melissa McCarthy","Lorne Green"],"Universal","July 15, 2016");

console.log(ghost.release);