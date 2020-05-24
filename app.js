//List
//  1.)Display current date
//  2.)

//grab elements

let currentDay = document.getElementById("currentDay");
let timeBlocks = document.getElementById("timeblocks");
let nineAm = document.getElementById("nine-am");
let nineAmBtn = document.getElementById("saveNineAm");
let previousNine = document.getElementById("previousNineAm");

let tenAm = document.getElementById("ten-am");
let tenAmBtn = document.getElementById("saveTenAm");
let previousTen = document.getAnimations("previousTenAm");
//Present current time & date

const today = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("today", today);
currentDay.innerHTML = "<h3>" + today + "</h3>";


runPreviousEvents();
// 9am
//Save button
nineAmBtn.addEventListener("click", function(event) {
    event.preventDefault();

//time block save
    var inputNineAmTb = {
        nineAmTB: nineAm.value.trim()

    };


    localStorage.setItem("inputNineAmTb", inputNineAmTb.nineAmTB);
    localStorage.getItem("inputNineAmTb");

    // previousNine.innerHTML = inputTb.nineAmTB; 
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousNine.append(localStorage.getItem("inputNineAmTb")
            )}
    }

});


function runPreviousEvents(){
    if (previousNine.length === undefined || 0) {
        $("#previousNineAm").append(localStorage.getItem("inputNineAmTb")
        )}

    console.log("previousTen.length", previousTen.length );

    if (previousTen.length === 0) {
        $("#previousTenAm").append(localStorage.getItem("inputTenAmTb")
        )}
}


//10

tenAmBtn.addEventListener("click", function(event) {
    event.preventDefault();

//time block save
    var inputTenAmTb = {
        b: tenAm.value.trim()

    };

    
    localStorage.setItem("inputTenAmTb", inputTenAmTb.b);
    localStorage.getItem("inputTenAmTb");
   
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            $("#previousTenAm").append(localStorage.getItem("inputTenAmTb")
        )};
    }
});