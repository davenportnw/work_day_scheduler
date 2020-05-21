//List
//  1.)Display current date
//  2.)

//grab elements

let currentDay = document.getElementById("currentDay");


//Present current time & date

const today = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("today", today);

currentDay.innerHTML = "<h3>" + today + "</h3>";

