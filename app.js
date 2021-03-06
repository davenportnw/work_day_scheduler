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

let onePm = document.getElementById("one-pm");
let onePmBtn = document.getElementById("saveOnePm");
let previousOne = document.getElementById("previousOnePm");

let twoPm = document.getElementById("two-pm");
let twoPmBtn = document.getElementById("saveTwoPm");
let previousTwo = document.getElementById("previousTwoPm");

let threePm = document.getElementById("three-pm");
let threePmBtn = document.getElementById("saveThreePm");
let previousThree = document.getElementById("previousThreePm");

let fourPm = document.getElementById("four-pm");
let fourPmBtn = document.getElementById("saveFourPm");
let previousFour = document.getElementById("previousFourPm");

let fivePm = document.getElementById("five-pm");
let fivePmBtn = document.getElementById("saveFivePm");
let previousFive = document.getElementById("previousFivePm");

let sixPm = document.getElementById("six-pm");
let sixPmBtn = document.getElementById("saveSixPm");
let previousSix = document.getElementById("previousSixPm");

let sevenPm = document.getElementById("seven-pm");
let sevenPmBtn = document.getElementById("saveSevenPm");
let previousSeven = document.getElementById("previousSevenPm");

let eightPm = document.getElementById("eight-pm");
let eightPmBtn = document.getElementById("saveEightPm");
let previousEight = document.getElementById("previousEightPm");

let ninePm = document.getElementById("nine-pm");
let ninePmBtn = document.getElementById("saveNinePm");
let previousNinePm = document.getElementById("previousNinePm");


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

    if (previousOne.length === undefined || 0) {
        $("#previousOnePm").append(localStorage.getItem("inputOnePmTb")
        )}

    if (previousTwo.length === undefined || 0) {
        $("#previousTwoPm").append(localStorage.getItem("inputTwoPmTb")
        )}

    if (previousThree.length === undefined || 0) {
        $("#previousThreePm").append(localStorage.getItem("inputThreePmTb")
        )}

    if (previousFour.length === undefined || 0) {
        $("#previousFourPm").append(localStorage.getItem("inputFourPmTb")
        )}

    if (previousFive.length === undefined || 0) {
        $("#previousFivePm").append(localStorage.getItem("inputFivePmTb")
        )}

    if (previousSix.length === undefined || 0) {
        $("#previousSixPm").append(localStorage.getItem("inputSixPmTb")
        )}

    if (previousSeven.length === undefined || 0) {
        $("#previousSevenPm").append(localStorage.getItem("inputSevenPmTb")
        )}

    if (previousEight.length === undefined || 0) {
        $("#previousEightPm").append(localStorage.getItem("inputEightPmTb")
        )}

    if (previousNinePm.length === undefined || 0) {
        $("#previousNinePm").append(localStorage.getItem("inputNinePmTb")
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
            previousNine.innerHTML = localStorage.getItem("inputNineAmTb")
        };
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
            previousTen.innerHTML = localStorage.getItem("inputTenAmTb")
        };
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
           previousEleven.innerHTML = localStorage.getItem("inputElevenAmTb")
        };
    }
});


//12pm
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
            previousTwelve.innerHTML =localStorage.getItem("inputTwelvePmTb")
        }
    }
});

//1pm
//Save button
onePmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputOnePmTb = {
        onePmTB: onePm.value.trim()
     };
    localStorage.setItem("inputOnePmTb", inputOnePmTb.onePmTB);
    localStorage.getItem("inputOnePmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
           previousOne.innerHTML = localStorage.getItem("inputOnePmTb")
        }
    }
});

//2pm
//Save button
twoPmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputTwoPmTb = {
        twoPmTB: twoPm.value.trim()
     };
    localStorage.setItem("inputTwoPmTb", inputTwoPmTb.twoPmTB);
    localStorage.getItem("inputTwoPmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousTwo.innerHTML = localStorage.getItem("inputTwoPmTb")
        }
    }
});

//3pm
//Save button
threePmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputThreePmTb = {
        threePmTB: threePm.value.trim()
     };
    localStorage.setItem("inputThreePmTb", inputThreePmTb.threePmTB);
    localStorage.getItem("inputThreePmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousThree.innerHTML =localStorage.getItem("inputThreePmTb")
        }
    }
});

//4pm
//Save button
fourPmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputFourPmTb = {
        fourPmTB: fourPm.value.trim()
     };
    localStorage.setItem("inputFourPmTb", inputFourPmTb.fourPmTB);
    localStorage.getItem("inputFourPmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousFour.innerHTML = localStorage.getItem("inputFourPmTb")
        }
    }
});

//5pm
//Save button
fivePmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputFivePmTb = {
        fivePmTB: fivePm.value.trim()
     };
    localStorage.setItem("inputFivePmTb", inputFivePmTb.fivePmTB);
    localStorage.getItem("inputFivePmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousFive.innerHTML = localStorage.getItem("inputFivePmTb")
        }
    }
});

//6pm
//Save button
sixPmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputSixPmTb = {
        sixPmTB: sixPm.value.trim()
     };
    localStorage.setItem("inputSixPmTb", inputSixPmTb.sixPmTB);
    localStorage.getItem("inputSixPmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousSix.innerHTML = localStorage.getItem("inputSixPmTb")
        }
    }
});

//7pm
//Save button
sevenPmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputSevenPmTb = {
        sevenPmTB: sevenPm.value.trim()
     };
    localStorage.setItem("inputSevenPmTb", inputSevenPmTb.sevenPmTB);
    localStorage.getItem("inputSevenPmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousSeven.innerHTML = localStorage.getItem("inputSevenPmTb")
        }
    }
});

//8pm
//Save button
eightPmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputEightPmTb = {
        eightPmTB: eightPm.value.trim()
     };
    localStorage.setItem("inputEightPmTb", inputEightPmTb.eightPmTB);
    localStorage.getItem("inputEightPmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousEight.innerHTML = localStorage.getItem("inputEightPmTb")
        }
    }
});

//9pm
//Save button
ninePmBtn.addEventListener("click", function(event) {
    event.preventDefault();
//time block save
    var inputNinePmTb = {
        ninePmTB: ninePm.value.trim()
     };
    localStorage.setItem("inputNinePmTb", inputNinePmTb.ninePmTB);
    localStorage.getItem("inputNinePmTb");
//Writing event
    for (var key in localStorage) {
        if(localStorage.hasOwnProperty(key)) {
            previousNinePm.innerHTML = localStorage.getItem("inputNinePmTb")
        }
    }
});