//List
//  1.)Display current date
//  2.)

//grab elements

let currentDay = document.getElementById("currentDay");
let timeBlocks = document.getElementById("timeblocks");
let nineAm = document.getElementById("nine-am");
let nineAmBtn = document.getElementById("saveNineAm");
let previousNine = document.getElementById("previousNine");
//Present current time & date

const today = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("today", today);
currentDay.innerHTML = "<h3>" + today + "</h3>";

//Save button
nineAmBtn.addEventListener("click", function(event) {
    event.preventDefault();

//time block save
    var inputTb = {
        nineAmTB: nineAm.value.trim()

    };


    localStorage.setItem("inputTb", inputTb.nineAmTB);
    console.log("localStorage", localStorage);

    let previousAppt = localStorage.getItem("inputTb");
    // previousNine.innerHTML = inputTb.nineAmTB; 

});

for (var key in localStorage) {
    if(localStorage.hasOwnProperty(key)) {
        previousNine.append(localStorage[key]);
    }
}