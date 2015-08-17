
'use strict';

var Photo = function(fileLocation) { //constructor
	this.path = fileLocation;
	this.votes = 1;
	this.index = //where it lives in photoArray
}

var Tracker = function() {
	this.leftPhoto
	this.rightPhoto
	
}

Photo.prototype.highlight = function (){   //defining it, but it isn't called until receive vote below
	//highlight photo after it's clicked 
	
}

Tracker.prototype.receiveVote = function (){    //a 'state' of waiting for vote
	//receive the click
	//increment the vote count
	//event listenre on each photo
	//highlight ();
	//drawTheChart()?
}

Tracker.prototype.getRandomInt = function(){
	//generate a random number to select an image from photoArray
}

Tracker.prototype.displayPhotos = function ()
	//display the random photos
	//prevent tpicking same photo twice
	//if photo1 === photo2 then re-roll  ***WHY?***

	// some 'document.getElementById' variables to acccess and manipulate the document



