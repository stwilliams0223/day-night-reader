//Get hour of day
var date = new Date();
var current_hour = date.getHours();

console.log(current_hour);





if (current_hour >= 18) {

//If nighttime,
//Remove 'day' class
$('body').removeClass('day');


//Add 'night'class
$('body').addClass('night');


};


