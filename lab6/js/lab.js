/*
* Author: Melanie Mak <mymak@ucsc.edu>
* Created: October 21, 2021
*/

var myTransport - ['walking', 'bus'];
var myMainRide - {
	make: 'audi',
	model: 'a8',
	color: 'silver',
	year: 2021,
	ownIt: false,
	age: function() {
		return 2021 - this.year;
	}
};


//output
document.writeln("Getting around:" + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");