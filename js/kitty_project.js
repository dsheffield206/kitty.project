// Kitty Battle Project for Code Fellows Bootcamp Week 3

'use strict';

// Photo Constructor
var Photo = function(fileLocation) {
	this.path = fileLocation;
	this.votes = 1;
};

var photo1 = new Photo('imgs/kittens/01.jpg');
var photo2 = new Photo('imgs/kittens/02.jpg');
var photo3 = new Photo('imgs/kittens/03.jpg');
var photo4 = new Photo('imgs/kittens/04.jpg');
var photo5 = new Photo('imgs/kittens/05.jpg');
var photo6 = new Photo('imgs/kittens/06.jpg');
var photo7 = new Photo('imgs/kittens/07.jpg');
var photo8 = new Photo('imgs/kittens/08.jpg');
var photo9 = new Photo('imgs/kittens/09.jpg');
var photo10 = new Photo('imgs/kittens/10.jpg');
var photo11 = new Photo('imgs/kittens/11.jpg');
var photo12 = new Photo('imgs/kittens/12.jpg');
var photo13 = new Photo('imgs/kittens/13.jpg');
var photo14 = new Photo('imgs/kittens/14.jpg');

// this array will hold all the Photo objects
var photoArray = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11, photo12, photo13, photo14];
// for(var i = 0; i < 14; i++) {


// Photo Tracker Constructor
var Tracker = function( ) {
	// this.leftPhoto = leftPhoto;
	// this.rightPhoto = rightPhoto;
	// Do we need any more variables?
}

var votePhotos = new Tracker( );

// Generate a random number to select an images from photoArray
Tracker.prototype.getRandomInt = function( ) {
  return Math.floor((Math.random( ) * (14 - 0)) + 0);
};
console.log(votePhotos.getRandomInt( ));


Tracker.prototype.displayPhotos = function ( ) {
	// get 1st random #; get 2nd random #
	// display the random photos... accessing the photoArray[ ]
	// prevent tpicking same photo twice
	// if photo1 === photo2 then re-roll  ***WHY?***
};


// This highlights the winning photo when clicked
Tracker.prototype.highlight = function (){
	//highlight photo after it's clicked

}

Tracker.prototype.receiveVote = function (){    //a 'state' of waiting for vote
	//receive the click
	//increment the vote count
	//event listenre on each photo
	//highlight ();
	//drawTheChart()?
}


var kitten1 = document.getElementById('kitten1');
var kitten2 = document.getElementById('kitten2');
kitten1.innerHTML = '<img src="' + photoArray[votePhotos.getRandomInt()].path + '">';
kitten2.innerHTML = '<img src="' + photoArray[votePhotos.getRandomInt()].path + '">';

	// some 'document.getElementById' variables to acccess and manipulate the document



