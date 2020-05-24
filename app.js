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
let previousTen = document.getElementById("previousTenAm");

let elevenAm = document.getElementById("eleven-am");
let elevenAmBtn = document.getElementById("saveElevenAm");
let previousEleven = document.getElementById("previousElevenAm");

let twelvePm = document.getElementById("twelve-pm");
let twelvePmBtn = document.getElementById("saveTwelvePm");
let previousTwelve = document.getElementById("previousTwelvePm");


//Present current time & date

const today = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("today", today);
currentDay.innerHTML = "<h3>" + today + "</h3>";

//Run previous evevnts 

runPreviousEvents();

function runPreviousEvents(){
    if (previousNine.length === undefined || 0) {
        $("#previousNineAm").append(localStorage.getItem("inputNineAmTb")
        )}

    if (previousTen.length === undefined || 0) {
        $("#previousTenAm").append(localStorage.getItem("inputTenAmTb")
        )}
    
    if (previousEleven.length === undefined || 0) {
        $("#previousElevenAm").append(localStorage.getItem("inputElevenAmTb")
        )}

    if (previousTwelve.length === undefined || 0) {
        $("#previousTwelvePm").append(localStorage.getItem("inputTwelvePmTb")
        )}
}


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

//writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousNine.append(localStorage.getItem("inputNineAmTb")
            )}
    }

});



//10
//Save button
tenAmBtn.addEventListener("click", function(event) {
    event.preventDefault();

//time block save
    var inputTenAmTb = {
        b: tenAm.value.trim()

    };   
    localStorage.setItem("inputTenAmTb", inputTenAmTb.b);
    localStorage.getItem("inputTenAmTb");   
//writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            $("#previousTenAm").append(localStorage.getItem("inputTenAmTb")
        )};
    }
});

//11

//Save button
elevenAmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputElevenAmTb = {
        elevenAmTB: elevenAm.value.trim()
     };
    localStorage.setItem("inputElevenAmTb", inputElevenAmTb.elevenAmTB);
    localStorage.getItem("inputElevenAmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            $("#previousElevenAm").append(localStorage.getItem("inputElevenAmTb")
            )}
    }
});


//12

//Save button
twelvePmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputTwelvePmTb = {
        twelvePmTB: twelvePm.value.trim()
     };
    localStorage.setItem("inputTwelvePmTb", inputTwelvePmTb.twelvePmTB);
    localStorage.getItem("inputTwelvePmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            $("#previousTwelvePm").append(localStorage.getItem("inputTwelvePmTb")
            )}
    }
});